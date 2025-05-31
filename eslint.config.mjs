import globals from "globals";
import tsParser from "@typescript-eslint/parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
	baseDirectory: __dirname,
	recommendedConfig: js.configs.recommended,
	allConfig: js.configs.all,
});

const eslintConfig = [
	{
		ignores: [
			"**/public",
			"**/blog",
			"**/next-env.d.ts",
			"**/next.config.ts",
			"**/node_modules",
			"**/.next",
			"**/.DS_Store",
			"**/dist",
			"**/dist-ssr",
			"**/*.local",
			"**/.eslintcache",
			"**/*.spec.ts",
			"**/*.d.ts",
			"**/*.md",
			"**/*.less",
			"**/*.css",
			"**/*.json",
		],
	},
	...compat.extends("eslint:recommended", "next/core-web-vitals", "next/typescript"),
	{
		languageOptions: {
			globals: {
				...globals.browser,
			},

			parser: tsParser,
		},

		settings: {
			react: {
				version: "detect",
			},
		},

		rules: {
			eqeqeq: "error",
			"no-implicit-coercion": "error",
			"consistent-return": "error",
			semi: "error",
			quotes: ["error", "double"],

			// ? Disabled as Prettier handles these
			indent: "off",

			"@typescript-eslint/no-explicit-any": "off",
			"react/no-unescaped-entities": "off",
		},
	},
];

export default eslintConfig;
