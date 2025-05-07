// postcss.config.js
module.exports = ({ env }) => ({
  plugins: [
    require('postcss-import'),
    require('tailwindcss')('./tailwind.config.js'),
    ...(env === 'production'
      ? [require('autoprefixer'), require('cssnano')]
      : []),
  ],
});
