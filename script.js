const state = { structure: null, currentPath: null };
const byId = id => document.getElementById(id);
const el = {
  layout: byId('layout'), title: byId('note-title'), brand: byId('brand'), back: byId('back'),
  tocToggle: byId('toc-toggle'), landing: byId('landing'), browse: byId('browse-notes'),
  yearGrid: byId('year-grid'), directory: byId('directory-view'),
  directoryTitle: byId('directory-title'), directoryCount: byId('directory-count'),
  breadcrumbs: byId('breadcrumbs'), dirlist: byId('dirlist'), toc: byId('toc-panel'),
  tocList: byId('toc-list'), noteContainer: byId('note-container'),
  frame: byId('note-frame'), status: byId('status-view'),
  statusTitle: byId('status-title'), statusMessage: byId('status-message'),
  statusAction: byId('status-action')
};
const icons = {
  folder: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 6.75A1.75 1.75 0 0 1 4.75 5h4.19c.46 0 .9.18 1.23.51L11.66 7h7.59A1.75 1.75 0 0 1 21 8.75v8.5A1.75 1.75 0 0 1 19.25 19H4.75A1.75 1.75 0 0 1 3 17.25V6.75Z"/></svg>',
  file: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 3.75C6 2.78 6.78 2 7.75 2h5.69c.46 0 .9.18 1.23.51l3.82 3.82c.33.33.51.77.51 1.23v12.69c0 .97-.78 1.75-1.75 1.75h-9.5C6.78 22 6 21.22 6 20.25V3.75Zm8 0V7h3.25L14 3.75ZM9 11.5h6V10H9v1.5Zm0 4h6V14H9v1.5Zm0 4h4V18H9v1.5Z"/></svg>'
};

