import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: [
    './src/**/*.{html,js}', // Adjust the paths to match your project structure
    './public/index.html',
  ],
  theme: {
    extend: {
      colors: {
        neon: '#14f7ff',
      },
      boxShadow: {
        neon: '0 0 0.5em var(--tw-color-neon)',
      },
      fontFamily: {
        designHeader: ['"Bruno Ace"', ...defaultTheme.fontFamily.sans], // Bruno Ace
        coderHeader: ['"DotGothic16"', ...defaultTheme.fontFamily.sans], // DotGothic16
        paragraph: ['"Inter"', ...defaultTheme.fontFamily.sans], // Inter
        header: ['"Contrail One"', ...defaultTheme.fontFamily.sans], // Contrail One
        bigHeader: ['"JetBrains Mono"', ...defaultTheme.fontFamily.mono], // JetBrains Mono
      },
    },
  },
  plugins: [],
};