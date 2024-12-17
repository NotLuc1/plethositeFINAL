/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        background: '#000000',
        primary: {
          DEFAULT: '#020617',
          light: '#1E3A8A',
          dark: '#000000'
        },
        chrome: {
          DEFAULT: '#E2E8F0',
          light: '#F8FAFC',
          dark: '#94A3B8'
        },
        midnight: {
          light: '#1E3A8A',
          DEFAULT: '#000000',
          dark: '#000000'
        }
      },
      fontFamily: {
        display: ['Space Grotesk', 'system-ui', 'sans-serif'],
        sans: ['Space Grotesk', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-night': 'linear-gradient(to bottom, #000000, #020617)',
        'gradient-glow': 'radial-gradient(circle at 50% 50%, rgba(30, 58, 138, 0.1), transparent 70%)',
        'chrome-linear': 'linear-gradient(180deg, #F8FAFC 0%, #E2E8F0 50%, #94A3B8 100%)',
        'chrome-radial': 'radial-gradient(circle at center, #F8FAFC 0%, #E2E8F0 50%, #94A3B8 100%)',
      },
      boxShadow: {
        'chrome': '0 0 0 1px rgba(30, 58, 138, 0.3), 0 0 15px rgba(30, 58, 138, 0.2), inset 0 0 2px rgba(248, 250, 252, 0.3)',
        'glow': '0 0 30px rgba(30, 58, 138, 0.2), 0 0 60px rgba(30, 58, 138, 0.1)',
        'epic': '0 0 50px rgba(30, 58, 138, 0.3), 0 0 100px rgba(30, 58, 138, 0.2)',
      }
    },
  },
  plugins: [],
}