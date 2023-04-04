/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			aspectRatio: {
				'3/4': '3 / 4',
			  },
			  fontFamily: {
				lato: ['Lato', 'sans-serif'],
				didot: ['NN Didot Modern', 'serif'],
				fieldgothic: ['FieldGothic', 'sans-serif'],
			  },
		},
	},
	plugins: [],
}
