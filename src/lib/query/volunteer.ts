import { useQuery } from '@apollo/react-hooks';
import { info } from 'lib/gql/volunteer';

export const useInfo = ({ begin, post, title, option, page, onComplete }: infoType) =>
    useQuery(info, {
        variables: {
            progrmBeginDate: begin,
            postAdres: post,
            progrmTitle: title,
            teenPossible: option.teen,
            groupPossible: option.group,
            adultPossible: option.adult,
            pageNumber: page
        },
        onCompleted: (data: any) => onComplete(data)
    });

type completeType = {
    onComplete: (data: any) => void;
};

type infoType = completeType & {
    begin: string;
    post: string;
    title: string;
    option: {
        teen: boolean;
        group: boolean;
        adult: boolean;
    };
    page: number;
};
