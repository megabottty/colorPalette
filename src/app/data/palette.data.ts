// Theme types and definitions are copied verbatim from Dexii's
// src/app/core/services/theme.service.ts. Update them here when they change there.

export type ThemeMode =
  | 'pearl'
  | 'onyx'
  | 'girlie'
  | 'manly'
  | 'hippie'
  | 'gothic'
  | 'light'
  | 'dark'
  | 'highschool'
  | 'neutral'
  | 'custom';

export interface CustomThemeColors {
  bg: string;
  primary: string;
  accent: string;
}

export interface ThemePalette {
  bg: string;
  bgSecondary: string;
  text: string;
  textSecondary: string;
  primary: string;
  primaryHover: string;
  border: string;
  cardBg: string;
  accent: string;
}

export interface ThemeDefinition {
  id: ThemeMode;
  name: string;
  description: string;
  /** 'light' themes get the pearl-style shimmer/UI touches; 'dark' themes get the onyx-style ones. */
  kind: 'light' | 'dark';
  colors: ThemePalette;
}

export const THEMES: ThemeDefinition[] = [
  {
    id: 'pearl',
    name: 'Pearl',
    description: 'Classic Glamour Light with Soft Mauve Silk & Polished Gold',
    kind: 'light',
    colors: {
      bg: '#fffafa',
      bgSecondary: '#f5f3f4',
      text: '#4a374a',
      textSecondary: '#866386',
      primary: '#8d5e94',
      primaryHover: '#815688',
      border: '#e2d1e2',
      cardBg: '#ffffff',
      accent: '#d4af37'
    }
  },
  {
    id: 'onyx',
    name: 'Onyx',
    description: 'Midnight Slate Dark with Electric Indigo accents',
    kind: 'dark',
    colors: {
      bg: '#020617',
      bgSecondary: '#0f172a',
      text: '#f8fafc',
      textSecondary: '#94a3b8',
      primary: '#4f46e5',
      primaryHover: '#4338ca',
      border: '#1e293b',
      cardBg: '#0f172a',
      accent: '#6366f1'
    }
  },
  {
    id: 'girlie',
    name: 'Girlie',
    description: 'Blush pink, sparkly and sweet',
    kind: 'light',
    colors: {
      bg: '#fff5f8',
      bgSecondary: '#ffe8f0',
      text: '#5a2a45',
      textSecondary: '#a2507a',
      primary: '#cf1571',
      primaryHover: '#bc1367',
      border: '#fbcfe8',
      cardBg: '#ffffff',
      accent: '#f9a8d4'
    }
  },
  {
    id: 'manly',
    name: 'Rugged',
    description: 'Steel, denim & leather - bold and grounded',
    kind: 'dark',
    colors: {
      bg: '#1c1f24',
      bgSecondary: '#262b32',
      text: '#eef1f5',
      textSecondary: '#9aa5b1',
      primary: '#3b6ea5',
      primaryHover: '#2f5a89',
      border: '#3a4048',
      cardBg: '#22262c',
      accent: '#c0752f'
    }
  },
  {
    id: 'hippie',
    name: 'Hippie Gardener',
    description: 'Earthy greens & warm terracotta, grown from the garden',
    kind: 'light',
    colors: {
      bg: '#f6f3e7',
      bgSecondary: '#eae4cf',
      text: '#3f4a2f',
      textSecondary: '#5f6a47',
      primary: '#526d3c',
      primaryHover: '#4b6337',
      border: '#d8cfa8',
      cardBg: '#fffdf6',
      accent: '#c97b3d'
    }
  },
  {
    id: 'gothic',
    name: 'Gothic',
    description: 'Black lace, deep wine & moonlit drama',
    kind: 'dark',
    colors: {
      bg: '#0b0509',
      bgSecondary: '#160a12',
      text: '#f1e6ea',
      textSecondary: '#a98d97',
      primary: '#8f1d3a',
      primaryHover: '#711530',
      border: '#2b1720',
      cardBg: '#160a12',
      accent: '#7c3aed'
    }
  },
  {
    id: 'light',
    name: 'Clean Light',
    description: 'Simple, crisp and minimal - no frills',
    kind: 'light',
    colors: {
      bg: '#ffffff',
      bgSecondary: '#f4f4f5',
      text: '#18181b',
      textSecondary: '#6f6f77',
      primary: '#2563eb',
      primaryHover: '#1d4ed8',
      border: '#e4e4e7',
      cardBg: '#ffffff',
      accent: '#0ea5e9'
    }
  },
  {
    id: 'dark',
    name: 'Clean Dark',
    description: 'Simple, crisp and minimal - true black & white',
    kind: 'dark',
    colors: {
      bg: '#0a0a0a',
      bgSecondary: '#171717',
      text: '#fafafa',
      textSecondary: '#a1a1aa',
      primary: '#2563eb',
      primaryHover: '#1d4ed8',
      border: '#27272a',
      cardBg: '#171717',
      accent: '#0ea5e9'
    }
  },
  {
    id: 'highschool',
    name: 'Locker Room',
    description: 'Y2K bubblegum pink & purple - loud and fun',
    kind: 'light',
    colors: {
      bg: '#fdf4ff',
      bgSecondary: '#fae8ff',
      text: '#581c87',
      textSecondary: '#942ef5',
      primary: '#b612cf',
      primaryHover: '#a510bc',
      border: '#f0abfc',
      cardBg: '#ffffff',
      accent: '#22d3ee'
    }
  },
  {
    id: 'neutral',
    name: 'Sandstone',
    description: 'Warm neutral tones that work for anyone',
    kind: 'light',
    colors: {
      bg: '#faf7f2',
      bgSecondary: '#f0ebe1',
      text: '#3a352e',
      textSecondary: '#71695d',
      primary: '#866346',
      primaryHover: '#7a5a40',
      border: '#e3dccb',
      cardBg: '#ffffff',
      accent: '#5f7470'
    }
  }
];


