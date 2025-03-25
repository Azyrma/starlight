// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeRapide from 'starlight-theme-rapide';
import vercel from '@astrojs/vercel/static'

// https://astro.build/config
export default defineConfig({
	output: 'server',
	integrations: [
		starlight({
			plugins: [starlightThemeRapide()],
			title: 'Severin Mills',
			social: {
				github: 'https://github.com/Azyrma',
				linkedin: 'https://www.linkedin.com/in/severin-mills-4b9609220/',
				email: 'mailto:smills@ethz.ch'
			},
			sidebar: [
				{
					label: 'Home',
					items: [
						{ label: 'About me', slug: 'home'},
					],
				},
				{
					label: 'Information Retrieval',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'General Information', slug: 'infret/general' },
						{ label: 'Exercise session', slug: 'infret/exercise'}
					],
				},
				// {
				// 	label: 'Einführung in die Programmierung',
				// 	autogenerate: { directory: 'reference' },
				// },
			],
		}),
	],
	adapter: vercel(),
});
