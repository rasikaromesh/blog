import './Home.styles.scss'
import { BlogPostComponent } from "../../components/Post/BlogPostComponent";
import { FormThemeProvider } from "react-form-component";
import { useEffect, useState } from "react";
import { Post } from "../../Types/Post";
import EditPostComponent from "../../components/EditPost/EditPost.component";
import { useRecoilState } from 'recoil';
import { postsState } from '../../states/posts.state';
import { getAllPosts } from '../../services/postService';

export const HomePage = () => {
    const [posts, setPosts] = useRecoilState(postsState);
    useEffect(() => {
      getAllPosts().then(res => setPosts([...res, ...posts]));
    }, [])
    

    return (
        <div className="home-container">
            {posts.map((post) => (
                <>
                    <div className="posts-container">

                        <BlogPostComponent post={post} />
                    </div>
                    <div className="post-form-container">
                        {/* <FormThemeProvider>
                            <EditPostComponent post={post} setPost={null} />
                        </FormThemeProvider> */}
                    </div></>
            ))
            }
        </div>
    );
};
