import { Post } from "../Types/Post";
import api from "./api"

export const getAllPosts = async () => {
    console.log(`fetching posts`);
    console.log(process.env.REACT_APP_BLOG_API_BASE_URL);
    
    try {
        const response = await api.get('v1/post/');
        return response.data;
    } catch (error) {
        console.error(`error fetching posts`, error);
        throw error;
    }
}

export const createPost = async (post: Post) => {
    console.log(post);
    
    try {
        const response = await api.post('v1/post/', JSON.stringify(post));
        return response.data;
    } catch (error) {
        console.error(`error creating post`, error);
        throw error;
    }
}
