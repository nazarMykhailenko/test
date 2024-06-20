/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{ts,tsx}'],
	theme: {
		screens: {
			xs: '360px',
			sm: '640px',
			lg: '1024px',
			xl: '1200px',
			md: '1315px',
			'2xl': '1536px',
			'3xl': '1768px',
		},
		extend: {},
	},
	plugins: [],
}
