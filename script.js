// redirect users from root to ?note=/
const params = new URLSearchParams(window.location.search);
if (!params.has("note")) {
    const url = new URL(window.location.href);
    url.search = "?note=%2F";
    window.location.href = url.toString(); // full, safe redirect
}

async function loadNote() {
    const noteName = new URLSearchParams(window.location.search).get('note');
    const titleSpan = document.getElementById('note-title');

    if (!noteName) {
        titleSpan.textContent = "No note selected. Use ?note=intro";
        return;
    }

    try {
        const response = await fetch('structure.json');
        if (!response.ok) throw new Error('Failed to load directory');

        const dirstruct = await response.json();

        if (noteName in dirstruct) {
            if (dirstruct[noteName].isFile) {
                loadFrame(`notes/${noteName}`, titleSpan);
            } else {
                titleSpan.textContent = `Hello world`;
                showDirlist(noteName, titleSpan, dirstruct);
            }
            addBackHandler(noteName, dirstruct);
        } else {
            titleSpan.textContent = `File not found, ${noteName}`
        }

        console.log(dirstruct);
    } catch (error) {
        console.error('Error:', error);
    }
}

function addBackHandler(pathName, dirstruct) {
    document.getElementById('back').addEventListener("click", () => {
        const parent = dirstruct[pathName].parent;
        console.log(parent);
        if (parent !== null)
            window.location.search = `?note=${encodeURIComponent(parent)}`
    });
}

function showDirlist(noteName, titleSpan, dirstruct) {

    titleSpan.textContent = `Directory: ${noteName}`;
    document.getElementById('toc-panel').style.display = 'none';
    document.getElementById('note-container').style.display = 'none';

    const dirContainer = document.getElementById('dirlist');
    dirContainer.style.display = 'block';
    dirContainer.innerHTML = '';

    const children = dirstruct[noteName].children;
    if (children.length === 0) {
        dirContainer.textContent = 'This directory is empty.';
    } else {
        const ul = document.createElement('ul');
        children.forEach(child => {
            const li = document.createElement('li');
            const link = document.createElement('a');
            link.href = `?note=${child}`;
            link.textContent = child;
            link.style.color = '#89dceb';
            link.style.textDecoration = 'none';
            li.appendChild(link);
            ul.appendChild(li);
        });
        dirContainer.appendChild(ul);
    }
}

function loadFrame(path, titleSpan) {
    const frame = document.getElementById('note-frame');
    document.getElementById('note-container').style.display = 'block';
    document.getElementById('dirlist').style.display = 'none';
    frame.src = path;

    frame.onload = function () {
        const innerDoc = frame.contentDocument || frame.contentWindow.document;

        // Set the title from the inner document
        const innerTitle = innerDoc.title || noteName;
        titleSpan.textContent = innerTitle;

        // Build table of contents
        const tocContainer = document.getElementById('toc-list');
        tocContainer.innerHTML = '<strong>Table of Contents</strong>';

        const list = document.createElement('ul');
        const headings = innerDoc.querySelectorAll('h1, h2');

        headings.forEach((heading, index) => {
            if (!heading.id) {
                heading.id = `heading-${index}`;
            }

            const li = document.createElement('li');
            level = parseInt(heading.tagName[1]);
            li.style.marginLeft = `${(level - 1) * 10}px`;

            const link = document.createElement('a');
            link.href = `#${heading.id}`;
            link.textContent = heading.textContent;
            if (level === 1) {
                link.style.color = '#f38ba8' // H1 - soft rosy pink
            } else if (level === 2) {
                link.style.color = '#89b4fa' // H2 - sky blue
            } else {
                link.style.color = '#cdd6f4'; // default fallback for other colors
            }
            // link.style.color = '#89b4fa';
            link.style.textDecoration = 'none';

            link.onclick = (e) => {
                e.preventDefault(); // Stop default link behavior

                const target = innerDoc.getElementById(heading.id);
                if (target) {
                    target.scrollIntoView({ behavior: 'auto', block: 'start' });
                }
            };

            li.appendChild(link);
            list.appendChild(li);
        });

        tocContainer.appendChild(list);

    };


    document.getElementById("toc-toggle").addEventListener("click", () => {
        document.getElementById("layout").classList.toggle("toc-closed");
    });

}

loadNote();