function basename(path) {
  return path.split(/[\\/]/).filter(Boolean).pop() || 'Notes';
}
function displayName(path, isFile = false) {
  let name = basename(path);
  if (isFile) name = name.replace(/\.html$/i, '');
  name = name.replace(/[-_]+/g, ' ')
    .replace(/^year\s*(\d+)$/i, 'Year $1')
    .replace(/\bcs\s*(\d+)\b/gi, 'CS$1')
    .replace(/\b\w/g, char => char.toUpperCase());
  return name.replace(/CS(\d+)/g, 'CS$1');
}
function navigate(path, replace = false) {
  const url = new URL(location.href);
  path === null ? url.searchParams.delete('note') : url.searchParams.set('note', path);
  history[replace ? 'replaceState' : 'pushState']({ path }, '', url);
  renderRoute();
}
function setView(view) {
  el.landing.hidden = view !== 'landing';
  el.directory.hidden = view !== 'directory';
  el.status.hidden = view !== 'status';
  el.toc.hidden = view !== 'note';
  el.noteContainer.hidden = view !== 'note';
  el.back.hidden = view === 'landing' || view === 'status';
  el.tocToggle.hidden = view !== 'note';
  el.layout.classList.remove('toc-closed');
}
function sortedChildren(path) {
  return state.structure[path].children.slice().sort((a, b) => {
    const typeOrder = Number(state.structure[a].isFile) - Number(state.structure[b].isFile);
    return typeOrder || displayName(a, state.structure[a].isFile)
      .localeCompare(displayName(b, state.structure[b].isFile), undefined, { numeric: true });
  });
}
function makeEntry(path) {
  const item = state.structure[path];
  const button = document.createElement('button');
  const name = displayName(path, item.isFile);
  button.type = 'button';
  button.className = `entry-card ${item.isFile ? 'file-card' : 'folder-card'}`;
  button.setAttribute('aria-label', `${item.isFile ? 'Open note' : 'Open folder'} ${name}`);
  const icon = document.createElement('span');
  icon.className = 'entry-icon';
  icon.innerHTML = item.isFile ? icons.file : icons.folder;
  const copy = document.createElement('span');
  copy.className = 'entry-copy';
  const label = document.createElement('strong');
  label.textContent = name;
  const detail = document.createElement('span');
  detail.textContent = item.isFile ? 'HTML note' : `${item.children.length} ${item.children.length === 1 ? 'item' : 'items'}`;
  copy.append(label, detail);
  const arrow = document.createElement('span');
  arrow.className = 'entry-arrow';
  arrow.setAttribute('aria-hidden', 'true');
  arrow.textContent = '→';
  button.append(icon, copy, arrow);
  button.addEventListener('click', () => navigate(path));
  return button;
}
function renderLanding() {
  state.currentPath = null;
  setView('landing');
  el.title.textContent = 'Home';
  document.title = 'Warwick Revision Notes';
  el.yearGrid.replaceChildren(...sortedChildren('/').map(makeEntry));
}
function pathTrail(path) {
  const trail = [];
  for (let cursor = path; cursor !== null && state.structure[cursor]; cursor = state.structure[cursor].parent) trail.unshift(cursor);
  return trail;
}
function renderBreadcrumbs(path) {
  el.breadcrumbs.replaceChildren();
  const trail = [{ path: null, name: 'Home' }, ...pathTrail(path).map(value => ({
    path: value, name: value === '/' ? 'All notes' : displayName(value)
  }))];
  trail.forEach((crumb, index) => {
    if (index) {
      const separator = document.createElement('span');
      separator.className = 'breadcrumb-separator';
      separator.setAttribute('aria-hidden', 'true');
      separator.textContent = '/';
      el.breadcrumbs.appendChild(separator);
    }
    const button = document.createElement('button');
    button.type = 'button';
    button.textContent = crumb.name;
    if (index === trail.length - 1) {
      button.disabled = true;
      button.setAttribute('aria-current', 'page');
    } else button.addEventListener('click', () => navigate(crumb.path));
    el.breadcrumbs.appendChild(button);
  });
}
function renderDirectory(path) {
  state.currentPath = path;
  setView('directory');
  const children = sortedChildren(path);
  const name = path === '/' ? 'All notes' : displayName(path);
  el.title.textContent = name;
  el.directoryTitle.textContent = name;
  el.directoryCount.textContent = `${children.length} ${children.length === 1 ? 'item' : 'items'}`;
  document.title = `${name} · Warwick Revision Notes`;
  renderBreadcrumbs(path);
  if (children.length) el.dirlist.replaceChildren(...children.map(makeEntry));
  else {
    const empty = document.createElement('div');
    empty.className = 'empty-state';
    empty.innerHTML = '<span aria-hidden="true">∅</span><h2>This directory is empty</h2><p>There are no notes here yet.</p>';
    el.dirlist.replaceChildren(empty);
  }
}
function buildToc(doc) {
  const heading = document.createElement('strong');
  heading.className = 'toc-title';
  heading.textContent = 'Table of Contents';
  const list = document.createElement('ul');
  doc.querySelectorAll('h1, h2').forEach((item, index) => {
    if (!item.id) item.id = `heading-${index}`;
    const li = document.createElement('li');
    li.className = item.tagName === 'H1' ? 'toc-level-1' : 'toc-level-2';
    const link = document.createElement('a');
    link.href = `#${item.id}`;
    link.textContent = item.textContent;
    link.onclick = event => {
      event.preventDefault();
      doc.getElementById(item.id)?.scrollIntoView({ behavior: 'auto', block: 'start' });
    };
    li.appendChild(link);
    list.appendChild(li);
  });
  el.tocList.replaceChildren(heading, list);
}
function renderNote(path) {
  state.currentPath = path;
  setView('note');
  const name = displayName(path, true);
  el.title.textContent = name;
  document.title = `${name} · Warwick Revision Notes`;
  el.frame.onload = () => {
    try {
      const doc = el.frame.contentDocument || el.frame.contentWindow.document;
      const title = doc.title || name;
      el.title.textContent = title;
      document.title = `${title} · Warwick Revision Notes`;
      buildToc(doc);
    } catch (error) { console.error('Unable to build the table of contents:', error); }
  };
  el.frame.src = `notes/${path.replace(/\\/g, '/')}`;
}
function renderStatus(title, message) {
  setView('status');
  el.title.textContent = 'Unavailable';
  el.statusTitle.textContent = title;
  el.statusMessage.textContent = message;
  document.title = `${title} · Warwick Revision Notes`;
}
function renderRoute() {
  const path = new URLSearchParams(location.search).get('note');
  if (path === null) return renderLanding();
  const item = state.structure[path];
  if (!item) return renderStatus('Page not found', `The path “${path}” does not exist in the notes library.`);
  return item.isFile ? renderNote(path) : renderDirectory(path);
}
function goBack() {
  const item = state.structure?.[state.currentPath];
  navigate(!item || item.parent === null ? null : item.parent);
}
async function initialise() {
  el.brand.onclick = event => { event.preventDefault(); navigate(null); };
  el.browse.onclick = () => navigate('/');
  el.back.onclick = goBack;
  el.tocToggle.onclick = () => el.layout.classList.toggle('toc-closed');
  el.statusAction.onclick = () => navigate(null);
  window.addEventListener('popstate', renderRoute);
  try {
    const response = await fetch('structure.json');
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    state.structure = await response.json();
    renderRoute();
  } catch (error) {
    console.error('Failed to load directory:', error);
    renderStatus('Could not load notes', 'The notes directory is unavailable. Please refresh the page and try again.');
  }
}
initialise();
