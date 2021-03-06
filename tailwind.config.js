const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [`_site/**/*.html`],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'home-image': "url('/assets/images/christopher-gower-m_HRfLhgABo-unsplash.jpg')",
      }),
    },
    fontFamily: {
      sans: ['Roboto', ...defaultTheme.fontFamily.sans],
    },
  },
  variants: {},
  plugins: [
    require(`@tailwindcss/typography`)
  ],
};
