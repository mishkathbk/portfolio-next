import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        typewriter: 'typewriter 2s steps(11) forwards',
        caret: 'typewriter 2s steps(11) forwards, blink 1s steps(11) infinite 2s',
      },
      keyframes: {
        typewriter: {
          to: {
            left: '100%',
          },
        },
        blink: {
          '0%': {
            opacity: '0',
          },
          '0.1%': {
            opacity: '1',
          },
          '50%': {
            opacity: '1',
          },
          '50.1%': {
            opacity: '0',
          },
          '100%': {
            opacity: '0',
          },
        },
      },

      screens: {
        "xs": "320px",
        "sm": "600px",
        "md": "780px",
        "lg": "1080px",
        "xl": "1280px",
        ["2xl"]: "1500px",
      },
      fontFamily: {
        "opensans": "'Open Sans, sans-serif",
        "pop": "'Poppins', sans- serif",
        "mulish": "'Mulish', sans-serif",
        "rubik": "'Rubik', sans-serif",
        "roboto": "'Roboto Slab', serif",
        "plexsans": "'IBM Plex Sans', sans-serif"
  },
  backgroundImage: {
    "cover": "url('/images/aboutcoverback.png')",
    "reactlang":"url('/images/react.svg')",
    "imghov": "url('/images/smiling.jpg')",
    'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
    'gradient-conic':
      'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
    "smile": "url('/images/smile.png')",
    "smiling": "url('/images/smiling.png')",
  },
},
  },
plugins: [],
}
export default config
