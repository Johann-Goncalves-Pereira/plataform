/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		colors: {
			'surface-100': 'hsl(from var(--color-surface-100) h s l / <alpha-value>)',
			'surface-200': 'hsl(from var(--color-surface-200) h s l / <alpha-value>)',
			'surface-300': 'hsl(from var(--color-surface-300) h s l / <alpha-value>)',
			'surface-400': 'hsl(from var(--color-surface-400) h s l / <alpha-value>)',
			'primary-100': 'hsl(from var(--color-primary-100) h s l / <alpha-value>)',
			current: 'currentColor',
		},
		extend: {},
	},
	plugins: [],
}
