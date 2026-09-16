import {defineConfig} from 'vite-plus';
import javascript from '@ver0/oxlint-config/javascript.js';
import typescript from '@ver0/oxlint-config/typescript.js';
import browser from '@ver0/oxlint-config/browser.js';
import vitest from '@ver0/oxlint-config/vitest.js';
import {playwright} from 'vite-plus/test/browser-playwright';

export default defineConfig({
	fmt: {
		printWidth: 120,
		useTabs: true,
		tabWidth: 2,
		semi: true,
		singleQuote: true,
		trailingComma: 'all',
		bracketSpacing: false,
	},
	lint: {
		extends: [javascript, typescript, browser, vitest],
		ignorePatterns: ['dist/**', 'coverage/**'],
		rules: {
			// `__cache` is part of the published API: the documented way to drop the memoized measurement
			'no-underscore-dangle': 'off',
		},
	},
	test: {
		dir: 'test',
		browser: {
			enabled: true,
			headless: true,
			screenshotFailures: false,
			provider: playwright(),
			instances: [{browser: 'chromium'}],
		},
		coverage: {
			include: ['src/**/*.ts'],
		},
	},
});
