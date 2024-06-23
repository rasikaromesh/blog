import { atom } from 'recoil';
import { Post } from '../Types/Post';

export const selectedPostState = atom<Post | null>({
    key: 'selectedPostState',
    default: null,
});