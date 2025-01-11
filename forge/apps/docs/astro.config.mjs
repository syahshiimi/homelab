// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightObsidian, { obsidianSidebarGroup } from 'starlight-obsidian'

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: '@syahshiimi Homelab Docs',
			social: {
				github: 'https://github.com/syahshiimi/homelab',
			},
			plugins: [
				// Generate the Obsidian vault pages.
				starlightObsidian({
					vault: '../../../',
					skipGeneration: false,
					// Ignore all code related directories.
					ignore: ['deployment/**','forge/**'],
					sidebar: {
						label: 'docs'
					},
				}),
			],
			sidebar: [
				obsidianSidebarGroup,

				// {
				// 	label: 'Homelab Documentation',
				// 	autogenerate: {
				// 		directory: 'notes'
				// 	}
				// },
			],
		}),
	],
});
