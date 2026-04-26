import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3F3F99',
          light: '#5C6BC0',
          dark: '#2E2E73',
        },
        secondary: {
          DEFAULT: '#5C6BC0',
        },
        neutral: {
          50: '#F4F6FA',
          900: '#2B2B2B',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
