module.exports = {
  '*.ts': ['eslint --fix', 'git add'],
  // '{!(package)*.json,*.code-snippets,.!(browserslist)*rc}': [
  //   'yarn lint:prettier --parser json',
  // ],
  // 'package.json': ['yarn lint:prettier'],
  // '*.md': ['yarn lint:markdownlint', 'yarn lint:prettier'],
  '{src,apps,libs,test}/**/*.{ts,tsx}': ['eslint'],
  '{src,apps,libs,test}/**/*.{js,jsx}': ['eslint'],
  './**/*.{ts,tsx,js,jsx,json,rc,css,scss,less,html}': ['prettier --write'],
  'package.json': ['npx -y sort-package-json'],
};
