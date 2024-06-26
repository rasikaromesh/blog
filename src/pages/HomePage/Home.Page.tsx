import './Home.styles.scss'
import { BlogPostComponent } from "../../components/Post/BlogPostComponent";
import { useEffect } from "react";
import { useRecoilState } from 'recoil';
import { postsState } from '../../states/posts.state';
import { getAllPosts } from '../../services/postService';

export const HomePage = () => {
    const [posts, setPosts] = useRecoilState(postsState);
    useEffect(() => {
        getAllPosts().then(res => setPosts([...res, ...posts]));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return (
        <div className="home-container">
            {posts.map((post) => (
                <div className="posts-container">
                    <BlogPostComponent post={post} />
                </div>
            ))
            }
        </div>
    );
};
