const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [`_site/**/*.html`],
  theme: {
    extend: {
      colors: {
        paper: '#FDFDFB',
        ink: '#1B1917',
        faded: '#6E6A63',
        line: '#E8E5DF',
        rosa: '#E4007C',
      },
    },
    fontFamily: {
      serif: ['Newsreader', 'Georgia', 'Times New Roman', 'serif'],
      mono: ['IBM Plex Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      sans: [...defaultTheme.fontFamily.sans],
    },
  },
  variants: {},
  plugins: [
    require(`@tailwindcss/typography`)
  ],
};
