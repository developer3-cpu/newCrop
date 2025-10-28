import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'SF Pro Display',
          'SF Pro Text',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'Noto Sans',
          'sans-serif',
          'Apple Color Emoji',
          'Segoe UI Emoji',
          'Segoe UI Symbol',
          'Noto Color Emoji',
        ],
      },
      colors: {
        farm: {
          green: '#2E7D32',
          leaf: '#4CAF50',
          soil: '#8D6E63',
          sky: '#E3F2FD',
          wheat: '#F4D06F',
          tomato: '#FF6B6B',
        },
      },
      boxShadow: {
        bento: '0 8px 24px rgba(0,0,0,0.08)',
      },
      borderRadius: {
        bento: '18px',
      },
    },
  },
  plugins: [],
}

export default config