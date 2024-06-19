import './Home.styles.scss'
import {BlogPostComponent} from "../../components/Post/BlogPostComponent";
import {FormThemeProvider} from "react-form-component";
import {useState} from "react";
import {Post} from "../../Types/Post";
import EditPostComponent from "../../components/EditPost/EditPost.component";

export const HomePage = () => {
    const [post, setPost] = useState<Post>(
            {
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
    );
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
