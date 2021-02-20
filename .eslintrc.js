module.exports = {
	root: true,
	env: {
		browser: true,
	},
	extends: [
		"plugin:vue/essential",
		"@vue/typescript",
		"plugin:@typescript-eslint/recommended",
	],
	parser: "vue-eslint-parser",
	parserOptions: {
		ecmaVersion: 2020,
		parser: "@typescript-eslint/parser",
	},
	rules: {
		"no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
		"no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
		"@typescript-eslint/no-non-null-assertion": 0,
		"@typescript-eslint/no-inferrable-types": 0,
		"@typescript-eslint/camelcase": 0,
	},
	plugins: [
		"only-warn",
		"vue",
		"@typescript-eslint"
	],
};
