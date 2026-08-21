import type { SiteSettings } from '@/lib/settings';

function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
  const cleaned = hex.replace('#', '');
  if (cleaned.length !== 6) return null;
  const r = parseInt(cleaned.slice(0, 2), 16);
  const g = parseInt(cleaned.slice(2, 4), 16);
  const b = parseInt(cleaned.slice(4, 6), 16);
  if (isNaN(r) || isNaN(g) || isNaN(b)) return null;
  return { r, g, b };
}

function rgbToHex(r: number, g: number, b: number): string {
  const clamp = (v: number) => Math.max(0, Math.min(255, Math.round(v)));
  const toHex = (v: number) => clamp(v).toString(16).padStart(2, '0');
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

function mix(hex: string, weight: number): string {
  const rgb = hexToRgb(hex);
  if (!rgb) return hex;
  const target = weight > 0 ? 255 : 0;
  const w = Math.abs(weight);
  return rgbToHex(
    rgb.r + (target - rgb.r) * w,
    rgb.g + (target - rgb.g) * w,
    rgb.b + (target - rgb.b) * w
  );
}

function darken(hex: string, weight: number): string {
  return mix(hex, -weight);
}

function lighten(hex: string, weight: number): string {
  return mix(hex, weight);
}

export function generateColorScale(baseHex: string): {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
  950: string;
} {
  return {
    50: lighten(baseHex, 0.92),
    100: lighten(baseHex, 0.84),
    200: lighten(baseHex, 0.7),
    300: lighten(baseHex, 0.5),
    400: lighten(baseHex, 0.25),
    500: baseHex,
    600: darken(baseHex, 0.12),
    700: darken(baseHex, 0.26),
    800: darken(baseHex, 0.4),
    900: darken(baseHex, 0.55),
    950: darken(baseHex, 0.7),
  };
}

export function applyTheme(settings: SiteSettings): void {
  const root = document.documentElement;
  const primary = generateColorScale(settings.primaryColor);
  const secondary = generateColorScale(settings.secondaryColor);

  root.style.setProperty('--color-primary-50', primary[50]);
  root.style.setProperty('--color-primary-100', primary[100]);
  root.style.setProperty('--color-primary-200', primary[200]);
  root.style.setProperty('--color-primary-300', primary[300]);
  root.style.setProperty('--color-primary-400', primary[400]);
  root.style.setProperty('--color-primary-500', primary[500]);
  root.style.setProperty('--color-primary-600', primary[600]);
  root.style.setProperty('--color-primary-700', primary[700]);
  root.style.setProperty('--color-primary-800', primary[800]);
  root.style.setProperty('--color-primary-900', primary[900]);
  root.style.setProperty('--color-primary-950', primary[950]);

  root.style.setProperty('--color-secondary-500', secondary[500]);
  root.style.setProperty('--color-secondary-600', secondary[600]);
  root.style.setProperty('--color-secondary-700', secondary[700]);

  root.style.setProperty('--color-accent', settings.brandAccentColor);
  root.style.setProperty('--color-hero-highlight-1', settings.heroHighlight1Color);
  root.style.setProperty('--color-hero-highlight-2', settings.heroHighlight2Color);
}

export { darken, lighten };
