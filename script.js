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
                titleSpan.textContent = `Is a directory, ${noteName}`
            }
        } else {
            titleSpan.textContent = `File not found, ${noteName}`
        }

        console.log(dirstruct);
    } catch (error) {
        console.error('Error:', error);
    }

    // fetch('directory.json')
    //     .then(response => {
    //         if (!response.ok) {
    //             throw new Error('Could not load directory structure.');
    //         }
    //         return response.json();
    //     })
    //     .then(data => {
    //         console.log(data);
    //
    //     })
    //     .catch(error => {
    //         console.error('Error loading directory.json:', error);
    //     });
    // if (fs.existsSync(path)) {
    //     loadFrame(path, titleSpan);
    // } else {
    //     console.log("uh oh");
    //     titleSpan.textContent = `404 not found ${path}`
    //     return;
    // }
}

function loadFrame(path, titleSpan) {
    const frame = document.getElementById('note-frame');
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

    document.addEventListener("DOMContentLoaded", () => {

        document.getElementById("toc-toggle").addEventListener("click", () => {
  document.getElementById("layout").classList.toggle("toc-closed");
});

    });

}

loadNote();