export const DEFAULT_THEME_ID: ThemeMode = 'pearl';

export const DEFAULT_CUSTOM_COLORS: CustomThemeColors = {
  bg: '#fdf6f0',
  primary: '#e0796b',
  accent: '#3d8f89'
};

/** Which pair of colours a role's contrast ratio is measured between. */
export type ContrastBasis = 'themeTextOnThis' | 'thisOnBackground' | 'whiteOnThis';

export interface ThemeRole {
  key: keyof ThemePalette;
  label: string;
  hint: string;
  contrast: ContrastBasis;
}

/** The nine roles every theme defines, in the order the page lists them. */
export const THEME_ROLES: ThemeRole[] = [
  { key: 'bg', label: 'Background', hint: 'Page background', contrast: 'themeTextOnThis' },
  { key: 'bgSecondary', label: 'Surface', hint: 'Cards, panels, inputs', contrast: 'themeTextOnThis' },
  { key: 'cardBg', label: 'Card', hint: 'Raised cards and modals', contrast: 'themeTextOnThis' },
  { key: 'text', label: 'Text', hint: 'Headings and body copy', contrast: 'thisOnBackground' },
  { key: 'textSecondary', label: 'Muted text', hint: 'Labels, hints, meta', contrast: 'thisOnBackground' },
  { key: 'primary', label: 'Primary', hint: 'Buttons, links, active states', contrast: 'whiteOnThis' },
  { key: 'primaryHover', label: 'Primary hover', hint: 'Pressed and hover state', contrast: 'whiteOnThis' },
  { key: 'accent', label: 'Accent', hint: 'Badges, highlights, the Tea cup', contrast: 'whiteOnThis' },
  { key: 'border', label: 'Border', hint: 'Dividers and outlines', contrast: 'themeTextOnThis' }
];

