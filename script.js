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

    // Resize iframe height based on content
    setTimeout(() => {
      frame.style.height = innerDoc.body.scrollHeight + 'px';
    }, 100);
  };
}

loadNote();
