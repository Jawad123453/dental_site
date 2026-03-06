import type { Config } from 'tailwindcss'
import forms from '@tailwindcss/forms'

export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './composables/**/*.{js,ts}',
    './plugins/**/*.{js,ts}',
    './app.vue',
  ],
  theme: {
    extend: {
      colors: {
        // Primary - Dark Navy
        navy: {
          DEFAULT: '#0F172A',
          50: '#1E293B',
          100: '#334155',
          200: '#475569',
        },
        // Accent - Gold
        gold: {
          DEFAULT: '#D4AF37',
          light: '#E5C158',
          dark: '#B8962E',
        },
        // WhatsApp Green
        whatsapp: '#25D366',
        // Call Blue
        call: '#3B82F6',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        arabic: ['Tajawal', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [forms],
} satisfies Config
