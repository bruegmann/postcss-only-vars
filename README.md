# postcss-only-vars

[PostCSS] plugin to only export CSS variable declarations.

[postcss]: https://github.com/postcss/postcss

Input:

```css
:root {
  --bs-primary: blue;
}

body {
  --body-bg: white;
  background: var(--body-bg);
  color: black;
}

a {
  color: var(--bs-primary);
}
```

Output:

```css
:root {
  --bs-primary: blue;
}

body {
  --body-bg: white;
}
```

## Usage

**Step 1:** Install plugin:

```sh
npm install --save-dev postcss postcss-only-vars
```

**Step 2:** Check you project for existed PostCSS config: `postcss.config.js`
in the project root, `"postcss"` section in `package.json`
or `postcss` in bundle config.

If you do not use PostCSS, add it according to [official docs]
and set this plugin in settings.

**Step 3:** Add the plugin to plugins list:

```diff
module.exports = {
  plugins: [
+   require('postcss-only-vars'),
    require('autoprefixer')
  ]
}
```

[official docs]: https://github.com/postcss/postcss#usage
