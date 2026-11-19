import React, { useMemo, useState } from 'react';
import {
  Check,
  Glasses,
  Lock,
  Palette,
  Save,
  Shirt,
  Shuffle,
  Smile,
  User,
  X,
} from 'lucide-react';
import {
  ACCESSORY_OPTIONS,
  ALL_AVATAR_ITEMS,
  BG_COLORS,
  DEFAULT_AVATAR_CONFIG,
  EYE_OPTIONS,
  HAIR_COLORS,
  HAIR_OPTIONS,
  MOUTH_OPTIONS,
  OUTFIT_OPTIONS,
  SKIN_TONES,
  adaptAvatarForGender,
  defaultAvatarForSeed,
  filterByGender,
  randomizeUnlockedAvatar,
  type AvatarConfig,
  type AvatarGender,
  type AvatarItemOption,
} from '../../lib/avatar/avatarCatalog';
import {
  avatarErrorMessage,
  buyAvatarItemApi,
  saveAvatarConfigApi,
} from '../../services/friendsApi';
import { AnimatedAvatar } from './AnimatedAvatar';
import { GoldCoinIcon } from '../gamification/GoldCoin';
import { soundFX } from '../../lib/audioEffects';

export type EditorTab = 'skin' | 'hair' | 'eyes' | 'mouth' | 'outfit' | 'accessory';

export interface AvatarEditorModalProps {
  initialConfig: AvatarConfig | null;
  unlockedItems: string[];
  gold: number;
  userSeed: string;
  initialTab?: EditorTab;
  onClose: () => void;
  onSaved: (config: AvatarConfig) => void;
  onPurchased: (gold: number, unlockedItems: string[]) => void;
  onOpenQuests?: () => void;
  onToast?: (msg: string) => void;
}

const TABS: Array<{ id: EditorTab; label: string }> = [
  { id: 'skin', label: 'Peau' },
  { id: 'hair', label: 'Coiffure' },
  { id: 'eyes', label: 'Yeux' },
  { id: 'mouth', label: 'Bouche' },
  { id: 'outfit', label: 'Tenue' },
  { id: 'accessory', label: 'Accessoires' },
];

const fr = (n: number) => Math.max(0, Math.round(n)).toLocaleString('fr-FR');

