export type LexicalTextNode = {
  mode?: string;
  text?: string;
  type: string;
  [key: string]: unknown;
};

export type LexicalElementNode = {
  tag?: string;
  type: string;
  children?: LexicalNode[];
  [key: string]: unknown;
};

export type LexicalNode = LexicalTextNode | LexicalElementNode;

export type LexicalRoot = {
  type: string;
  children?: LexicalNode[];
  [key: string]: unknown;
};

export type PageContent = {
  root?: LexicalRoot;
  [key: string]: unknown;
};

export type Media = {
  id: number;
  alt: string | null;
  url: string;
  thumbnailURL: string | null;
  filename: string;
  mimeType: string;
  filesize: number;
  width: number;
  height: number;
  focalX?: number;
  focalY?: number;
  updatedAt: string;
  createdAt: string;
};

export type PageSEO = {
  metaTitle: string | null;
  metaDescription: string | null;
  keywords: string | null;
  ogImage: unknown;
};

export type PagePayload = {
  id: number;
  title: string;
  slug: string;
  homepagePhoto: Media | null;
  detailPhoto: Media | null;
  excerpt: string | null;
  content: PageContent;
  vr360Image: unknown;
  vr360Data: unknown;
  seo: PageSEO;
  metadata: unknown[];
  sections: unknown[];
  site: unknown;
  language: { code: string; [key: string]: unknown };
  updatedAt: string;
  createdAt: string;
  _status?: string;
};

export type HomePageData = {
  title: string;
  heroImageUrl: string | null;
  heroImageAlt: string | null;
  headlineLines: string[];
  contentHeadings: string[];
};

export type NewsPayload = {
  id: number;
  title: string;
  slug: string;
  excerpt: string | null;
  content: PageContent;
  homepagePhoto: Media | null;
  detailPhoto: Media | null;
  tags?: Array<{ tag: string }>;
  publishedAt?: string | null;
  updatedAt: string;
  createdAt: string;
  language?: { code: string };
  [key: string]: unknown;
};

export type NewsContentBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'image'; url: string; alt: string | null; caption?: string | null };

export type NewsArticleData = {
  id: number;
  slug: string;
  title: string;
  excerpt: string | null;
  imageUrl: string | null;
  imageAlt: string | null;
  dateDisplay: string;
  tags: string[];
  contentBlocks: NewsContentBlock[];
};
