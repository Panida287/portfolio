import defaultTheme from 'tailwindcss/defaultTheme';
import textShadowPlugin from 'tailwindcss-textshadow';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        neon: '#14f7ff',
        primary: '#C62F94',
        accent: '#33AADD',
        card: '#69B3CA',
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
      xs: '480px', // phone
      sm: '500px', //
      md: '640px', // Small devices (e.g., tablets)
      lg: '768px', // Medium devices (e.g., small laptops)
      xl: '1024px', // Large devices (e.g., desktops)
      '2xl': '1286px' // Double extra-large devices
    },
  },
  plugins: [textShadowPlugin],
};