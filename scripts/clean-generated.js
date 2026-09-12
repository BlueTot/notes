const fs = require('fs');
const path = require('path');

const repoRoot = path.resolve(__dirname, '..');
const notesRoot = path.join(repoRoot, 'notes');
const renderListPath = path.join(repoRoot, '.tatum', 'render-list.json');
const structurePath = path.join(repoRoot, 'structure.json');
const dryRun = process.argv.includes('--dry-run');

function removeGeneratedFile(target) {
    const relativeTarget = path.relative(repoRoot, target);

    if (dryRun) {
        console.log(`Would remove ${relativeTarget}`);
        return;
    }

    fs.rmSync(target, { force: true });
    console.log(`Removed ${relativeTarget}`);
}

const renderList = JSON.parse(fs.readFileSync(renderListPath, 'utf8'));

for (const outputPath of Object.values(renderList)) {
    if (typeof outputPath !== 'string') {
        throw new TypeError('Every output in .tatum/render-list.json must be a string.');
    }

    const target = path.resolve(repoRoot, outputPath);
    const relativeToNotes = path.relative(notesRoot, target);
    const isInsideNotes =
        relativeToNotes !== '' &&
        !relativeToNotes.startsWith(`..${path.sep}`) &&
        relativeToNotes !== '..' &&
        !path.isAbsolute(relativeToNotes);

    if (!isInsideNotes || path.extname(target).toLowerCase() !== '.html') {
        throw new Error(`Refusing to remove unsafe render target: ${outputPath}`);
    }

    removeGeneratedFile(target);
}

removeGeneratedFile(structurePath);
