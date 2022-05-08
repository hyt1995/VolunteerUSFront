import { useQuery } from '@apollo/react-hooks';
import { info } from 'lib/gql/volunteer';

export const useSearchQuery = ({ begin, post, title, option, page, onComplete }: searchType) =>
    useQuery(info, {
        variables: {
            progrmBeginDate: begin,
            postAdres: post,
            progrmTitle: title,
            pageNumber: page
        },
        onCompleted: (data: any) => onComplete(data)
    });

type completeType = {
    onComplete: (data: any) => void;
};

type searchType = completeType & {
    begin: string | null;
    post: string | null;
    title: string | null;
    option: {
        teen: boolean;
        group: boolean;
        adult: boolean;
    };
    page: number;
};
