import React from 'react';
import { BlogPostComponent } from '../../components/Post/BlogPostComponent';
import { FormThemeProvider } from 'react-form-component';
import EditPostComponent from '../../components/EditPost/EditPost.component';

type EditPostPageProps = {
    postId: number;
    title?: string;
    content?: any;
    post?: any;
    setPost?: any;
};

const EditPostPage: React.FC<EditPostPageProps> = ({ postId, title = 'test title', content, post, setPost }) => {
    // Your component logic here

    return (
        <div className="home-container">
            <div className="posts-container">

                <BlogPostComponent post={post}/>
            </div>
            <div className="post-form-container">
                <FormThemeProvider>
                    <EditPostComponent post={post} setPost={setPost}/>
                </FormThemeProvider>
            </div>
        </div>
    );
};

export default EditPostPage;
