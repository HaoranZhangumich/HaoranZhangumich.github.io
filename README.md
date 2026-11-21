# haoranzhangumich.github.io

Source of my homepage, <https://haoranzhangumich.github.io/>.

It is one static page with no build step:

- `index.html`: all content (about, news, publications, awards, projects, experience, service and teaching)
- `assets/css/style.css`: styles, including the light and dark themes
- `assets/js/main.js`: theme toggle; the looping videos play only while on screen and each has a play/pause button
- `assets/img/`: photo, favicons, publication media (`pubs/`), award clip (`awards/`), organisation logos (`logos/`), project covers (`projects/`)
- `assets/pdf/`: CV

Preview locally:

```sh
python3 -m http.server 8000   # then open http://localhost:8000
```

Pushing to `main` runs `.github/workflows/deploy.yml`, which publishes the public files to the `gh-pages` branch that GitHub Pages serves.
