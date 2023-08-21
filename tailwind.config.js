/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
    "./node_modules/flowbite-react/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      
    },
    colors : {
      transparent: 'transparent',
      current: 'currentColor',
      "primary" : "#516794",
      //button colors
      "stellight" : "#9ab6f0",
      "youtube" : "#FF0000",
      "twitter" : "#1D9BF0",
      "twitch" : "#A970FF",
      "cafe" : "#03C75A",
      "soundcloud" : "#F26E23",
      //personal colors
      "kanna" : "#373584",
      "yuni" : "#7C86DF",
      "tabi" : "#39a7d7",
      "lize" : "#f46874",
      "hina" : "#fca572",
      "mashiro" : "#69605e"
    },
    fontFamily: {
      'emoji': ['Noto Color Emoji', 'sans-serif'],
      'mono': ['ui-monospace', 'SFMono-Regular', '"D2 coding", SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New"'],
      'sunf': ['Sunflower', 'sans-serif'],
    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
}