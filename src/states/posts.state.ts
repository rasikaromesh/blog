import { atom } from "recoil";
import { Post } from "../Types/Post";
const POST_STATE = 'posts'

export const postsState = atom({
    key: "posts",
    default: [] as Post[]
});