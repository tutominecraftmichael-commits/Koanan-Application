import React, { memo, useId } from 'react';
import {
  defaultAvatarForSeed,
  hashAvatarSeed,
  type AvatarConfig,
} from '../../lib/avatar/avatarCatalog';

export interface AnimatedAvatarProps {
  /** Configuration personnalisée (si null/undefined, un avatar animé par défaut est généré à partir de `seed`) */
  config?: AvatarConfig | null;
  /** Identifiant unique de l'élève (konanId, nom ou uid) pour décaler les clignements et générer le fallback */
  seed?: string;
  /** Diamètre en pixels */
  size?: number;
  /** Classes supplémentaires (ex. anneau ring-2) */
  className?: string;
  /** Affiche une petite pastille incitant l'élève à personnaliser son personnage */
  showCustomizeBadge?: boolean;
  /** Label accessible */
  alt?: string;
}

/** Assombrit légèrement une couleur hex pour les ombres du cou/oreilles. */
function shadeHex(hex: string, factor: number): string {
  const clean = hex.replace('#', '');
  if (clean.length !== 6) return hex;
  const r = Math.max(0, Math.min(255, Math.round(parseInt(clean.slice(0, 2), 16) * factor)));
  const g = Math.max(0, Math.min(255, Math.round(parseInt(clean.slice(2, 4), 16) * factor)));
  const b = Math.max(0, Math.min(255, Math.round(parseInt(clean.slice(4, 6), 16) * factor)));
  return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
}