export interface ColorTile {
  name: string;
  note?: string;
  /** Any CSS background value: a hex or a gradient. */
  swatch: string;
  /** Copyable values. Two or more are shown joined by arrows, as gradient stops. */
  hexes: string[];
  /** Shown in place of hex values when the colour is not fixed. */
  caption?: string;
  /** Pale swatches get an outline so they stay visible on the page background. */
  outlined?: boolean;
}

export const BRAND_TILES: ColorTile[] = [
  {
    name: 'Logo & splash gradient',
    note: 'The D mark and the loading splash',
    swatch: 'linear-gradient(135deg,#a881af,#d4af37)',
    hexes: ['#a881af', '#d4af37']
  },
  {
    name: 'App / browser chrome',
    note: 'manifest theme_color, status bar tint',
    swatch: '#8d5e94',
    hexes: ['#8d5e94']
  },
  {
    name: 'App background',
    note: 'manifest background_color, first paint',
    swatch: '#fffafa',
    hexes: ['#fffafa'],
    outlined: true
  },
  {
    name: 'In-app logo',
    note: "Gradient from the active theme's primary to its accent",
    swatch: 'linear-gradient(135deg,#8d5e94,#d4af37)',
    hexes: [],
    caption: 'Changes with the theme'
  }
];

export const STATUS_TILES: ColorTile[] = [
  { name: 'Danger', note: 'Red flags, remove, destructive actions', swatch: '#ef4444', hexes: ['#ef4444'] },
  { name: 'Success', note: 'Accept, confirmations', swatch: '#16a34a', hexes: ['#16a34a'] },
  { name: 'Seen', note: 'Read receipts and seen marks', swatch: '#10b981', hexes: ['#10b981'] },
  { name: 'Warning / focus', note: 'Focus ring, caution', swatch: '#f59e0b', hexes: ['#f59e0b'] },
  { name: 'Gold', note: 'Vault, premium, Pearl accent', swatch: '#d4af37', hexes: ['#d4af37'] }
];

export const CUSTOM_DEFAULT_TILES: ColorTile[] = [
  { name: 'Background', swatch: DEFAULT_CUSTOM_COLORS.bg, hexes: [DEFAULT_CUSTOM_COLORS.bg], outlined: true },
  { name: 'Primary', swatch: DEFAULT_CUSTOM_COLORS.primary, hexes: [DEFAULT_CUSTOM_COLORS.primary], outlined: true },
  { name: 'Accent', swatch: DEFAULT_CUSTOM_COLORS.accent, hexes: [DEFAULT_CUSTOM_COLORS.accent], outlined: true }
];

export interface SpecRow {
  name: string;
  value: string;
  notes: string;
}

export const TYPOGRAPHY_ROWS: SpecRow[] = [
  {
    name: 'Brand & headings',
    value: "'Times New Roman', serif",
    notes: 'The Rolodex, Dexii wordmark, section titles. Uppercase with wide letter-spacing for eyebrows.'
  },
  {
    name: 'Interface',
    value: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    notes: 'Body copy, buttons, forms. 1rem minimum everywhere; 1.0625rem body.'
  },
  {
    name: 'Diagnostics',
    value: 'ui-monospace, SFMono-Regular, Menlo, monospace',
    notes: 'Technical detail lines only.'
  }
];

export const SHAPE_ROWS: SpecRow[] = [
  { name: 'Buttons', value: '999px pill', notes: 'Every button, chip and tab is a pill.' },
  { name: 'Cards & tiles', value: '14px', notes: 'Theme cards, form tiles, option rows.' },
  { name: 'Modals', value: '0–24px', notes: 'Full-bleed on phones; 24px on the signup card.' },
  { name: 'Tap target', value: '44px', notes: 'Minimum height for anything tappable on phones.' }
];

/** The day the theme data above was last copied from Dexii. */
export const GENERATED_ON = '2026-10-05';
export const SOURCE_FILE = 'theme.service.ts';
