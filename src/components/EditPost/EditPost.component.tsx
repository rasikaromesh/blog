import React from 'react';
import {ContentBlock, HeadingBlock, ImageBlock, ListBlock, ParagraphBlock, Post} from "../../Types/Post";

const isParagraphBlock = (block: ContentBlock): block is ParagraphBlock => block.type === 'paragraph';
const isHeadingBlock = (block: ContentBlock): block is HeadingBlock => block.type === 'heading';
const isImageBlock = (block: ContentBlock): block is ImageBlock => block.type === 'image';
const isListBlock = (block: ContentBlock): block is ListBlock => block.type === 'list';

export interface EditPostProps {
    post: Post;
    setPost: (post: Post) => void;
}

const EditPostComponent: React.FC<EditPostProps> = (props) => {
    const {post, setPost} = props;

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPost({...post, title: e.target.value});
    };

    const handleContentChange = (index: number, key: string, value: any) => {
        const newContent = post.content.map((block, i) => {
            if (i !== index) return block;

            if (isParagraphBlock(block) && key === 'text') {
                return {...block, text: value};
            }
            if (isHeadingBlock(block)) {
                if (key === 'text') {
                    return {...block, text: value};
                } else if (key === 'level') {
                    return {...block, level: value};
                }
            }
            if (isImageBlock(block)) {
                if (key === 'src') {
                    return {...block, src: value};
                } else if (key === 'alt') {
                    return {...block, alt: value};
                }
            }
            if (isListBlock(block) && key === 'items') {
                return {...block, items: value};
            }

            return block;
        });

        setPost({...post, content: newContent});
    };

    const addContentBlock = (type: ContentBlock['type']) => {
        let newBlock: ContentBlock;
        switch (type) {
            case 'paragraph':
                newBlock = {type: 'paragraph', text: ''};
                break;
            case 'heading':
                newBlock = {type: 'heading', level: 1, text: ''};
                break;
            case 'image':
                newBlock = {type: 'image', src: '', alt: ''};
                break;
            case 'list':
                newBlock = {type: 'list', items: []};
                break;
            default:
                throw new Error('Unknown block type');
        }
        setPost({...post, content: [...post.content, newBlock]});
    };

    return (
        <div>
            <h2>Edit Post</h2>
            <input
                type="text"
                value={post.title}
                onChange={handleTitleChange}
                placeholder="Post Title"
            />
            {post.content.map((block, index) => (
                <div key={index}>
                    {block.type === 'paragraph' && (
                        <textarea
                            value={block.text}
                            onChange={(e) => handleContentChange(index, 'text', e.target.value)}
                            placeholder="Paragraph text"
                        />
                    )}
                    {block.type === 'heading' && (
                        <>
                            <input
                                type="number"
                                value={block.level}
                                onChange={(e) => handleContentChange(index, 'level', +e.target.value)}
                                placeholder="Heading level"
                            />
                            <input
                                type="text"
                                value={block.text}
                                onChange={(e) => handleContentChange(index, 'text', e.target.value)}
                                placeholder="Heading text"
                            />
                        </>
                    )}
                    {block.type === 'image' && (
                        <>
                            <input
                                type="text"
                                value={block.src}
                                onChange={(e) => handleContentChange(index, 'src', e.target.value)}
                                placeholder="Image source URL"
                            />
                            <input
                                type="text"
                                value={block.alt}
                                onChange={(e) => handleContentChange(index, 'alt', e.target.value)}
                                placeholder="Image alt text"
                            />
                        </>
                    )}
                    {block.type === 'list' && (
                        <textarea
                            value={block.items.join('\n')}
                            onChange={(e) => handleContentChange(index, 'items', e.target.value.split('\n'))}
                            placeholder="List items (one per line)"
                        />
                    )}
                </div>
            ))}
            <button onClick={() => addContentBlock('paragraph')}>Add Paragraph</button>
            <button onClick={() => addContentBlock('heading')}>Add Heading</button>
            <button onClick={() => addContentBlock('image')}>Add Image</button>
            <button onClick={() => addContentBlock('list')}>Add List</button>

        </div>
    );
};

export default EditPostComponent;
