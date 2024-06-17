export interface Post {
    id: number;
    title: string;
    content: ContentBlock[];
}

export type ContentBlock =
    | ParagraphBlock
    | HeadingBlock
    | ImageBlock
    | ListBlock;
export type keys = keyof ContentBlock;

export interface ParagraphBlock {
    type: 'paragraph';
    text: string;
}

export interface HeadingBlock {
    type: 'heading';
    level: number;
    text: string;
}

export interface ImageBlock {
    type: 'image';
    src: string;
    alt: string;
}

export interface ListBlock {
    type: 'list';
    items: string[];
}
