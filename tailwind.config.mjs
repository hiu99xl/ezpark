/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px'
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-plus-jakarta-sans)', 'Plus Jakarta Sans', 'sans-serif'],
      },
      colors: {
        primary: '#ef5628',
        secondary: '#46a5a5',
        dark: '#2b2b2b',
        light: '#f5f5f5',
      },
      spacing: {
        ...(() => {
          const result = {};
          for (let i = 1; i <= 480; i++) {
            result[i / 4] = `${i / 16}rem`;
          }
          return result;
        })()
      },
      fontSize: {
        ...(() => {
          const result = {};
          for (let i = 12; i <= 160; i++) {
            result[i / 4] = `${i / 16}rem`;
          }
          return result;
        })()
      }
    }
  },
  plugins: []
}
