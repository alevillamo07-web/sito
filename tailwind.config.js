/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FAF8F5',     // Off-white/Ivory background
        foreground: '#0D0D12',  // Obsidian text
        accent: '#C9A84C',      // Champagne
        muted: '#5A5A65',       // Muted slate text
        border: 'rgba(13, 13, 18, 0.1)' // Soft dark border
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      }
    },
  },
  plugins: [],
}
