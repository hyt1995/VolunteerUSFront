import { useRef, useState, useEffect } from 'react';
import { useSearchQuery } from 'lib/query/volunteer';
import { useRecoilState } from 'recoil';
import useInfiniteScroll from '../useInfiniteScroll';
import { searchAtom } from '../../store/main';

const useVolunteerList = () => {
    const [search, setSearch] = useRecoilState(searchAtom);
    const [page, setPage] = useState<number>(0);
    const [data, setData] = useState<dataType[] | null>(null);
    const fetchMoreEl = useRef<any>(null);
    const intersecting = useInfiniteScroll(fetchMoreEl);

    const onComplete = (body: any) => {
        const { infoListResponse } = body;
        if (data) {
            setData([...data, ...infoListResponse]);
        } else {
            setData(infoListResponse);
        }
    };

    const { error } = useSearchQuery({
        begin: search.date,
        post: search.detail,
        title: search.keyword,
        page,
        option: search.option,
        onComplete
    });

    useEffect(() => {
        if (intersecting) {
            setPage(page + 1);
        }
    }, [intersecting]);

    return { data, fetchMoreEl };
};

type dataType = {
    __typename: string;
    progrmTitle: string;
    progrmEndDate: string;
    postAdres: string;
};

export default useVolunteerList;
