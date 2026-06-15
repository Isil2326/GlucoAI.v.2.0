/**
 * Design system MediAI Care Mobile — tokens centralisés.
 *
 * Palette bleu médical (#2196F3) — alignée sur le design legacy Phase 8.
 * Mode clair patient + dark clinicien (Salle de Contrôle).
 * Contrastes conformes WCAG AA pour le texte principal.
 * Les couleurs de risque sont TOUJOURS doublées d'un libellé texte.
 */

export const palette = {
  // Marque — bleu médical (aligné Phase 8 legacy).
  brand: '#2196F3',
  brandDark: '#1565C0',
  brandDeep: '#0D47A1',
  brandLight: '#42A5F5',
  brandSurface: '#E3F2FD',
  brandSurfaceStrong: '#BBDEFB',

  // Neutres (slate).
  bg: '#F8FAFD',
  surface: '#FFFFFF',
  surfaceAlt: '#F1F5F9',
  surfaceMuted: '#F8FAFC',
  border: '#E2E8F0',
  borderStrong: '#CBD5E1',

  text: '#0F172A',
  textSecondary: '#475569',
  textMuted: '#64748B',
  textInverse: '#FFFFFF',

  // Risque / statut (contrastes AA sur fond clair).
  risk: {
    faible: '#047857',
    modéré: '#B45309',
    élevé: '#B91C1C',
    inconnu: '#475569',
  },

  // Sémantique.
  danger: '#E8441F',
  dangerSurface: '#FFF3EF',
  warning: '#B45309',
  warningSurface: '#FFFBEB',
  info: '#1565C0',
  infoSurface: '#E3F2FD',
  success: '#047857',
  successSurface: '#ECFDF5',

  // Bannière « données synthétiques » (violet sobre, distinct du risque).
  synthetic: '#6D28D9',
  syntheticSurface: '#F5F3FF',

  // Dark theme clinicien (Salle de Contrôle — aligné v3DarkTheme Phase 8).
  clinician: {
    bg: '#07090F',
    surface: '#0E1118',
    surface2: '#141823',
    border: 'rgba(255,255,255,0.07)',
    border2: 'rgba(255,255,255,0.12)',
    amber: '#FFAB00',
    amberDim: 'rgba(255,171,0,0.12)',
    cyan: '#00E5FF',
    violet: '#BF5AF2',
    green: '#30D158',
    red: '#EF4444',
    orange: '#F59E0B',
    muted: 'rgba(255,255,255,0.40)',
    muted2: 'rgba(255,255,255,0.55)',
    bright: '#FFFFFF',
  },
} as const;

export const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  xxl: 32,
} as const;

export const radius = {
  sm: 8,
  md: 12,
  lg: 16,
  pill: 999,
} as const;

export const typography = {
  h1: { fontSize: 26, fontWeight: '700' as const, lineHeight: 32 },
  h2: { fontSize: 20, fontWeight: '700' as const, lineHeight: 26 },
  h3: { fontSize: 17, fontWeight: '600' as const, lineHeight: 24 },
  body: { fontSize: 16, fontWeight: '400' as const, lineHeight: 24 },
  bodyStrong: { fontSize: 16, fontWeight: '600' as const, lineHeight: 24 },
  small: { fontSize: 14, fontWeight: '400' as const, lineHeight: 20 },
  caption: { fontSize: 12, fontWeight: '500' as const, lineHeight: 16 },
} as const;

/** Zone tactile minimale recommandée (accessibilité). */
export const MIN_TOUCH_TARGET = 44;

export const shadow = {
  card: {
    shadowColor: '#0F172A',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 2,
  },
  elevated: {
    shadowColor: '#0F172A',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.1,
    shadowRadius: 20,
    elevation: 6,
  },
  subtle: {
    shadowColor: '#0F172A',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.04,
    shadowRadius: 4,
    elevation: 1,
  },
} as const;

export const motion = {
  fast: 120,
  base: 200,
  slow: 320,
} as const;

export type RiskKey = keyof typeof palette.risk;

/** Associe un libellé de risque backend à une clé de couleur + texte affichable. */
export function riskKeyFromLabel(label: string | null | undefined): RiskKey {
  const l = (label ?? '').toLowerCase();
  if (l.includes('élev') || l.includes('eleve') || l.includes('high'))
    return 'élevé';
  if (l.includes('modér') || l.includes('moder') || l.includes('mod'))
    return 'modéré';
  if (l.includes('faible') || l.includes('low')) return 'faible';
  return 'inconnu';
}
