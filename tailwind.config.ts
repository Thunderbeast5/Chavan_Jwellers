export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				accent: '#9b7c4b',
				muted: '#f6f6f6',
				ink: '#1f2937',
			},
			fontFamily: {
				sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
			},
			boxShadow: {
				soft: '0 10px 30px -10px rgba(0,0,0,0.15)'
			}
		},
	},
	plugins: [],
} satisfies import('tailwindcss').Config