export const AnimatedAvatar: React.FC<AnimatedAvatarProps> = memo(({
  config,
  seed = 'konan',
  size = 44,
  className = '',
  showCustomizeBadge = false,
  alt = 'Avatar KONAN',
}) => {
  const clipId = useId();
  const c: AvatarConfig = config || defaultAvatarForSeed(seed);
  const hairColor = c.hairColor || '#151218';
  const hairHighlight = shadeHex(hairColor, 1.35);
  const skinShadow = shadeHex(c.skinColor, 0.84);
  const bg = c.bgColor || '#1E3A5F';
  const isFemale = c.gender === 'female';

  // Décalages déterministes par utilisateur : dans une ligue de 30 joueurs, personne ne cligne en même temps
  const h = hashAvatarSeed(seed);
  const blinkDuration = `${(3.5 + ((h % 16) / 10)).toFixed(1)}s`;
  const blinkDelay = `-${((h % 47) / 10).toFixed(1)}s`;
  const lookDuration = `${(6.4 + (((h >> 4) % 28) / 10)).toFixed(1)}s`;
  const lookDelay = `-${(((h >> 8) % 62) / 10).toFixed(1)}s`;

  // Calque arrière des cheveux (visible derrière la tête et le cou)
  const renderBackHair = () => {
    switch (c.hair) {
      case 'hair_afro':
        return (
          <g fill={hairColor}>
            <circle cx="50" cy="40" r="30" />
            <circle cx="26" cy="46" r="13" />
            <circle cx="74" cy="46" r="13" />
            <circle cx="32" cy="24" r="13" />
            <circle cx="68" cy="24" r="13" />
            <circle cx="50" cy="18" r="14" />
          </g>
        );
      case 'hair_star_puffs':
        return (
          <g>
            <circle cx="24" cy="27" r="15" fill={hairColor} />
            <circle cx="76" cy="27" r="15" fill={hairColor} />
            <path d="M29 36 L36 39" stroke="#F5C451" strokeWidth="3.2" strokeLinecap="round" />
            <path d="M71 36 L64 39" stroke="#F5C451" strokeWidth="3.2" strokeLinecap="round" />
            <ellipse cx="50" cy="44" rx="25" ry="24" fill={hairColor} />
          </g>
        );
      case 'hair_braids':
      case 'hair_crown_braids':
        return (
          <g>
            <ellipse cx="50" cy="44" rx="26" ry="25" fill={hairColor} />
            {/* Tresses tombantes à gauche et à droite */}
            {[26, 32, 68, 74].map((x, idx) => (
              <g key={x}>
                <rect x={x - 3} y="44" width="6" height="36" rx="3" fill={hairColor} />
                {c.hair === 'hair_crown_braids' && (
                  <>
                    <rect x={x - 3.2} y={56 + (idx % 2) * 5} width="6.4" height="3" rx="1" fill="#F5C451" />
                    <rect x={x - 3.2} y={69 + (idx % 2) * 3} width="6.4" height="3" rx="1" fill="#F5C451" />
                  </>
                )}
              </g>
            ))}
          </g>
        );
      case 'hair_locs':
      case 'hair_flame_locs':
        return (
          <g>
            <ellipse cx="50" cy="42" rx="26" ry="24" fill={hairColor} />
            {[25, 31, 69, 75].map((x) => (
              <g key={x}>
                <rect x={x - 3.2} y="42" width="6.4" height="35" rx="3.2" fill={hairColor} />
                {c.hair === 'hair_flame_locs' && (
                  <rect x={x - 3} y="66" width="6" height="11" rx="3" fill="#F59E0B" />
                )}
              </g>
            ))}
          </g>
        );
      case 'hair_bun':
        return (
          <g fill={hairColor}>
            <circle cx="50" cy="17" r="12" />
            <ellipse cx="50" cy="25" rx="10" ry="3.5" fill="#F5C451" />
            <ellipse cx="50" cy="44" rx="24" ry="23" />
          </g>
        );
      case 'hair_bob':
        return (
          <path d="M24 44 C24 22 76 22 76 44 L78 72 Q70 76 64 72 L36 72 Q30 76 22 72 Z" fill={hairColor} />
        );
      case 'hair_waves':
        return (
          <path d="M22 44 C22 20 78 20 78 44 C82 58 79 72 82 86 L18 86 C21 72 18 58 22 44 Z" fill={hairColor} />
        );
      case 'hair_ponytail':
        return (
          <g>
            {/* Queue de cheval fluide sur le côté droit */}
            <path d="M64 24 C84 20 92 42 84 68 C80 74 74 72 74 63 C77 48 73 35 63 32 Z" fill={hairColor} />
            <ellipse cx="66" cy="27" rx="4.5" ry="3" fill="#F5C451" transform="rotate(28 66 27)" />
            <ellipse cx="50" cy="44" rx="24" ry="23" fill={hairColor} />
          </g>
        );
      case 'hair_curly':
        return (
          <g fill={hairColor}>
            <circle cx="32" cy="30" r="10" />
            <circle cx="44" cy="24" r="11" />
            <circle cx="56" cy="24" r="11" />
            <circle cx="68" cy="30" r="10" />
            <circle cx="27" cy="40" r="8" />
            <circle cx="73" cy="40" r="8" />
          </g>
        );
      default:
        return null;
    }
  };

  // Calque des tenues (gratuites + premium)
  const renderOutfit = () => {
    const shoulderL = isFemale ? 22 : 17;
    const shoulderR = isFemale ? 78 : 83;
    const bodyPath = `M${shoulderL} 102 C${shoulderL} 82 32 76 50 76 C68 76 ${shoulderR} 82 ${shoulderR} 102 Z`;

    switch (c.outfit) {
      case 'outfit_tee_dark':
        return (
          <g>
            <path d={bodyPath} fill="#1E293B" />
            <path d="M40 76 Q50 85 60 76" fill="none" stroke="#475569" strokeWidth="2.4" />
          </g>
        );
      case 'outfit_school_polo':
        return (
          <g>
            <path d={bodyPath} fill="#F1F5F9" />
            <path d="M39 76 L46 86 L50 81 L54 86 L61 76 Z" fill="#0284C7" />
            <path d="M50 81 L50 93" stroke="#94A3B8" strokeWidth="1.6" />
          </g>
        );
      case 'outfit_school_uniform':
        return (
          <g>
            <path d={bodyPath} fill="#E2C799" />
            <path d="M40 76 L50 87 L60 76 Z" fill="#FFFFFF" />
            <path d="M48 83 L52 83 L53 98 L50 101 L47 98 Z" fill="#1E3A8A" />
          </g>
        );
      case 'outfit_varsity':
        return (
          <g>
            <path d={bodyPath} fill="#0F172A" />
            {/* Manches claires style campus */}
            <path d="M17 102 C17 85 24 79 33 78 L30 102 Z" fill="#E2E8F0" />
            <path d="M83 102 C83 85 76 79 67 78 L70 102 Z" fill="#E2E8F0" />
            <path d="M40 76 Q50 85 60 76" fill="none" stroke="#38BDF8" strokeWidth="2.8" />
            <line x1="50" y1="81" x2="50" y2="102" stroke="#334155" strokeWidth="1.5" />
            <circle cx="60" cy="90" r="4.2" fill="#38BDF8" />
            <text x="60" y="92.3" textAnchor="middle" fontSize="6" fontWeight="900" fill="#0F172A">K</text>
          </g>
        );
      case 'outfit_school_girl':
        return (
          <g>
            <path d={bodyPath} fill="#1E3A8A" />
            <path d="M39 76 L50 89 L61 76 Z" fill="#FFFFFF" />
            {/* Ruban nœud papillon scolaire */}
            <path d="M44 82 L50 86 L44 90 Z" fill="#E11D48" />
            <path d="M56 82 L50 86 L56 90 Z" fill="#E11D48" />
            <circle cx="50" cy="86" r="2.2" fill="#FB7185" />
          </g>
        );
      case 'outfit_dress_chic':
        return (
          <g>
            <path d={bodyPath} fill="#9D174D" />
            <path d="M37 76 Q50 88 63 76" fill={c.skinColor} />
            <path d="M37 76 Q50 88 63 76" fill="none" stroke="#F472B6" strokeWidth="2.2" />
            <path d="M29 94 Q50 98 71 94" fill="none" stroke="#F5C451" strokeWidth="1.8" opacity="0.85" />
          </g>
        );
      case 'outfit_hoodie_basic':
        return (
          <g>
            <path d={bodyPath} fill="#334155" />
            <path d="M36 78 Q50 89 64 78" fill="none" stroke="#64748B" strokeWidth="3.5" strokeLinecap="round" />
            <line x1="45" y1="84" x2="45" y2="95" stroke="#CBD5E1" strokeWidth="1.6" strokeLinecap="round" />
            <line x1="55" y1="84" x2="55" y2="95" stroke="#CBD5E1" strokeWidth="1.6" strokeLinecap="round" />
          </g>
        );
      case 'outfit_boss_suit':
        return (
          <g>
            <path d={bodyPath} fill="#0F172A" />
            <path d="M41 76 L50 95 L59 76 Z" fill="#F8FAFC" />
            {/* Cravate dorée de boss */}
            <path d="M48 80 L52 80 L53 96 L50 100 L47 96 Z" fill="#F5C451" />
            {/* Revers du costume */}
            <path d="M37 77 L46 95 L40 96 L33 82 Z" fill="#1E293B" />
            <path d="M63 77 L54 95 L60 96 L67 82 Z" fill="#1E293B" />
            <rect x="61" y="88" width="6" height="2" rx="1" fill="#F5C451" />
          </g>
        );
      case 'outfit_boss_lady':
        return (
          <g>
            <path d={bodyPath} fill="#1E1B4B" />
            {/* Blouse soie ivoire + revers blazer féminin */}
            <path d="M40 76 L50 94 L60 76 Z" fill="#FFFBEB" />
            <path d="M35 77 L47 95 L41 96 L31 83 Z" fill="#312E81" />
            <path d="M65 77 L53 95 L59 96 L69 83 Z" fill="#312E81" />
            {/* Broche dorée sur le revers */}
            <circle cx="61" cy="87" r="2.6" fill="#F5C451" />
            <circle cx="61" cy="87" r="1.1" fill="#FFFFFF" />
          </g>
        );
      case 'outfit_kente_royal':
        return (
          <g>
            <path d={bodyPath} fill="#14532D" />
            {/* Étole Kita / Kente moderne géométrique or, rouge et émeraude */}
            <path d="M34 77 L46 102 L34 102 L26 83 Z" fill="#F59E0B" />
            <path d="M66 77 L54 102 L66 102 L74 83 Z" fill="#F59E0B" />
            <path d="M32 84 L41 84 M35 90 L44 90 M37 96 L45 96" stroke="#DC2626" strokeWidth="2.4" />
            <path d="M68 84 L59 84 M65 90 L56 90 M63 96 L55 96" stroke="#DC2626" strokeWidth="2.4" />
            {isFemale ? (
              <>
                <path d="M39 76 Q50 88 61 76" fill={c.skinColor} />
                <path d="M39 76 Q50 88 61 76" fill="none" stroke="#FDE047" strokeWidth="2.8" />
                <circle cx="50" cy="84" r="2.2" fill="#F5C451" />
              </>
            ) : (
              <path d="M40 76 Q50 86 60 76" fill="none" stroke="#FDE047" strokeWidth="2.8" />
            )}
          </g>
        );
      case 'outfit_cyber_gamer':
        return (
          <g>
            <path d={bodyPath} fill="#0B1120" />
            <path d="M36 78 Q50 88 64 78" fill="none" stroke="#38BDF8" strokeWidth="3" strokeLinecap="round" />
            <path d="M27 88 L38 92 M73 88 L62 92" stroke="#22D3EE" strokeWidth="2.4" strokeLinecap="round" />
            <path d="M47 89 L53 89 L50 96 Z" fill="#38BDF8" />
          </g>
        );
      case 'outfit_elite_gold':
        return (
          <g>
            <path d={bodyPath} fill="#172554" />
            {/* Épaulettes et col dorés d'élite */}
            <path d="M22 86 Q30 79 39 78" fill="none" stroke="#F5C451" strokeWidth="3.8" strokeLinecap="round" />
            <path d="M78 86 Q70 79 61 78" fill="none" stroke="#F5C451" strokeWidth="3.8" strokeLinecap="round" />
            <path d="M41 76 L50 89 L59 76" fill="none" stroke="#FDE047" strokeWidth="2.6" />
            <circle cx="50" cy="93" r="3.2" fill="#F5C451" />
          </g>
        );
      case 'outfit_tee_blue':
      default:
        return (
          <g>
            <path d={bodyPath} fill="#0284C7" />
            <path d="M40 76 Q50 85 60 76" fill="none" stroke="#BAE6FD" strokeWidth="2.4" />
          </g>
        );
    }
  };

  // Calque des sourcils selon le style d'yeux
  const renderBrows = () => {
    const browColor = shadeHex(hairColor, 0.9);
    switch (c.eyes) {
      case 'eyes_determined':
        return (
          <g stroke={browColor} strokeWidth="2.6" strokeLinecap="round" fill="none">
            <path d="M33 41 L44 43.5" />
            <path d="M67 41 L56 43.5" />
          </g>
        );
      case 'eyes_fierce':
        return (
          <g stroke={browColor} strokeWidth="2.9" strokeLinecap="round" fill="none">
            <path d="M32 39.5 L44.5 44" />
            <path d="M68 39.5 L55.5 44" />
          </g>
        );
      case 'eyes_happy':
        return (
          <g stroke={browColor} strokeWidth="2.2" strokeLinecap="round" fill="none">
            <path d="M33 42 Q39 38.5 44 41.5" />
            <path d="M56 41.5 Q61 38.5 67 42" />
          </g>
        );
      case 'eyes_focused':
        return (
          <g stroke={browColor} strokeWidth="2.4" strokeLinecap="round" fill="none">
            <path d="M33 42 L44 42" />
            <path d="M56 42 L67 42" />
          </g>
        );
      case 'eyes_classic':
      default:
        return (
          <g stroke={browColor} strokeWidth="2.3" strokeLinecap="round" fill="none">
            <path d="M33.5 42 Q39 40 44 41.8" />
            <path d="M56 41.8 Q61 40 66.5 42" />
          </g>
        );
    }
  };

  // Yeux animés (pupilles qui bougent + clignement naturel des paupières)
  const renderAnimatedEyes = () => {
    const eyeRy = c.eyes === 'eyes_focused' ? 4.3 : c.eyes === 'eyes_fierce' ? 4.6 : 5.3;
    const eyeRx = 4.9;
    return (
      <g>
        {renderBrows()}
        <g
          className="konan-av-eyelids"
          style={{ animationDuration: blinkDuration, animationDelay: blinkDelay }}
        >
          {/* Œil gauche */}
          <ellipse cx="39" cy="50" rx={eyeRx} ry={eyeRy} fill="#FFFFFF" />
          {/* Œil droit */}
          <ellipse cx="61" cy="50" rx={eyeRx} ry={eyeRy} fill="#FFFFFF" />

          {/* Pupilles animées (regard gauche / centre / droite) */}
          <g
            className="konan-av-pupils"
            style={{ animationDuration: lookDuration, animationDelay: lookDelay }}
          >
            <circle cx="39" cy="50" r="2.7" fill="#111827" />
            <circle cx="38.1" cy="49" r="0.95" fill="#FFFFFF" />
            <circle cx="61" cy="50" r="2.7" fill="#111827" />
            <circle cx="60.1" cy="49" r="0.95" fill="#FFFFFF" />
          </g>

          {/* Cils discrets pour le modèle Femme */}
          {isFemale && (
            <g stroke="#0F172A" strokeWidth="1.5" strokeLinecap="round" fill="none">
              <path d="M33.8 47.6 L32 46" />
              <path d="M66.2 47.6 L68 46" />
            </g>
          )}
        </g>
      </g>
    );
  };

  // Expressions de la bouche
  const renderMouth = () => {
    switch (c.mouth) {
      case 'mouth_confident':
        return (
          <path d="M44 63 Q51 65.5 58 60.5" fill="none" stroke="#1F1210" strokeWidth="2.3" strokeLinecap="round" />
        );
      case 'mouth_focused':
        return (
          <path d="M45 62.8 L55 62.8" fill="none" stroke="#1F1210" strokeWidth="2.2" strokeLinecap="round" />
        );
      case 'mouth_playful':
        return (
          <g>
            <path d="M43 61.5 Q50 67.5 57.5 61.5 Z" fill="#FFFFFF" stroke="#1F1210" strokeWidth="1.7" strokeLinejoin="round" />
          </g>
        );
      case 'mouth_determined':
        return (
          <path d="M44.5 63.5 Q50 61.5 55.5 63.5" fill="none" stroke="#1F1210" strokeWidth="2.3" strokeLinecap="round" />
        );
      case 'mouth_smile':
      default:
        return (
          <path d="M43.5 61.5 Q50 67 56.5 61.5" fill="none" stroke="#1F1210" strokeWidth="2.4" strokeLinecap="round" />
        );
    }
  };

  // Calque avant des cheveux
  const renderFrontHair = () => {
    switch (c.hair) {
      case 'hair_short_fade':
        return (
          <path d="M27 44 C27 24 73 24 73 44 C70 34 62 32 50 32 C38 32 30 34 27 44 Z" fill={hairColor} />
        );
      case 'hair_buzz':
        return (
          <path d="M28 43 C28 26 72 26 72 43 C68 35 60 33.5 50 33.5 C40 33.5 32 35 28 43 Z" fill={hairColor} opacity="0.92" />
        );
      case 'hair_quiff':
        return (
          <g fill={hairColor}>
            <path d="M26 44 C25 22 44 14 66 22 C74 25 75 36 73 44 C68 33 60 31 48 32 C38 33 30 36 26 44 Z" />
            <path d="M36 23 Q50 18 65 24" fill="none" stroke={hairHighlight} strokeWidth="2" strokeLinecap="round" opacity="0.55" />
          </g>
        );
      case 'hair_high_top':
        return (
          <g fill={hairColor}>
            <rect x="29" y="16" width="42" height="20" rx="5" />
            <path d="M27 43 C27 31 32 28 36 28 L64 28 C68 28 73 31 73 43 C69 35 61 33 50 33 C39 33 31 35 27 43 Z" />
          </g>
        );
      case 'hair_cyber_fade':
        return (
          <g>
            <path d="M26 44 C26 22 74 22 74 44 C70 33 61 31 50 31 C39 31 30 33 26 44 Z" fill={hairColor} />
            {/* Éclair bleu KONAN sur la tempe */}
            <path d="M62 29 L67 34 L64 35 L69 40" fill="none" stroke="#38BDF8" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M38 25 Q50 22 62 25" fill="none" stroke={hairHighlight} strokeWidth="2" strokeLinecap="round" opacity="0.6" />
          </g>
        );
      case 'hair_gold_taper':
        return (
          <g>
            <path d="M26 44 C26 20 74 20 74 44 C69 32 60 30.5 50 30.5 C40 30.5 31 32 26 44 Z" fill={hairColor} />
            {/* Double ligne rasée dorée sur le côté */}
            <path d="M62 29 L71 33" fill="none" stroke="#F5C451" strokeWidth="2" strokeLinecap="round" />
            <path d="M64 33 L72 36.5" fill="none" stroke="#F5C451" strokeWidth="1.6" strokeLinecap="round" />
          </g>
        );
      case 'hair_ponytail':
        return (
          <g fill={hairColor}>
            <path d="M27 44 C27 24 73 24 73 44 C66 34 58 32 50 32 C42 32 34 34 27 44 Z" />
            {/* Petites mèches fines sur les tempes */}
            <path d="M28 42 Q26 48 29 52" fill="none" stroke={hairColor} strokeWidth="2" strokeLinecap="round" />
            <path d="M72 42 Q74 48 71 52" fill="none" stroke={hairColor} strokeWidth="2" strokeLinecap="round" />
          </g>
        );
      case 'hair_afro':
        return (
          <path d="M26 42 Q34 31 50 31 Q66 31 74 42 Q68 27 50 27 Q32 27 26 42 Z" fill={hairColor} />
        );
      case 'hair_braids':
      case 'hair_crown_braids':
        return (
          <g>
            <path d="M27 43 C27 24 73 24 73 43 C66 34 58 32 50 33 C42 32 34 34 27 43 Z" fill={hairColor} />
            {c.hair === 'hair_crown_braids' && (
              <path d="M31 33 Q50 25 69 33" fill="none" stroke="#F5C451" strokeWidth="2.6" strokeDasharray="3 3" strokeLinecap="round" />
            )}
          </g>
        );
      case 'hair_locs':
      case 'hair_flame_locs':
        return (
          <g fill={hairColor}>
            <path d="M27 43 C27 24 73 24 73 43 C67 34 58 33 50 33 C42 33 33 34 27 43 Z" />
            <rect x="33" y="29" width="5" height="12" rx="2.5" />
            <rect x="42" y="27" width="5" height="11" rx="2.5" />
            <rect x="53" y="27" width="5" height="11" rx="2.5" />
            <rect x="62" y="29" width="5" height="12" rx="2.5" />
            {c.hair === 'hair_flame_locs' && (
              <>
                <rect x="33" y="37" width="5" height="4" rx="2" fill="#F59E0B" />
                <rect x="62" y="37" width="5" height="4" rx="2" fill="#F59E0B" />
              </>
            )}
          </g>
        );
      case 'hair_bun':
      case 'hair_star_puffs':
        return (
          <path d="M27 44 C27 25 73 25 73 44 C66 34 58 32 50 32 C42 32 34 34 27 44 Z" fill={hairColor} />
        );
      case 'hair_bob':
        return (
          <path d="M26 44 C26 23 74 23 74 44 C67 34 56 32 45 34 C36 35 30 39 26 44 Z" fill={hairColor} />
        );
      case 'hair_curly':
        return (
          <g fill={hairColor}>
            <circle cx="35" cy="33" r="6" />
            <circle cx="45" cy="30" r="6.5" />
            <circle cx="55" cy="30" r="6.5" />
            <circle cx="65" cy="33" r="6" />
          </g>
        );
      case 'hair_waves':
        return (
          <path d="M26 44 C26 23 74 23 74 44 C67 33 56 32 48 34 C39 36 31 38 26 44 Z" fill={hairColor} />
        );
      default:
        return null;
    }
  };

  // Accessoires (lunettes & couvre-chefs)
  const renderAccessory = () => {
    switch (c.accessory) {
      case 'acc_glasses_smart':
        return (
          <g fill="none" stroke="#E2E8F0" strokeWidth="2.1">
            <rect x="31.5" y="44" width="15" height="11.5" rx="4" fill="#38BDF8" fillOpacity="0.12" />
            <rect x="53.5" y="44" width="15" height="11.5" rx="4" fill="#38BDF8" fillOpacity="0.12" />
            <line x1="46.5" y1="49.5" x2="53.5" y2="49.5" />
            <line x1="27.5" y1="48" x2="31.5" y2="48.5" />
            <line x1="68.5" y1="48.5" x2="72.5" y2="48" />
          </g>
        );
      case 'acc_shades_cool':
        return (
          <g>
            <rect x="31" y="44.2" width="16" height="11.2" rx="4" fill="#090D16" fillOpacity="0.88" stroke="#F5C451" strokeWidth="1.6" />
            <rect x="53" y="44.2" width="16" height="11.2" rx="4" fill="#090D16" fillOpacity="0.88" stroke="#F5C451" strokeWidth="1.6" />
            <line x1="47" y1="48.5" x2="53" y2="48.5" stroke="#F5C451" strokeWidth="2" />
            <path d="M34 46.5 L38 52.5 M56 46.5 L60 52.5" stroke="#FFFFFF" strokeWidth="1.3" strokeOpacity="0.45" strokeLinecap="round" />
          </g>
        );
      case 'acc_cap_konan':
        return (
          <g>
            <path d="M25 36 C25 18 75 18 75 36 Z" fill="#0284C7" />
            <path d="M22 36 Q50 31 82 37 Q72 41 50 38 Q30 38 22 36 Z" fill="#0F172A" />
            <circle cx="50" cy="27" r="4.5" fill="#F8FAFC" />
            <path d="M48.5 24.8 H49.8 V26.8 L51.4 24.8 H52.8 L51 27 L52.9 29.4 H51.5 L50.1 27.5 L49.8 27.9 V29.4 H48.5 Z" fill="#0284C7" />
          </g>
        );
      case 'acc_beanie':
        return (
          <g>
            <path d="M26 37 C26 17 74 17 74 37 Z" fill="#D97706" />
            <rect x="24.5" y="31" width="51" height="8" rx="4" fill="#B45309" />
            <circle cx="50" cy="17" r="4.5" fill="#F59E0B" />
          </g>
        );
      case 'acc_headband_gold':
        return (
          <g>
            <path d="M27 36 Q50 31 73 36 L73 41 Q50 36 27 41 Z" fill="#F5C451" />
            <rect x="46" y="33.5" width="8" height="4.5" rx="1.5" fill="#0F172A" />
            <circle cx="50" cy="35.7" r="1.4" fill="#38BDF8" />
          </g>
        );
      case 'acc_crown_boss':
        return (
          <g>
            <path d="M32 30 L34 15 L43 23 L50 12 L57 23 L66 15 L68 30 Z" fill="#F5C451" stroke="#B45309" strokeWidth="1.5" strokeLinejoin="round" />
            <circle cx="50" cy="23.5" r="2.6" fill="#38BDF8" />
            <circle cx="39" cy="25" r="1.7" fill="#EF4444" />
            <circle cx="61" cy="25" r="1.7" fill="#10B981" />
          </g>
        );
      case 'acc_beard_clean':
        return (
          <g fill={hairColor} opacity="0.92">
            {/* Barbe soignée + moustache suivant la mâchoire masculine */}
            <path d="M29.5 55 C30 67 39 73.5 50 73.5 C61 73.5 70 67 70.5 55 C68.5 62 61 68.5 50 68.5 C39 68.5 31.5 62 29.5 55 Z" />
            <path d="M41.5 60.2 Q46 57.8 50 59.6 Q54 57.8 58.5 60.2 Q54 61.8 50 60.8 Q46 61.8 41.5 60.2 Z" />
          </g>
        );
      case 'acc_chain_gold':
        return (
          <g fill="none">
            <path d="M37 76 Q50 92 63 76" stroke="#F5C451" strokeWidth="3.2" strokeLinecap="round" strokeDasharray="3.2 1.8" />
            <circle cx="50" cy="86" r="3.2" fill="#F5C451" stroke="#B45309" strokeWidth="1" />
          </g>
        );
      case 'acc_earrings_pearl':
        return (
          <g>
            <circle cx="25.8" cy="56.2" r="2.6" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="0.9" />
            <circle cx="74.2" cy="56.2" r="2.6" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="0.9" />
          </g>
        );
      case 'acc_earrings_gold':
        return (
          <g fill="none" stroke="#F5C451" strokeWidth="2">
            <circle cx="25.2" cy="58.5" r="4.2" />
            <circle cx="74.8" cy="58.5" r="4.2" />
          </g>
        );
      case 'acc_headband_ribbon':
        return (
          <g>
            <path d="M27 37 Q50 24 73 37" fill="none" stroke="#EC4899" strokeWidth="4" strokeLinecap="round" />
            {/* Petit nœud sur le côté */}
            <path d="M63 29 L70 25 L69 32 Z" fill="#F472B6" />
            <path d="M63 29 L57 25 L58 32 Z" fill="#F472B6" />
            <circle cx="63" cy="29" r="2.2" fill="#FDE047" />
          </g>
        );
      case 'acc_glasses_cat':
        return (
          <g fill="none" stroke="#F5C451" strokeWidth="2">
            <path d="M29.5 45.5 L45.5 46 C46.5 53 42 56 36.5 55.5 C31.5 55 29.5 51 29.5 45.5 Z" fill="#EC4899" fillOpacity="0.14" />
            <path d="M70.5 45.5 L54.5 46 C53.5 53 58 56 63.5 55.5 C68.5 55 70.5 51 70.5 45.5 Z" fill="#EC4899" fillOpacity="0.14" />
            <line x1="45.5" y1="48" x2="54.5" y2="48" />
          </g>
        );
      case 'acc_necklace_gold':
        return (
          <g>
            <path d="M39 74 Q50 84 61 74" fill="none" stroke="#F5C451" strokeWidth="2.2" strokeLinecap="round" />
            <path d="M47.5 80.5 L50 85.5 L52.5 80.5 Z" fill="#FDE047" stroke="#B45309" strokeWidth="0.7" />
            <circle cx="44" cy="78" r="1.2" fill="#FDE047" />
            <circle cx="56" cy="78" r="1.2" fill="#FDE047" />
          </g>
        );
      case 'acc_tiara_queen':
        return (
          <g>
            <path d="M33 32 Q50 24 67 32 L63 22 L56 26 L50 15 L44 26 L37 22 Z" fill="#FDE047" stroke="#D97706" strokeWidth="1.2" strokeLinejoin="round" />
            <circle cx="50" cy="23.5" r="2.4" fill="#EC4899" />
            <circle cx="41" cy="26.5" r="1.5" fill="#38BDF8" />
            <circle cx="59" cy="26.5" r="1.5" fill="#38BDF8" />
            <circle cx="50" cy="14.8" r="1.5" fill="#FFFFFF" />
          </g>
        );
      case 'acc_none':
      default:
        return null;
    }
  };

  return (
    <span
      className={`relative inline-flex items-center justify-center rounded-full shrink-0 select-none ${className}`}
      style={{ width: size, height: size }}
      role="img"
      aria-label={alt}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        className="rounded-full overflow-hidden block"
      >
        <defs>
          <clipPath id={clipId}>
            <circle cx="50" cy="50" r="50" />
          </clipPath>
          <radialGradient id={`${clipId}-bg`} cx="50%" cy="35%" r="65%">
            <stop offset="0%" stopColor={shadeHex(bg, 1.35)} />
            <stop offset="100%" stopColor={bg} />
          </radialGradient>
        </defs>

        <g clipPath={`url(#${clipId})`}>
          {/* Fond circulaire */}
          <rect width="100" height="100" fill={`url(#${clipId}-bg)`} />

          {/* Cheveux arrière */}
          {renderBackHair()}

          {/* Tenue / épaules */}
          {renderOutfit()}

          {/* Cou + ombre sous le menton */}
          <rect x="43" y="65" width="14" height="15" rx="6" fill={c.skinColor} />
          <ellipse cx="50" cy="72" rx="7" ry="4" fill={skinShadow} opacity="0.55" />

          {/* Oreilles */}
          <circle cx="27" cy="52" r="5" fill={c.skinColor} />
          <circle cx="27" cy="52" r="2.5" fill={skinShadow} opacity="0.5" />
          <circle cx="73" cy="52" r="5" fill={c.skinColor} />
          <circle cx="73" cy="52" r="2.5" fill={skinShadow} opacity="0.5" />

          {/* Visage */}
          {isFemale ? (
            <path d="M28 48 C28 31 36 27 50 27 C64 27 72 31 72 48 C72 64 62 72 50 72 C38 72 28 64 28 48 Z" fill={c.skinColor} />
          ) : (
            <rect x="27.5" y="27" width="45" height="45" rx="20" fill={c.skinColor} />
          )}

          {/* Légère touche de joues */}
          <ellipse cx="34.5" cy="57.5" rx="4" ry="2.2" fill="#F43F5E" opacity="0.16" />
          <ellipse cx="65.5" cy="57.5" rx="4" ry="2.2" fill="#F43F5E" opacity="0.16" />

          {/* Nez discret */}
          <path d="M49 52.5 Q51.2 55.5 48.8 57" fill="none" stroke={skinShadow} strokeWidth="2" strokeLinecap="round" />

          {/* Yeux & sourcils animés */}
          {renderAnimatedEyes()}

          {/* Bouche / expression */}
          {renderMouth()}

          {/* Cheveux avant */}
          {renderFrontHair()}

          {/* Accessoires (lunettes, casquette, couronne...) */}
          {renderAccessory()}
        </g>
      </svg>

      {showCustomizeBadge && (
        <span
          title="Personnalise ton personnage !"
          className="absolute -bottom-0.5 -right-0.5 flex h-3.5 w-3.5"
        >
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-sky-500 border-2 border-white dark:border-[#0A0F1C]" />
        </span>
      )}
    </span>
  );
});

AnimatedAvatar.displayName = 'AnimatedAvatar';
