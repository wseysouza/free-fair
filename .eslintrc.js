module.exports = {
	env: {
		es6: true,
		jest: true,
		es2021: true,
	},
	extends: [
		'airbnb',
		'plugin:react-native/all',
		'prettier',
		'plugin:react/recommended',
	],
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly',
		__DEV__: 'readonly',
	},
	parser: 'babel-eslint',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 12,
		sourceType: 'module',
	},
	plugins: ['react', 'react-native', 'jsx-a11y', 'import', 'prettier'],
	rules: {
		'prettier/prettier': 'error',
		'react/jsx-filename-extension': [
			'warn',
			{ extensions: ['.jsx', '.js'] },
		],
		'import/prefer-default-export': 'off',
		'no-param-reassign': 'off',
		'no-console': ['error', { allow: ['tron'] }],
		'react/display-name': 'off',
		'no-underscore-dangle': 'off',
	},
};
