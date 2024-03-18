import './Home.Page.styles.scss'
import {PostComponent} from "../../components/Post/Post.Component";

export const HomePage = () => {
    return (
        <div className="posts-container">
            <PostComponent/>
        </div>
    );
};