export const AvatarEditorModal: React.FC<AvatarEditorModalProps> = ({
  initialConfig,
  unlockedItems,
  gold,
  userSeed,
  initialTab = 'skin',
  onClose,
  onSaved,
  onPurchased,
  onOpenQuests,
  onToast,
}) => {
  const [draft, setDraft] = useState<AvatarConfig>(() => {
    const base: AvatarConfig = {
      ...DEFAULT_AVATAR_CONFIG,
      ...(initialConfig || defaultAvatarForSeed(userSeed)),
    };
    return adaptAvatarForGender(base, base.gender);
  });
  const [tab, setTab] = useState<EditorTab>(initialTab);
  const [extraOwned, setExtraOwned] = useState<string[]>([]);
  const [goldOverride, setGoldOverride] = useState<number | null>(null);
  const [confirmItem, setConfirmItem] = useState<{ item: AvatarItemOption; field: 'hair' | 'outfit' | 'accessory' } | null>(null);
  const [buying, setBuying] = useState(false);
  const [saving, setSaving] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const ownedSet = useMemo(() => new Set([...unlockedItems, ...extraOwned]), [unlockedItems, extraOwned]);
  const currentGold = goldOverride !== null ? goldOverride : gold;

  const isOwned = (item: AvatarItemOption) => item.price === 0 || ownedSet.has(item.id);

  const handleSwitchGender = (nextGender: AvatarGender) => {
    if (draft.gender === nextGender) return;
    soundFX.playCheckmarkPop();
    setConfirmItem(null);
    setErrorMsg('');
    setDraft((p) => adaptAvatarForGender(p, nextGender));
  };

  const visibleHairs = useMemo(() => filterByGender(HAIR_OPTIONS, draft.gender), [draft.gender]);
  const visibleOutfits = useMemo(() => filterByGender(OUTFIT_OPTIONS, draft.gender), [draft.gender]);
  const visibleAccessories = useMemo(() => filterByGender(ACCESSORY_OPTIONS, draft.gender), [draft.gender]);

  // Vérifie si la prévisualisation contient un item premium non encore acheté
  const lockedSelectedItem = useMemo<AvatarItemOption | null>(() => {
    for (const id of [draft.hair, draft.outfit, draft.accessory]) {
      const it = ALL_AVATAR_ITEMS[id];
      if (it && it.price > 0 && !ownedSet.has(it.id)) return it;
    }
    return null;
  }, [draft.hair, draft.outfit, draft.accessory, ownedSet]);

  const selectOption = (field: 'hair' | 'eyes' | 'mouth' | 'outfit' | 'accessory', item: AvatarItemOption) => {
    setErrorMsg('');
    soundFX.playCheckmarkPop();
    setDraft((prev) => ({ ...prev, [field]: item.id }));
    if (item.price > 0 && !ownedSet.has(item.id) && (field === 'hair' || field === 'outfit' || field === 'accessory')) {
      setConfirmItem({ item, field });
    }
  };

  const handleConfirmBuy = async () => {
    if (!confirmItem || buying) return;
    setBuying(true);
    setErrorMsg('');
    const r = await buyAvatarItemApi(confirmItem.item.id);
    setBuying(false);
    if (r.ok) {
      soundFX.playVictoryCelebration();
      const nextOwned = Array.from(new Set([...(r.data.unlockedItems || []), ...ownedSet, confirmItem.item.id]));
      setExtraOwned(nextOwned);
      setGoldOverride(r.data.gold);
      onPurchased(r.data.gold, nextOwned);
      setDraft((prev) => ({ ...prev, [confirmItem.field]: confirmItem.item.id }));
      onToast?.(`« ${confirmItem.item.label} » débloqué et équipé !`);
      setConfirmItem(null);
    } else {
      setErrorMsg(avatarErrorMessage(r.error));
    }
  };

  const handleSave = async () => {
    if (saving) return;
    if (lockedSelectedItem) {
      const field = HAIR_OPTIONS.some((x) => x.id === lockedSelectedItem.id)
        ? 'hair'
        : OUTFIT_OPTIONS.some((x) => x.id === lockedSelectedItem.id)
          ? 'outfit'
          : 'accessory';
      setConfirmItem({ item: lockedSelectedItem, field });
      return;
    }
    setSaving(true);
    setErrorMsg('');
    const r = await saveAvatarConfigApi(draft);
    setSaving(false);
    if (r.ok) {
      soundFX.playCelebrationFanfare();
      onSaved(r.data.avatarConfig);
      onToast?.('Ton personnage est enregistré sur ton profil !');
      onClose();
    } else {
      setErrorMsg(avatarErrorMessage(r.error));
    }
  };

  const renderItemGrid = (
    field: 'hair' | 'eyes' | 'mouth' | 'outfit' | 'accessory',
    options: AvatarItemOption[],
  ) => (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
      {options.map((item) => {
        const selected = draft[field] === item.id;
        const locked = !isOwned(item);
        const previewConfig: AvatarConfig = { ...draft, [field]: item.id };
        return (
          <button
            key={item.id}
            type="button"
            onClick={() => selectOption(field, item)}
            className={`relative p-2.5 rounded-2xl border-2 text-left cursor-pointer transition-all flex flex-col items-center gap-2 ${
              selected
                ? 'bg-sky-50 border-sky-400 dark:bg-sky-500/15 dark:border-sky-400 shadow-sm'
                : locked
                  ? 'bg-white dark:bg-slate-900/70 border-amber-300/60 dark:border-amber-400/25 hover:border-amber-400/70'
                  : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-white/[0.08] hover:border-slate-300 dark:hover:border-white/20'
            }`}
          >
            {/* Pastille statut (cadenas + prix ou coche) */}
            {locked ? (
              <span className="absolute top-2 right-2 inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-amber-100 dark:bg-amber-500/20 border border-amber-300 dark:border-amber-400/40 text-[10px] font-black text-amber-800 dark:text-amber-300 tabular-nums">
                <Lock className="w-2.5 h-2.5" />
                <GoldCoinIcon size={11} />
                {item.price}
              </span>
            ) : selected ? (
              <span className="absolute top-2 right-2 w-5 h-5 rounded-full bg-sky-500 text-white flex items-center justify-center">
                <Check className="w-3 h-3" />
              </span>
            ) : item.price > 0 ? (
              <span className="absolute top-2 right-2 px-1.5 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-500/20 text-[9px] font-black uppercase text-emerald-700 dark:text-emerald-300">
                Acquis
              </span>
            ) : null}

            <AnimatedAvatar
              config={previewConfig}
              seed={`${userSeed}-${item.id}`}
              size={60}
              className={locked ? 'opacity-90' : ''}
            />

            <span className="text-xs font-extrabold text-slate-900 dark:text-white text-center leading-tight line-clamp-1">
              {item.label}
            </span>
          </button>
        );
      })}
    </div>
  );

  return (
    <div className="fixed inset-0 z-[105] bg-slate-50 dark:bg-[#070B13] flex flex-col overflow-hidden">
      {/* Barre supérieure */}
      <header className="shrink-0 flex items-center justify-between gap-3 px-4 py-3 border-b border-slate-200 dark:border-white/10 bg-white/95 dark:bg-[#0B1120]/95 backdrop-blur-md">
        <div className="flex items-center gap-2.5 min-w-0">
          <button
            type="button"
            onClick={onClose}
            aria-label="Fermer l'éditeur"
            className="w-9 h-9 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-white/[0.06] dark:hover:bg-white/[0.12] text-slate-700 dark:text-slate-200 flex items-center justify-center cursor-pointer transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <h1 className="m-0 text-base sm:text-lg font-black text-slate-900 dark:text-white truncate">
            Personnaliser mon personnage
          </h1>
        </div>

        <div className="shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-50 dark:bg-amber-500/15 border border-amber-300/80 dark:border-amber-400/35 text-xs sm:text-sm font-black tabular-nums text-amber-800 dark:text-amber-300">
          <GoldCoinIcon size={16} />
          <span>{fr(currentGold)}</span>
        </div>
      </header>

      {/* Scène d'aperçu animé en direct */}
      <div className="shrink-0 px-4 py-4 bg-gradient-to-b from-slate-100/90 to-slate-50 dark:from-[#0E1629] dark:to-[#070B13] border-b border-slate-200/80 dark:border-white/[0.08]">
        <div className="max-w-xl mx-auto flex flex-col items-center gap-3">
          <div className="relative">
            <AnimatedAvatar
              config={draft}
              seed={userSeed}
              size={132}
              className="ring-4 ring-sky-400/45 shadow-2xl shadow-sky-500/15"
              alt="Aperçu de ton personnage animé"
            />
            <button
              type="button"
              onClick={() => {
                soundFX.playCheckmarkPop();
                setDraft(randomizeUnlockedAvatar(Array.from(ownedSet), draft.gender));
              }}
              title="Look aléatoire"
              aria-label="Générer un look aléatoire"
              className="absolute -bottom-1 -right-1 w-9 h-9 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-white/15 text-slate-700 dark:text-slate-200 hover:text-sky-500 flex items-center justify-center shadow-md cursor-pointer transition-transform active:scale-90"
            >
              <Shuffle className="w-4 h-4" />
            </button>
          </div>

          {/* Bascule Homme / Femme */}
          <div className="inline-flex p-1 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 shadow-xs">
            <button
              type="button"
              onClick={() => handleSwitchGender('male')}
              className={`px-4 py-1.5 rounded-lg text-xs font-black transition-all cursor-pointer ${
                draft.gender === 'male'
                  ? 'bg-sky-500 text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Homme
            </button>
            <button
              type="button"
              onClick={() => handleSwitchGender('female')}
              className={`px-4 py-1.5 rounded-lg text-xs font-black transition-all cursor-pointer ${
                draft.gender === 'female'
                  ? 'bg-sky-500 text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Femme
            </button>
          </div>
        </div>
      </div>

      {/* Onglets de catégories */}
      <nav
        aria-label="Catégories de personnalisation"
        className="shrink-0 border-b border-slate-200 dark:border-white/10 bg-white dark:bg-[#0B1120] overflow-x-auto"
      >
        <div className="max-w-xl mx-auto flex items-center gap-1 px-3 py-2 min-w-max">
          {TABS.map((t) => {
            const active = tab === t.id;
            const icon =
              t.id === 'skin' ? <Palette className="w-3.5 h-3.5" />
                : t.id === 'hair' ? <User className="w-3.5 h-3.5" />
                  : t.id === 'eyes' || t.id === 'mouth' ? <Smile className="w-3.5 h-3.5" />
                    : t.id === 'outfit' ? <Shirt className="w-3.5 h-3.5" />
                      : <Glasses className="w-3.5 h-3.5" />;
            return (
              <button
                key={t.id}
                type="button"
                onClick={() => setTab(t.id)}
                className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-extrabold cursor-pointer transition-all whitespace-nowrap ${
                  active
                    ? 'bg-sky-500 text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/[0.06]'
                }`}
              >
                {icon}
                <span>{t.label}</span>
              </button>
            );
          })}
        </div>
      </nav>

      {/* Contenu scrollable des options */}
      <div className="flex-1 overflow-y-auto px-4 py-4">
        <div className="max-w-xl mx-auto space-y-5 pb-6">
          {tab === 'skin' && (
            <>
              <div className="space-y-2.5">
                <p className="m-0 text-xs font-black uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Teint de peau (Gratuit)
                </p>
                <div className="grid grid-cols-3 sm:grid-cols-5 gap-2.5">
                  {SKIN_TONES.map((tone) => {
                    const selected = draft.skinColor === tone.value;
                    return (
                      <button
                        key={tone.value}
                        type="button"
                        onClick={() => { soundFX.playCheckmarkPop(); setDraft((p) => ({ ...p, skinColor: tone.value })); }}
                        className={`p-2.5 rounded-2xl border-2 flex flex-col items-center gap-1.5 cursor-pointer transition-all ${
                          selected
                            ? 'bg-sky-50 border-sky-400 dark:bg-sky-500/15 dark:border-sky-400'
                            : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-white/[0.08]'
                        }`}
                      >
                        <span
                          className="w-10 h-10 rounded-full border-2 border-white dark:border-slate-700 shadow-inner"
                          style={{ background: tone.value }}
                        />
                        <span className="text-[11px] font-bold text-slate-700 dark:text-slate-200 text-center leading-tight">
                          {tone.label}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="space-y-2.5">
                <p className="m-0 text-xs font-black uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Couleur de fond (Gratuit)
                </p>
                <div className="flex flex-wrap gap-2.5">
                  {BG_COLORS.map((bg) => {
                    const selected = (draft.bgColor || '#1E3A5F') === bg.value;
                    return (
                      <button
                        key={bg.value}
                        type="button"
                        onClick={() => { soundFX.playCheckmarkPop(); setDraft((p) => ({ ...p, bgColor: bg.value })); }}
                        aria-label={`Fond ${bg.label}`}
                        title={bg.label}
                        className={`w-10 h-10 rounded-full cursor-pointer transition-transform active:scale-90 ${
                          selected ? 'ring-3 ring-sky-400 ring-offset-2 ring-offset-slate-50 dark:ring-offset-[#070B13] scale-105' : 'border border-white/20'
                        }`}
                        style={{ background: bg.value }}
                      />
                    );
                  })}
                </div>
              </div>
            </>
          )}

          {tab === 'hair' && (
            <>
              <div className="space-y-2">
                <p className="m-0 text-xs font-black uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Couleur des cheveux (Gratuit)
                </p>
                <div className="flex flex-wrap gap-2.5">
                  {HAIR_COLORS.map((hc) => {
                    const selected = (draft.hairColor || '#151218') === hc.value;
                    return (
                      <button
                        key={hc.value}
                        type="button"
                        onClick={() => { soundFX.playCheckmarkPop(); setDraft((p) => ({ ...p, hairColor: hc.value })); }}
                        aria-label={hc.label}
                        title={hc.label}
                        className={`w-9 h-9 rounded-full cursor-pointer transition-transform active:scale-90 ${
                          selected ? 'ring-3 ring-sky-400 ring-offset-2 ring-offset-slate-50 dark:ring-offset-[#070B13] scale-105' : 'border border-slate-300 dark:border-white/20'
                        }`}
                        style={{ background: hc.value }}
                      />
                    );
                  })}
                </div>
              </div>
              {renderItemGrid('hair', visibleHairs)}
            </>
          )}

          {tab === 'eyes' && renderItemGrid('eyes', EYE_OPTIONS)}
          {tab === 'mouth' && renderItemGrid('mouth', MOUTH_OPTIONS)}
          {tab === 'outfit' && renderItemGrid('outfit', visibleOutfits)}
          {tab === 'accessory' && renderItemGrid('accessory', visibleAccessories)}
        </div>
      </div>

      {/* Pied de page : bouton Enregistrer sur mon profil */}
      <footer className="shrink-0 px-4 pt-3 pb-[max(0.85rem,env(safe-area-inset-bottom))] border-t border-slate-200 dark:border-white/10 bg-white/95 dark:bg-[#0B1120]/95 backdrop-blur-md">
        <div className="max-w-xl mx-auto space-y-2">
          {errorMsg && (
            <p className="m-0 text-center text-xs font-bold text-rose-600 dark:text-rose-400">{errorMsg}</p>
          )}
          <button
            type="button"
            disabled={saving}
            onClick={handleSave}
            className={`w-full h-12 rounded-2xl font-black text-sm flex items-center justify-center gap-2 cursor-pointer transition-all active:scale-[0.98] disabled:opacity-60 shadow-lg ${
              lockedSelectedItem
                ? 'bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 shadow-amber-500/25'
                : 'bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white shadow-sky-500/25'
            }`}
          >
            {lockedSelectedItem ? (
              <>
                <Lock className="w-4 h-4" />
                <span>Débloquer « {lockedSelectedItem.label} » ({lockedSelectedItem.price} pièces d’or)</span>
              </>
            ) : (
              <>
                <Save className="w-4 h-4" />
                <span>{saving ? 'Enregistrement…' : 'Enregistrer sur mon profil'}</span>
              </>
            )}
          </button>
        </div>
      </footer>

      {/* Modale de confirmation d'achat d'un skin premium avec les pièces d'or */}
      {confirmItem && (
        <div
          className="fixed inset-0 z-[120] flex items-end sm:items-center justify-center bg-slate-950/75 backdrop-blur-sm p-0 sm:p-4"
          onClick={() => !buying && setConfirmItem(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label={`Acheter ${confirmItem.item.label}`}
            onClick={(e) => e.stopPropagation()}
            className="w-full sm:max-w-sm rounded-t-3xl sm:rounded-3xl bg-white dark:bg-[#0F1626] border border-slate-200 dark:border-white/10 p-6 shadow-2xl space-y-4 text-center animate-in fade-in zoom-in-95 duration-150"
          >
            <div className="flex justify-center">
              <AnimatedAvatar
                config={{ ...draft, [confirmItem.field]: confirmItem.item.id }}
                seed={`${userSeed}-buy`}
                size={96}
                className="ring-4 ring-amber-400/50"
              />
            </div>

            <div className="space-y-1">
              <h2 className="m-0 text-lg font-black text-slate-900 dark:text-white">
                {confirmItem.item.label}
              </h2>
              <p className="m-0 text-xs font-bold text-slate-500 dark:text-slate-400">
                Débloqué définitivement sur ton compte
              </p>
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-amber-50 dark:bg-amber-500/15 border border-amber-200 dark:border-amber-400/35">
              <GoldCoinIcon size={20} />
              <span className="text-lg font-black tabular-nums text-amber-800 dark:text-amber-300">
                {fr(confirmItem.item.price)} pièces d’or
              </span>
            </div>

            {currentGold >= confirmItem.item.price ? (
              <div className="space-y-2.5 pt-1">
                <p className="m-0 text-xs text-slate-600 dark:text-slate-300">
                  Ton solde après achat : <b>{fr(currentGold - confirmItem.item.price)} pièces d’or</b>
                </p>
                <div className="flex gap-2">
                  <button
                    type="button"
                    disabled={buying}
                    onClick={() => setConfirmItem(null)}
                    className="flex-1 h-11 rounded-xl bg-slate-100 dark:bg-white/[0.08] text-slate-700 dark:text-slate-200 font-extrabold text-sm cursor-pointer disabled:opacity-50"
                  >
                    Annuler
                  </button>
                  <button
                    type="button"
                    disabled={buying}
                    onClick={handleConfirmBuy}
                    className="flex-1 h-11 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 font-black text-sm cursor-pointer shadow-md shadow-amber-500/25 disabled:opacity-50"
                  >
                    {buying ? 'Achat…' : 'Acheter'}
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-3 pt-1">
                <p className="m-0 text-xs font-semibold text-rose-600 dark:text-rose-300 leading-relaxed">
                  Il te manque <b>{fr(confirmItem.item.price - currentGold)} pièces d’or</b> (tu as {fr(currentGold)} pièces d’or). Complète des <b>quêtes d’XP entre amis</b> pour gagner 100 à 500 pièces d’or !
                </p>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => setConfirmItem(null)}
                    className="flex-1 h-11 rounded-xl bg-slate-100 dark:bg-white/[0.08] text-slate-700 dark:text-slate-200 font-extrabold text-sm cursor-pointer"
                  >
                    Fermer
                  </button>
                  {onOpenQuests && (
                    <button
                      type="button"
                      onClick={() => {
                        setConfirmItem(null);
                        onClose();
                        onOpenQuests();
                      }}
                      className="flex-1 h-11 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-black text-sm cursor-pointer"
                    >
                      Voir les quêtes
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default AvatarEditorModal;
