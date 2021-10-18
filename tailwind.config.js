// tailwind.config.js
module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
        colors: {
          LMS:
          {
            50: '#27b0ff',
            100: '#00e8ec',
            200: '#278fff',
            300: '#0c63fa',
            400: '#0061FF',
            500: '#01E7EC',
            600: '#4c4f66',
            700: '#363849',
            800: '#2b3147',
            900: '#F84464',
          },
        },
      },
    },
    variants: {
      extend: {},
    },
    plugins: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  }