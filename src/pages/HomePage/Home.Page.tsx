import './Home.styles.scss'
import {BlogPostComponent} from "../../components/Post/BlogPostComponent";
import {FormThemeProvider} from "react-form-component";
import {useState} from "react";
import {Post} from "../../Types/Post";
import EditPostComponent from "../../components/EditPost/EditPost.component";

export const HomePage = () => {
    const [post, setPost] = useState<Post[]>([
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
                        "src": "https://example.com/image.jpg",
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
        ]
    );
    return (
        <div className="home-container">
            <div className="posts-container">

                <BlogPostComponent post={post[0]}/>
            </div>
            <div className="post-form-container">
                <FormThemeProvider>
                    <EditPostComponent/>
                </FormThemeProvider>
            </div>
        </div>
    );
};
