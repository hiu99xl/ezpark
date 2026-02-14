import type { LexicalNode, LexicalRoot, LexicalTextNode } from '@/types/api';
import type { NewsContentBlock } from '@/types/api';

function getTextFromNode(node: LexicalNode): string {
  if ('text' in node && typeof node.text === 'string') {
    return node.text;
  }
  if ('children' in node && Array.isArray(node.children)) {
    return node.children.map(getTextFromNode).join('');
  }
  return '';
}

function getTextFromChildren(children: LexicalNode[]): string {
  return children.map(getTextFromNode).join('').trim();
}

export function parseLexicalContent(content: { root?: LexicalRoot }): {
  headlineLines: string[];
  contentHeadings: string[];
} {
  const headlineLines: string[] = [];
  const contentHeadings: string[] = [];

  const root = content?.root;
  const children = root?.children;
  if (!Array.isArray(children)) {
    return { headlineLines, contentHeadings };
  }

  for (const node of children) {
    if (!node || typeof node !== 'object') continue;
    const type = (node as { type?: string }).type;
    const tag = (node as { tag?: string }).tag;
    const nodeChildren = (node as { children?: LexicalNode[] }).children;

    if (type === 'heading' && tag === 'h1') {
      const text = nodeChildren ? getTextFromChildren(nodeChildren) : '';
      if (text) headlineLines.push(text);
    } else if (type === 'heading' && tag === 'h3') {
      const text = nodeChildren ? getTextFromChildren(nodeChildren) : '';
      if (text) contentHeadings.push(text);
    }
  }

  return { headlineLines, contentHeadings };
}

function collectParagraphTexts(node: LexicalNode, out: string[]): void {
  if (!node || typeof node !== 'object') return;
  const type = (node as { type?: string }).type;
  const nodeChildren = (node as { children?: LexicalNode[] }).children;

  if (type === 'paragraph' || type === 'heading' || type === 'list' || type === 'listitem') {
    const text = nodeChildren ? getTextFromChildren(nodeChildren) : '';
    if (text.trim()) out.push(text.trim());
    return;
  }
  if (type === 'text' || (node as LexicalTextNode).text != null) {
    const t = (node as LexicalTextNode).text;
    if (typeof t === 'string' && t.trim()) out.push(t.trim());
    return;
  }
  if (Array.isArray(nodeChildren)) {
    for (const child of nodeChildren) collectParagraphTexts(child, out);
  }
}

export function parseNewsContentToBlocks(content: { root?: LexicalRoot }, apiBaseUrl: string): NewsContentBlock[] {
  const blocks: NewsContentBlock[] = [];
  const children = content?.root?.children;
  if (!Array.isArray(children)) return blocks;

  for (const node of children) {
    if (!node || typeof node !== 'object') continue;
    const type = (node as { type?: string }).type;
    const nodeChildren = (node as { children?: LexicalNode[] }).children;

    if (type === 'paragraph') {
      const text = nodeChildren ? getTextFromChildren(nodeChildren) : '';
      if (text.trim()) blocks.push({ type: 'paragraph', text: text.trim() });
    } else if (type === 'upload') {
      const value = (node as { value?: { url?: string; alt?: string | null } }).value;
      if (value?.url) {
        const url = value.url.startsWith('http') ? value.url : `${apiBaseUrl}${value.url.startsWith('/') ? '' : '/'}${value.url}`;
        const alt = value.alt ?? null;
        blocks.push({ type: 'image', url, alt, caption: null });
      }
    } else {
      const texts: string[] = [];
      collectParagraphTexts(node, texts);
      for (const text of texts) {
        if (text) blocks.push({ type: 'paragraph', text });
      }
    }
  }

  const result: NewsContentBlock[] = [];
  for (let i = 0; i < blocks.length; i++) {
    const block = blocks[i];
    if (block.type === 'image' && i + 1 < blocks.length && blocks[i + 1].type === 'paragraph') {
      const next = blocks[i + 1] as { type: 'paragraph'; text: string };
      const useAsCaption = next.text.length > 0 && next.text.length <= 120;
      if (useAsCaption) {
        result.push({ ...block, caption: next.text });
        i++;
        continue;
      }
    }
    result.push(block);
  }
  return result;
}
