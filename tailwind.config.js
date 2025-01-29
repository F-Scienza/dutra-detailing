import { nextui } from '@nextui-org/react';
/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./index.html',
		'./src/**/*.{js,ts,jsx,tsx}',
		'./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			colors: {
				whatsapp: '#25d366',
			},
			animation: {
				border: 'border 6s ease-out infinite',
			},
			keyframes: {
				border: {
					'0%, 100%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' },
				},
			},
		},
	},
	darkMode: 'class',
	plugins: [nextui()],
};
