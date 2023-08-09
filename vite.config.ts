import { sveltekit } from '@sveltejs/kit/vite'
import { defineConfig } from 'vitest/config'
// import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-svelte-components/vite'
import path from 'path'

export default defineConfig({
	resolve: {
		alias: {
			'@': path.resolve('./src'),
			$lib: path.resolve('./src/lib'),
		},
	},
	plugins: [
		Components({
			dts: './src/components.d.ts',
			external: [
				{
					from: '@iconify/svelte',
					names: ['default as Icon'],
					defaultImport: false,
				},
			],
		}),
		// AutoImport({
		// 	include: [
		// 		/\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
		// 		/\.svelte$/, // svelte files
		// 	],
		// 	imports: ['svelte'],
		// 	dts: true,
		// 	// dirs: ['src/components', 'src/lib', 'src/msw'],
		// }),
		sveltekit(),
	],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}'],
	},
})
