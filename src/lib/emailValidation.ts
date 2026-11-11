/**
 * Module de validation stricte d'adresse email
 * Conforme RFC 5322, détection anti-jetables, anti-fictifs et fautes de frappe de domaines
 */

export const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;

// Liste des services d'emails temporaires et jetables interdits
export const DISPOSABLE_DOMAINS = new Set([
  'yopmail.com', 'yopmail.fr', 'yopmail.net', 'tempmail.com', 'temp-mail.org', 
  'guerrillamail.com', 'mailinator.com', '10minutemail.com', 'trashmail.com', 
  'sharklasers.com', 'getairmail.com', 'dispostable.com', 'fakemailgenerator.com', 
  'mohmal.com', 'crazymailing.com', 'burnermail.io', 'inboxkitten.com', 
  'throwawaymail.com', 'generator.email', 'emailondeck.com', 'tempail.com',
  'mytemp.email', 'nada.ltd', 'dropmail.me', 'getnada.com', 'crazymailing.com',
  'fakemail.net', 'disposablemail.com', 'trashmail.net', 'mytempemail.com'
]);

// Préfixes manifestement fictifs ou inventés
export const INVENTED_PREFIXES = new Set([
  'test', 'fake', 'asdf', 'qwerty', 'admin', 'user', 'demo', 'sample', 
  'aaa', 'abc', 'xyz', '123', 'temp', 'azerty', 'noemail', 'none', 
  'test1', 'test2', 'test123', 'foo', 'bar', 'testeur', 'bidon', 'faux',
  'blabla', 'random', 'jesaispas', 'inconnu', 'exemple', 'example', 'nobody'
]);

// Fautes de frappe courantes sur les fournisseurs majeurs
export const DOMAIN_TYPOS: Record<string, string> = {
  'gmai.com': 'gmail.com',
  'gamil.com': 'gmail.com',
  'gmial.com': 'gmail.com',
  'gmaill.com': 'gmail.com',
  'gmaik.com': 'gmail.com',
  'yaho.com': 'yahoo.com',
  'yahooo.com': 'yahoo.com',
  'yaho.fr': 'yahoo.fr',
  'hotmial.com': 'hotmail.com',
  'hotmai.com': 'hotmail.com',
  'outlok.com': 'outlook.com',
  'outloo.com': 'outlook.com',
  'iclud.com': 'icloud.com',
  'iclou.com': 'icloud.com',
};

/**
 * Validation stricte et rigoureuse de l'adresse email
 * Vérifie la syntaxe RFC, les noms inventés, les domaines jetables et les extensions réelles
 */
export function validateStrictEmail(email: string): { isValid: boolean; error?: string } {
  const clean = email.trim().toLowerCase();
  if (!clean) {
    return { isValid: false, error: "Veuillez renseigner votre adresse email." };
  }

  if (!EMAIL_REGEX.test(clean)) {
    return { isValid: false, error: "Format d'adresse email invalide. Exemple : etudiant@gmail.com ou nom@univ.edu" };
  }

  const [localPart, domainPart] = clean.split('@');
  if (!localPart || !domainPart) {
    return { isValid: false, error: "L'adresse email doit comporter un identifiant et un nom de domaine valide." };
  }

  // Vérifier la longueur de la partie locale
  if (localPart.length < 2) {
    return { isValid: false, error: "Le nom d'utilisateur de l'email est trop court (au moins 2 caractères requis)." };
  }

  const isLocalDev = typeof window !== 'undefined' && (
    window.location.hostname === 'localhost' || 
    window.location.hostname === '127.0.0.1'
  );

  // Interdiction des adresses inventées évidentes (désactivée en dev pour faciliter les tests)
  if (!isLocalDev && INVENTED_PREFIXES.has(localPart)) {
    return { isValid: false, error: `L'adresse "${localPart}@${domainPart}" est fictive ou de test. Veuillez entrer votre véritable adresse email active.` };
  }

  // Interdiction des répétitions absurdes (ex: aaaaa@..., 11111@...)
  if (!isLocalDev && /^(.)\1{3,}$/.test(localPart)) {
    return { isValid: false, error: "Cette adresse email semble inventée. Veuillez entrer une adresse email personnelle ou universitaire valide." };
  }

  // Vérifier les fautes de frappe de domaines célèbres
  if (DOMAIN_TYPOS[domainPart]) {
    return { isValid: false, error: `Domaine introuvable. Vouliez-vous écrire @${DOMAIN_TYPOS[domainPart]} au lieu de @${domainPart} ?` };
  }

  // Interdiction stricte des domaines jetables / poubelles
  if (DISPOSABLE_DOMAINS.has(domainPart)) {
    return { isValid: false, error: "Les adresses email temporaires ou jetables (yopmail, temp-mail...) sont strictement refusées. Utilisez une véritable adresse email pour sauvegarder votre planning." };
  }

  // Vérifier le TLD (extension)
  const parts = domainPart.split('.');
  const tld = parts[parts.length - 1];
  if (!tld || tld.length < 2 || !/^[a-z]+$/i.test(tld)) {
    return { isValid: false, error: "L'extension du domaine (.com, .fr, .ci, .edu...) est invalide." };
  }

  const invalidTlds = new Set(['test', 'fake', 'local', 'invalid', 'example', 'dummy', 'localhost']);
  if (!isLocalDev && invalidTlds.has(tld)) {
    return { isValid: false, error: `L'extension .${tld} n'est pas un domaine internet réel.` };
  }

  // Le nom de domaine principal (avant TLD) doit comporter au moins 2 caractères
  const mainDomain = parts[parts.length - 2];
  if (!mainDomain || mainDomain.length < 2) {
    return { isValid: false, error: "Le nom de domaine de l'email est invalide." };
  }

  return { isValid: true };
}
