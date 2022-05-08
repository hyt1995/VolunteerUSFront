import { atom } from 'recoil';

export const userAtom = atom<userType>({
    key: 'register',
    default: {
        id: null,
        name: null,
        login: false
    }
});

type userType = {
    id: string | null;
    name: string | null;
    login: boolean;
};
