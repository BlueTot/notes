"""Conservatively move images never mentioned by Markdown in content/.

Run without arguments for a dry run; pass --apply to move the files.
Filename matching covers Markdown links, reference definitions, HTML and
Obsidian embeds, including URL-encoded names. Plain-text mentions are kept too.
"""
import argparse
import html
import json
from pathlib import Path
import re
from urllib.parse import unquote


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--apply', action='store_true')
    args = parser.parse_args()
    root = Path(__file__).resolve().parents[1]
    content = (root / 'content').resolve()
    images = (content / 'Images').resolve()
    destination = (root / 'temporary').resolve()
    assert images.is_relative_to(root) and destination.is_relative_to(root)
    markdown = sorted(p for p in content.rglob('*')
                      if p.is_file() and p.suffix.lower() in {'.md', '.markdown', '.mdown'})
    texts = []
    for path in markdown:
        raw = path.read_text(encoding='utf-8-sig')
        decoded = html.unescape(unquote(raw))
        texts.append(re.sub(r'\\([!"#$%&\'()*+,\-./:;<=>?@\[\]^_`{|}~])', r'\1', decoded).casefold())
    extensions = {'.png', '.jpg', '.jpeg', '.gif', '.svg', '.webp', '.bmp',
                  '.tif', '.tiff', '.ico', '.avif', '.heic', '.heif', '.apng'}
    candidates = sorted(p for p in images.rglob('*')
                        if p.is_file() and p.suffix.lower() in extensions)
    unused = [p for p in candidates if not any(p.name.casefold() in text for text in texts)]
    moves = [(p, destination / p.relative_to(images)) for p in unused]
    for source, target in moves:
        if source.is_symlink() or not source.resolve().is_relative_to(images):
            raise RuntimeError(f'Unexpected source path: {source}')
        if not target.resolve().is_relative_to(destination) or target.exists():
            raise RuntimeError(f'Unsafe or existing destination: {target}')
    report = {'markdown_files': len(markdown), 'images_scanned': len(candidates),
              'images_retained': len(candidates) - len(unused), 'unused_images': len(unused),
              'applied': args.apply,
              'moves': [{'from': str(s.relative_to(root)), 'to': str(t.relative_to(root))}
                        for s, t in moves]}
    if args.apply:
        for source, target in moves:
            target.parent.mkdir(parents=True, exist_ok=True)
            source.rename(target)
        assert all(not s.exists() and t.is_file() for s, t in moves)
        destination.mkdir(parents=True, exist_ok=True)
        (destination / 'unused-images-manifest.json').write_text(
            json.dumps(report, indent=2) + '\n', encoding='utf-8')
    print(json.dumps({k: v for k, v in report.items() if k != 'moves'}, indent=2))


if __name__ == '__main__':
    main()
