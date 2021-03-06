import { atom } from 'recoil';

export const registerAtom = atom<registerType>({
    key: 'register',
    default: {
        id: '',
        password: '',
        confirmPassword: '',
        userName: '',
        gender: false,
        birthday: '',
        phone: '01000000000',
        address: ''
    }
});

type registerType = {
    id: string;
    password: string;
    confirmPassword: string;
    userName: string;
    gender: boolean;
    birthday: string;
    phone: string;
    address: string;
};
