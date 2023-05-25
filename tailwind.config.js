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
				'primary-100': '#d1e3f2',
				'primary-300': '#76acd7',
				'primary-500': '#1b75bc',
				'secondary-400': '#FFCD58',
				'secondary-500': '#FFC132',
			},
			fontFamily: {
				dmsans: ['DM Sans', 'sans-serif'],
				montserrat: ['Montserrat', 'sans-serif'],
			},
			backgroundImage: {
				macbook: "url('../public/assets/macbook1.jpg')",
				laptop: "url('../public/assets/laptop.png')",
			},
			content: {
				laptop: "url('../public/assets/laptop.png')",
			},
		},
		screens: {
			xs: '480px',
			sm: '768px',
			md: '1060px',
		},
	},
	plugins: [],
}
