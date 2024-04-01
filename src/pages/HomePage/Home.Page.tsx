import './Home.styles.scss'
import {PostComponent} from "../../components/Post/Post.Component";
import {PostFormComponent} from "../../components/PostForm/PostForm.component";
import {FormThemeProvider} from "react-form-component";

export const HomePage = () => {
    return (
        <div className="home-container">
            <div className="posts-container">

            <PostComponent/>
            </div>
            <div className="post-form-container">
            <FormThemeProvider>
                <PostFormComponent/>
            </FormThemeProvider>
            </div>
        </div>
    );
};
