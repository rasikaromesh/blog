import { atom } from 'recoil';
import { Post } from '../Types/Post';

export const selectedPostState = atom<Post | undefined>({
    key: 'selectedPostState',
    default: undefined,
});