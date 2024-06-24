import React from 'react';
import { BlogPostComponent } from '../../components/Post/BlogPostComponent';
import { FormThemeProvider } from 'react-form-component';
import EditPostComponent from '../../components/EditPost/EditPost.component';
import { selectedPostState } from '../../states/selectedPost.state';
import { useRecoilState, useRecoilValue } from 'recoil';
import { Post } from '../../Types/Post';

type CreateEditPostPageProps = {
    postId?: number;
    title?: string;
    content?: any;
    post?: any; // TODO remove post
    setPost?: any;
};
// TODO refactor props to use interface with required and optional props
const CreateEditPostPage: React.FC<CreateEditPostPageProps> = ({ postId, title = 'test title', content, post, setPost }) => {
    const [selectedPost, setSelectedPost] = useRecoilState(selectedPostState);

    return (
        <div className="home-container">
            <div className="posts-container">

                <BlogPostComponent post={selectedPost}/>
            </div>
            <div className="post-form-container">
                <FormThemeProvider>
                    <EditPostComponent post={selectedPost} setPost={setSelectedPost}/>
                </FormThemeProvider>
            </div>
        </div>
    );
};

export default CreateEditPostPage;
