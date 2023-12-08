/** @type {import('tailwindcss').Config} */
export const content = ['./src/**/*.{js,jsx,ts,tsx}'];
export const theme = {
	extend: {
		spacing: {
			'5px': '5px'
		},
		colors: {
			customYellow: '#FBBF24'
		},
		animation: {
			draw: 'draw 1s forwards'
		},
		keyframes: {
			draw: {
				from: { 'stroke-dasharray': ' 0 1500' },
				to: { 'stroke-dasharray': '1500 1500' }
			}
		}
	}
};
export const plugins = [];
