// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightObsidian, { obsidianSidebarGroup } from 'starlight-obsidian'

const codePaths = ['deployment/**', 'forge/**']
const fileExclusion = ['docs/excalidraw/*.md']

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
					ignore: [
						// Ignore all code related directories.
						...codePaths,
						...fileExclusion
					],
					sidebar: {
						label: 'Documentation'
					},
				}),
			],
			sidebar: [
				obsidianSidebarGroup,
			],
		}),
	],
});
