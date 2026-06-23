# wiki

Static HTML pages hosted on GitHub Pages.

**Live site:** https://maxkazar.github.io/wiki/

## Adding a page

1. Drop an `.html` file into this folder (subfolders work too).
2. Commit and push:

   ```sh
   git add -A && git commit -m "add page" && git push
   ```

3. It goes live at `https://maxkazar.github.io/wiki/<file>.html`
   (changes take ~1 minute to build).

`.nojekyll` is present so files are served exactly as-is (no Jekyll processing).
