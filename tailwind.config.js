/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				'primary-100': '#ccf3e8',
				'primary-300': '#67dbbb',
				'primary-500': '#01c38e',
				'secondary-400': '#FFCD58',
				'secondary-500': '#FFC132',
			},
			fontFamily: {
				Roboto: ['Roboto', 'sans-serif'],
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
