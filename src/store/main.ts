import { atom } from 'recoil';

export const searchAtom = atom<searchType>({
    key: 'search',
    default: {
        city: '서울특별시',
        detail: '',
        date: '',
        keyword: '',
        target: {
            teen: false,
            adult: false,
            group: false
        },
        page: 0
    }
});

type searchType = {
    city: string;
    detail: string | null;
    date: string | null;
    keyword: string | null;
    target: {
        teen: boolean;
        adult: boolean;
        group: boolean;
    };
    page: number;
};
