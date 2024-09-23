module.exports = {
	apps: [
		{
			name: 'nest-app',
			cwd: '.',
			script: 'src/main.js',
			mode: 'cluster',
			instances: 'max',
			env: {
				NODE_ENV: 'production',
			},
		},
	],
};
