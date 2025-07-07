Use WSL

```bash
wsl -d Ubuntu-22.04
```

#### Theme generator

```bash
npm run generate-css-variables
```

#### Run Story Book

```bash
npm run storybook
```

#### Release Build:

```bash
npx tsx scripts/release
```

#### Push single package to npm

```bash
npm publish --registry https://npm.pkg.github.com
```

### Get started with Mantine locally
- Install the editorconfig extension for your editor.
- Fork the repository, then clone or download your fork.
- Run `nvm use` to switch to the Node version specified in ``.nvmrc` file (install nvm).
- Install dependencies with yarn –  `yarn`
- Setup project – `npm run setup`
- Build local version of all packages – `npm run build all`
- To start storybook – `npm run storybook`
- To start docs – `npm run docs`
- To rebuild props descriptions – `npm run docs:docgen`