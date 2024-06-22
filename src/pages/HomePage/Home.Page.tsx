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
    const thePost: Post = {
        "id": 1,
        "title": "My First Blog Post",
        "content": [
            {
                "type": "heading",
                "level": 1,
                "text": "Introduction"
            },
            {
                "type": "paragraph",
                "text": "This is the introduction to my first blog post."
            },
            {
                "type": "image",
                "src": "https://onecms-res.cloudinary.com/image/upload/s--O2ieHjKj--/c_fill,g_auto,h_468,w_830/f_auto,q_auto/v1/mediacorp/cna/image/2023/02/27/istock-1357759108.jpg?itok=zKcg0hVU",
                "alt": "An example image"
            },
            {
                "type": "list",
                "items": ["First item", "Second item", "Third item"]
            },
            {
                "type": "paragraph",
                "text": "This is the conclusion of my first blog post."
            }
        ]
    }
    const [posts, setPosts] = useState<Post[]>([thePost]);
    const postFromState = useRecoilState(postsState);
    useEffect(() => {
      getAllPosts().then(res => setPosts([...res, thePost]));
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
