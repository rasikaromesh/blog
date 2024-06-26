import './AppHeader.styles.scss';
import {  useSetRecoilState } from "recoil";
import { postsState } from "../../states/posts.state";
import { Post } from "../../Types/Post";
import { selectedPostState } from "../../states/selectedPost.state";

export const AppHeader = () => {
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
    const setPost = useSetRecoilState(postsState);
    const setSelectedPost = useSetRecoilState(selectedPostState);

    setPost([thePost]);
    setSelectedPost(thePost);
    return (
        <div className="app-header-container">
            <h1 className='header'>Roma's Scribbles</h1>
        </div>
    );
};
