module.exports = {
	// '*.ts': ['eslint --fix', 'git add'],
	'{!(package)*.json,*.code-snippets,.!(browserslist)*rc}': ['yarn format'],
	'package.json': ['yarn format'],
	'*.md': ['yarn lint:markdownlint', 'yarn format'],
	'{src,apps,libs,test}/**/*.{ts,tsx}': ['eslint'],
	'{src,apps,libs,test}/**/*.{js,jsx}': ['eslint'],
	'./**/*.{ts,tsx,js,jsx,json,rc,css,scss,less,html}': ['prettier --write'],
	'package.json': ['npx -y sort-package-json'],
};
