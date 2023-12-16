import plugin from "tailwindcss/plugin"

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
		container: {
			center: true,
			padding: '1rem',
		},
		fontFamily: {
			serif: ['Peach', 'serif'],
		},
	},
	plugins: [
		plugin(({ addVariant }) => {
			addVariant("first-child", "&>*:first-child")
			addVariant("second-child", "&>*:nth-child(2)")
			addVariant("penultimate-child", "&>*:nth-last-child(2)")
			addVariant("last-child", "&>*:last-child")
		}),
	],
}
