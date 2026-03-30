/** Site-wide configuration */

export const SITE = {
  name: 'Giorgi Tarsaidze',
  description: 'Software Engineer',
  url: 'https://tarso.dev',
};

export const SOCIAL = {
  linkedin: 'https://www.linkedin.com/in/giorgi-tarsaidze-57a44a26a/',
  github: 'https://github.com/GiorgiTarsaidze',
  email: 'mailto:tarsaidzeg@gmail.com',
  youtube: 'https://www.youtube.com/@codequestwithtarso',
  twitter: 'https://x.com/tarso125',
};

/**
 * Available fonts for the blog reading experience.
 * To add a new font:
 * 1. Drop the font file into /public/fonts/
 * 2. Add an @font-face declaration in src/styles/global.css
 * 3. Add an entry below with { name, family }
 */
export const READING_FONTS = [
  { name: 'System Default', family: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, sans-serif' },
  { name: 'Georgia', family: 'Georgia, "Times New Roman", serif' },
  { name: 'Monospace', family: '"SFMono-Regular", Consolas, "Liberation Mono", Menlo, monospace' },
];

/** Font size scale in pixels for A-/A+ controls */
export const FONT_SIZES = [14, 16, 18, 20, 22, 24, 26, 28, 30, 32];
