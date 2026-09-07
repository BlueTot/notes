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

Markdown note files are located in the `content/` directory, separated by year and module. The HTML rendered notes are located in the `notes/` directory. To re-render notes, the `tatum` tool is required. You can find it on my github [here](https://github.com/BlueTot/tatum). To rerender notes, do the following:

1. Render all notes to HTML using `tatum`. From the repo root, run

    ```bash
    tatum render-all --template .tatum/bluetot -p
    ```

    (or choose any template as you wish)

2. Update the directory structure

    ```bash
    node scripts/update-dir-structure.js
    ```

### Adding a markdown file

To render a new markdown file, add a line to `.tatum/render-list.json` in the format `"<markdown path>": "<html path>`. For example:

```json
"content/year2/cs275/notes.md": "notes/year2/cs275/cs275-revision-notes.html"
```
