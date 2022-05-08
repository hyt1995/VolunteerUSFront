import gql from 'graphql-tag';

export const info = gql`
    query infoListResponse(
        $progrmBeginDate: String
        $postAdres: String
        $progrmTitle: String
        $teenPossible: String
        $adultPossible: String
        $groupPossible: String
        $pageNumber: Int
    ) {
        infoListResponse(
            progrmBeginDate: $progrmBeginDate
            postAdres: $postAdres
            progrmTitle: $progrmTitle
            teenPossible: $teenPossible
            adultPossible: $adultPossible
            groupPossible: $groupPossible
            pageNumber: $pageNumber
        ) {
            progrmTitle
            progrmEndDate
            postAdres
        }
    }
`;
