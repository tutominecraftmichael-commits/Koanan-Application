#!/usr/bin/env node
/**
 * Donne (ou retire) l'autorisation « administrateur » à un compte Konan, par son email.
 * À lancer SUR VOTRE ORDINATEUR (jamais sur Vercel), avec la clé de service Firebase dans .env.local :
 *
 *   node scripts/set-admin-claim.mjs prenom.nom@gmail.com            -> donne l'accès admin
 *   node scripts/set-admin-claim.mjs prenom.nom@gmail.com --remove   -> retire l'accès admin
 *   node scripts/set-admin-claim.mjs --list                          -> liste les administrateurs
 *
 * Le compte doit déjà exister (s'être connecté au moins une fois à l'application).
 * L'autorisation est un « custom claim » Firebase { admin: true } : elle apparaît dans le jeton
 * d'identité du compte, et le serveur (/api/admin-data) l'exige avec une connexion par Google.
 * Après un changement, la personne doit se reconnecter (ou attendre jusqu'à 1 h).
 */
import fs from 'node:fs';
import path from 'node:path';
import { initializeApp, cert } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';

function readLocalEnv(key) {
  if (process.env[key]) return process.env[key];
  for (const file of ['.env.local', '.env']) {
    const p = path.resolve(process.cwd(), file);
    if (!fs.existsSync(p)) continue;
    for (const line of fs.readFileSync(p, 'utf8').split('\n')) {
      const t = line.trim();
      if (t.startsWith(`${key}=`)) return t.slice(key.length + 1).trim().replace(/^['"]|['"]$/g, '');
    }
  }
  return '';
}

const args = process.argv.slice(2);
const listMode = args.includes('--list');
const remove = args.includes('--remove');
const email = args.find((a) => !a.startsWith('--'));

if (!listMode && !email) {
  console.error('Usage : node scripts/set-admin-claim.mjs <email> [--remove]   |   --list');
  process.exit(1);
}

const raw = readLocalEnv('FIREBASE_SERVICE_ACCOUNT_KEY');
if (!raw) {
  console.error('FIREBASE_SERVICE_ACCOUNT_KEY introuvable (ajoutez-la dans .env.local).');
  process.exit(1);
}
const serviceAccount = raw.startsWith('{') ? JSON.parse(raw) : JSON.parse(Buffer.from(raw, 'base64').toString('utf-8'));
initializeApp({ credential: cert(serviceAccount), projectId: serviceAccount.project_id });
const auth = getAuth();

if (listMode) {
  let token;
  const admins = [];
  do {
    const page = await auth.listUsers(1000, token);
    for (const u of page.users) if (u.customClaims?.admin === true) admins.push(u.email || u.uid);
    token = page.pageToken;
  } while (token);
  console.log(admins.length ? `Administrateurs (${admins.length}) :\n- ${admins.join('\n- ')}` : 'Aucun administrateur.');
  process.exit(0);
}

let user;
try {
  user = await auth.getUserByEmail(email.toLowerCase().trim());
} catch {
  console.error(`Aucun compte Konan avec l'email ${email}. Connectez-vous d'abord une fois à l'application avec ce compte.`);
  process.exit(1);
}

const claims = { ...(user.customClaims || {}) };
if (remove) delete claims.admin;
else claims.admin = true;
await auth.setCustomUserClaims(user.uid, claims);

const providers = user.providerData.map((p) => p.providerId).join(', ') || 'aucun';
console.log(`${remove ? 'Accès admin RETIRÉ' : 'Accès admin DONNÉ'} : ${user.email}`);
console.log(`  méthodes de connexion du compte : ${providers}`);
if (!remove && !user.providerData.some((p) => p.providerId === 'google.com')) {
  console.log("  Attention : ce compte n'a jamais utilisé la connexion Google ; l'accès admin l'exige.");
}
console.log('  La personne doit se reconnecter pour que le changement prenne effet.');
process.exit(0);
