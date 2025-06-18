function loadNote() {
    const noteName = new URLSearchParams(window.location.search).get('note');
    const frame = document.getElementById('note-frame');
    const titleSpan = document.getElementById('note-title');

    if (!noteName) {
        titleSpan.textContent = "No note selected. Use ?note=intro";
        return;
    }

    const path = `notes/${noteName}.html`;
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
            li.style.marginLeft = `${(parseInt(heading.tagName[1]) - 1) * 10}px`;

            const link = document.createElement('a');
            link.href = `#${heading.id}`;
            link.textContent = heading.textContent;
            link.style.color = '#89b4fa';
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

