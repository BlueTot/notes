# Warwick Revision Notes

A github pages hosted website for Warwick Computer Science revision notes. Visit the URL in the *about* to visit the website.

## Modules Covered

**Year 1**
* CS118 - Programming for Computer Scientists
* CS126 - Design of Information Structures
* CS130 - Mathematics for Computer Scientists I
* CS131 - Mathematics for Computer Scientists II
* CS132 - Computer Organisation & Architecture
* CS133 - Professional Skills
* CS140 - Computer Security
* CS141 - Functional Programming
* IB104 - Mathematical Programming I

**Year 2**
* CS241 - Operating Systems and Networks
* CS257 - Advanced Computer Architecture
* CS258 - Database Systems
* CS260 - Algorithms
* CS263 - Cyber Security
* CS275 - Probability & Statistics

## Contributing

### Rerendering Notes

Markdown note files are located in the `content/` directory, separated by year and module. The rendered HTML notes are located in the `notes/` directory. Building requires [Tatum](https://github.com/BlueTot/tatum), Node.js, and GNU Make.

From the repository root, rebuild the complete website with:

```bash
make build
```

`make build` first removes the generated HTML files listed in `.tatum/render-list.json` and the generated `structure.json`. It then renders all notes with the `.tatum/bluetot` template and regenerates the directory structure. Cleaning first prevents Tatum from prompting before overwriting each existing page.

To remove the generated files without rebuilding them, run:

```bash
make clean
```

The cleanup script validates that every render target is an HTML file under `notes/`; it does not delete unlisted files. To inspect what it would remove without changing anything, run:

```bash
node scripts/clean-generated.js --dry-run
```

Without Make, the equivalent manual workflow is:

```bash
node scripts/clean-generated.js
tatum render-all --template .tatum/bluetot -p
node scripts/update-dir-structure.js
```

### Adding a markdown file

To render a new markdown file, add a line to `.tatum/render-list.json` in the format `"<markdown path>": "<html path>`. For example:

```json
"content/year2/cs275/notes.md": "notes/year2/cs275/cs275-revision-notes.html"
```
