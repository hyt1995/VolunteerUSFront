import { atom } from 'recoil';

export const searchAtom = atom<searchType>({
    key: 'search',
    default: {
        city: '서울특별시',
        detail: '',
        date: '',
        keyword: '',
        option: {
            teen: false,
            adult: false,
            group: false
        }
    }
});

type searchType = {
    city: string;
    detail: string | null;
    date: string | null;
    keyword: string | null;
    option: {
        teen: boolean;
        adult: boolean;
        group: boolean;
    };
};
