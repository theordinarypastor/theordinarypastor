import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-lora)', 'Georgia', 'serif'],
      },
      colors: {
        limestone: '#F2EFE8',
        warmwhite: '#FDFAF5',
        ink: '#1A1714',
        sapphire: '#2B4F8C',
        nave: '#1A2A42',
        glasslight: '#E8EFF8',
        'stone-border': '#C8C0B4',
        mortar: '#7A7268',
        'forest-glass': '#3D6B4A',
        'amber-light': '#C9A84C',
      },
      transitionDuration: {
        '400': '400ms',
      },
    },
  },
  plugins: [],
}

export default config
