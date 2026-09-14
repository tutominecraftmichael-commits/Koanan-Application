import React, { useState } from 'react';
import { User, ArrowRight, ShieldCheck } from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { Card } from '../../components/ui/Card';
import type { UserAccount, Chronotype } from '../../types';

export interface ProfileSetupModalProps {
  isOpen: boolean;
  initialName: string;
  initialEmail: string;
  initialAvatar: string;
  googleId: string;
  onSaveProfile: (profile: UserAccount, preferences?: { chronotype: Chronotype }) => void;
  onCancel: () => void;
}

export const ProfileSetupModal: React.FC<ProfileSetupModalProps> = ({
  isOpen,
  initialName,
  initialEmail,
  initialAvatar,
  googleId,
  onSaveProfile,
  onCancel,
}) => {
  const [name, setName] = useState(initialName || '');
  const [email, setEmail] = useState(initialEmail || 'etudiant@univ.ci');
  const [academicLevel, setAcademicLevel] = useState('Licence Universitaire');
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    setIsSubmitting(true);

    const profile: UserAccount = {
      name: name.trim(),
      email: email.trim() || initialEmail,
      avatar: initialAvatar || `https://api.dicebear.com/7.x/bottts/svg?seed=${encodeURIComponent(name)}`,
      googleId: googleId || `google-${Date.now()}`,
      academicLevel: academicLevel,
      isLoggedIn: true,
      isDemo: false,
      lastSyncedAt: new Date().toISOString(),
    };

    onSaveProfile(profile, { chronotype: 'evening' });
    setIsSubmitting(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <Card className="w-full max-w-md bg-slate-900/95 border-indigo-500/40 p-5 sm:p-7 shadow-2xl rounded-3xl relative overflow-hidden">
        
        {/* Ambient background glow */}
        <div className="absolute -top-20 -right-20 w-48 h-48 bg-indigo-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />

        {/* Header */}
        <div className="flex items-center gap-3.5 mb-5 border-b border-slate-800/80 pb-4">
          <div className="relative">
            <img
              src={initialAvatar || `https://api.dicebear.com/7.x/bottts/svg?seed=${encodeURIComponent(name || 'User')}`}
              alt="Avatar"
              className="w-12 h-12 rounded-2xl object-cover border-2 border-indigo-500/50 shadow-md"
            />
            <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-emerald-500 border-2 border-slate-900 flex items-center justify-center">
              <ShieldCheck className="w-3 h-3 text-white" />
            </div>
          </div>
          <div>
            <h2 className="text-base sm:text-lg font-extrabold text-white tracking-tight">
              Finalisation de votre Profil
            </h2>
            <p className="text-xs text-slate-400">Compte personnel sécurisé & isolé</p>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-3.5">
          <div className="space-y-1">
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-indigo-400" />
              <span>Votre Prénom & Nom d'Étudiant</span>
            </label>
            <input
              type="text"
              required
              autoFocus
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Ex: Christ Boni"
              className="w-full bg-slate-950 border border-slate-700/90 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
            />
          </div>

          <div className="space-y-1">
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider">
              Email étudiant
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Ex: christ.boni@univ.ci"
              className="w-full bg-slate-950 border border-slate-700/90 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
            />
          </div>

          <div className="space-y-1">
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider">
              Niveau académique
            </label>
            <select
              value={academicLevel}
              onChange={(e) => setAcademicLevel(e.target.value)}
              className="w-full bg-slate-950 border border-slate-700/90 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all cursor-pointer"
            >
              <option value="Licence Universitaire">Licence Universitaire</option>
              <option value="Master Universitaire">Master Universitaire</option>
              <option value="Cycle Ingénieur">Cycle Ingénieur (ESATIC, Polytech...)</option>
              <option value="Classes Préparatoires (CPGE)">Classes Préparatoires (CPGE)</option>
              <option value="Faculté de Médecine / Pharmacie">Faculté de Médecine / Santé</option>
              <option value="Lycée / Baccalauréat">Lycée / Baccalauréat</option>
              <option value="Autre formation supérieure">Autre formation supérieure</option>
            </select>
          </div>

          {/* Buttons */}
          <div className="flex items-center justify-end gap-2.5 pt-3 border-t border-slate-800">
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={onCancel}
              className="text-xs"
            >
              Annuler
            </Button>
            <Button
              type="submit"
              variant="glow"
              size="sm"
              isLoading={isSubmitting}
              rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
              className="text-xs font-bold px-4"
            >
              Accéder à mon espace
            </Button>
          </div>
        </form>

      </Card>
    </div>
  );
};
