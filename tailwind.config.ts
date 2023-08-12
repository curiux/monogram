import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        heroEnter: "hero-enter 1s ease-out",
        fadeIn: "fadeIn 3s",
      }
    },
  },
  plugins: [],
}
export default config
