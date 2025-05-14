const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [`_site/**/*.html`],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'home-image': "url('/assets/images/barbara-zandoval-FqdyGFmSttc-unsplash.jpg')",
      }),
    },
    fontFamily: {
      sans: ['Roboto', ...defaultTheme.fontFamily.sans],
      mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'],
    },
  },
  variants: {},
  plugins: [
    require(`@tailwindcss/typography`)
  ],
};
