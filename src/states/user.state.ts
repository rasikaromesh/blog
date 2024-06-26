import { atom } from 'recoil';

interface User {
    username: string;
    isLoggedIn: boolean;
    role: string;
}

export const userState = atom<User>({
    key: 'userState',
    default: {
        username: '',
        isLoggedIn: false,
        role: '',
    },
});