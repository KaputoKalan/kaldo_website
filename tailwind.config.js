/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        mobileBg: "url('/src/images/bg-sidebar-mobile.svg')",
        desktopBg: "url('/src/images/bg-sidebar-desktop.svg')",
      },
      colors: {
        'primary-100': '#ccf3e8',
        'primary-300': '#67dbbb',
        'primary-500': '#01c38e',
        'secondary-400': '#FFCD58',
        'secondary-500': '#FFC132',
        Marineblue: 'hsl(213, 96%, 18%)',
        Purplishblue: 'hsl(243, 100%, 62%)',
        Pastelblue: 'hsl(228, 100%, 84%)',
        Lightblue: 'hsl(206, 94%, 87%)',
        Strawberryred: 'hsl(354, 84%, 57%)',
        black: 'rgb(0,0,0)',
        White: 'hsl(255, 100%, 100%)',

        // Neutral
        Coolgray: 'hsl(231, 11%, 63%)',
        Magnolia: 'hsl(217, 100%, 97%)',
        Alabaster: 'hsl(231, 100%, 99%)',
      },
      fontFamily: {
        Roboto: ['Roboto', 'sans-serif'],
        ubuntu: "'Ubuntu', sans-serif",
      },
      backgroundImage: {
        macbook: "url('../public/assets/macbook1.jpg')",
        laptop: "url('../public/assets/laptop.png')",
      },
      content: {
        laptop: "url('../public/assets/laptop.png')",
        web: "url('../public/assets/web.png')",
        webapp: "url('../public/assets/webapp.png')",
        app: "url('../public/assets/app.png')",
        about: "url('../public/assets/about.jpg')",
      },
    },
    screens: {
      xs: '480px',
      sm: '768px',
      md: '1060px',
    },
  },
  plugins: [require('tailwind-scrollbar')],
}
