import { useQuery } from '@apollo/react-hooks';
import { info } from 'lib/gql/volunteer';
import * as api from './types';

export const useSearchQuery = ({
    progrmBeginDate,
    postAdres,
    progrmTitle,
    teenPossible,
    adultPossible,
    groupPossible,
    pageNumber,
    onCompleted
}: api.InfoListVariables & api.Complete) =>
    useQuery(info, {
        variables: {
            progrmBeginDate,
            postAdres,
            progrmTitle,
            pageNumber,
            teenPossible,
            adultPossible,
            groupPossible
        },
        onCompleted: (data: any) => onCompleted(data)
    });
