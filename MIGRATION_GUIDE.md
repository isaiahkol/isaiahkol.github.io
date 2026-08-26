# Safe migration guide

This approach keeps the original site in two places: a permanent Git branch named `legacy-site`, and a `legacy-site/` folder on the new main branch. The old files are moved, not deleted. The new static site is then deployed by GitHub Actions.

## Before you begin

Install Git and Node.js 20 or newer. Download this ZIP and extract it. In the instructions below, “repository folder” means the folder containing your existing portfolio's hidden `.git` directory.

## 1. Make a permanent backup branch

Open a terminal in your existing repository folder and run:

```bash
git status
git add -A
git commit -m "Archive original portfolio before redesign"
git branch legacy-site
git push origin main
git push -u origin legacy-site
```

If Git says there is nothing to commit, that is fine. Continue with the next command. Do not proceed if `git status` reports files you do not recognize or work you are not ready to save.

## 2. Keep a visible copy of the old site

In your repository folder, create a folder named `legacy-site`. Move the old website files and folders into it, with these exceptions:

- Do not move the hidden `.git` folder.
- Do not move the new `legacy-site` folder into itself.
- If an old `.github` folder exists, move it into `legacy-site` too; the ZIP supplies the replacement workflow.

Moving the old files is safer and cleaner than commenting out an entire site. HTML comments do not disable CSS, JavaScript, build settings, media, or GitHub workflows consistently.

## 3. Copy in the new site

Copy everything from the extracted ZIP into the repository folder, including the `.github` folder. The repository root should now contain `package.json`, `src`, `public`, `.github`, `README.md`, `MIGRATION_GUIDE.md`, and `legacy-site`.

On macOS, press `Command + Shift + .` to show hidden files. On Windows, enable “Hidden items” in File Explorer so `.github` is visible.

## 4. Test before publishing

In the repository folder, run:

```bash
npm install
npm run dev
```

Open the address shown in the terminal. Check the homepage, each project, every carousel, image enlargement, videos, YouTube embeds, and the resume. Stop the test with `Ctrl + C`, then run:

```bash
npm run build
```

## 5. Publish through GitHub

Commit the replacement as one reversible change:

```bash
git add -A
git commit -m "Replace portfolio with redesigned static site"
git push origin main
```

On GitHub, open the repository and go to **Settings → Pages**. Under **Build and deployment**, choose **GitHub Actions**. Then open the **Actions** tab and wait for “Deploy portfolio to GitHub Pages” to finish.

The file `public/CNAME` preserves `isaiahkol.com`. In **Settings → Pages**, confirm the custom domain is still `isaiahkol.com`, then enable **Enforce HTTPS** when GitHub allows it. DNS changes are usually unnecessary when the same repository already serves that domain.

## Roll back

The easiest rollback is to reverse the single replacement commit:

```bash
git log --oneline -5
git revert REPLACEMENT_COMMIT_ID
git push origin main
```

Replace `REPLACEMENT_COMMIT_ID` with the short ID next to “Replace portfolio with redesigned static site.” This restores the previous tracked state without rewriting history. The untouched original also remains on the `legacy-site` branch.

If anything looks uncertain before a command, stop there. A screenshot of the repository's top-level files and the GitHub Pages settings is enough to continue troubleshooting safely.
