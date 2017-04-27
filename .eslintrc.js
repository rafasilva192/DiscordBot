module.exports = {
	extends: 'defaults/configurations/airbnb/es6.js',
	rules: {
		'space-after-keywords': 0,
		'space-return-throw-case': 0,
		'no-empty-label': 0,
		'no-labels': 2,
		'keyword-spacing': 2,

		radix: 0,
		semi: [2, 'never'],
		indent: [2, 'tab'],
		'max-len': 0,
		'no-irregular-whitespace': 2,
		'no-unused-vars': [2, {
			vars: 'all',
			args: 'none',
		}],
		'guard-for-in': 0,
		'no-param-reassign': [2, {
			props: false,
		}],
		'arrow-body-style': 0,
	},
}
