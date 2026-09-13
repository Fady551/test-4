/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        cairo: ['var(--font-cairo)', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'monospace']
      },
      colors: {
        bg0: '#07070b',
        sidebar: '#050508',
        purple: '#8b5cf6',
        purple2: '#a855f7',
        yellow: '#fbbf24'
      }
    }
  },
  plugins: []
};
