const fs = require('fs');
const path = require('path');

function isHtml(item) {
    return path.extname(item).toLowerCase() === '.html';
}

const root = "notes"

function toJson(dir, table = {}, parent = null) {

    // get name of directory and add to table
    // const name = path.basename(dir);
    table[dir] = { isFile: false, children: [], parent };

    // read items of directory
    const items = fs.readdirSync(root + dir);

    for (const item of items) {

        const fullPath = path.join(dir, item);
        const stat = fs.statSync(root + fullPath);

        if (stat.isDirectory()) {
            table[dir].children.push(fullPath);
            toJson(fullPath, table, dir);
        } else if (isHtml(item)) {
            table[dir].children.push(fullPath);
            table[fullPath] = { isFile: true, children: [], parent: dir };
        }
    }
    
    return table;
}

const result = toJson('/');
fs.writeFileSync('structure.json', JSON.stringify(result, null, 2));

