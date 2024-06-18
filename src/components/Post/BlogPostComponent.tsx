import './BlogPost.Styles.scss';
import {ContentBlock, Post} from "../../Types/Post";
import React from "react";

interface BlogPostProps {
    post: Post;
}
const renderContentBlock = (block: ContentBlock) => {
    switch (block.type) {
        case 'paragraph':
            return <p className='paragraph'>{block.text}</p>;
        case 'heading':
            return React.createElement(`h${block.level}`, {}, block.text);
        case 'image':
            return (<div className='image-box'>
                <img src={block.src} alt={block.alt} />
            </div>);
        case 'list':
            return (
                <ul>
                    {block.items.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            );
        default:
            return null;
    }
};

export const BlogPostComponent: React.FC<BlogPostProps> = ({post}) => {
    return (
        <div className='post-container'>
            <h2>{post.title}</h2>
            {post.content.map((block, index) => (
                <div key={index}>{renderContentBlock(block)}</div>
            ))}
        </div>
    );
};
