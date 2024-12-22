import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        neon: '#14f7ff',
        primary: '#C62F94',
        accent: '#33AADD',
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
      fontWeight: {
        thin: '200',
        regular: '400', // Add font weights if needed
        medium: '500',
        bold: '700',
        black: '900',
      },
    },
    screens: {
      xs: '480px',
      sm: '640px', // Small devices (e.g., tablets)
      md: '768px', // Medium devices (e.g., small laptops)
      lg: '1024px', // Large devices (e.g., desktops)
      xl: '1280px', // Extra-large devices
      '2xl': '1536px' // Double extra-large devices
    },
  },
  plugins: [],
};