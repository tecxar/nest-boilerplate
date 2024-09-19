module.exports = {
	// '*.ts': ['eslint --fix', 'git add'],
	// '{!(package)*.json,*.code-snippets,.!(browserslist)*rc}': ['prettier --write'],
	'package.json': ['npx -y sort-package-json', 'prettier --write'],
	'*.md': ['yarn lint:markdownlint', 'prettier --write'],
	'{src,apps,libs,test}/**/*.{ts,tsx}': ['eslint --fix', 'prettier --write'],
	'{src,apps,libs,test}/**/*.{js,jsx}': ['eslint --fix', 'prettier --write'],
	'./**/*.{ts,tsx,js,jsx,json,rc,css,scss,less,html}': ['eslint --fix', 'prettier --write'],
};
