import gql from 'graphql-tag';

export const info = gql`
    query infoListResponse(
        $progrmBeginDate: String
        $postAdres: String
        $progrmTitle: String
        $teenPossible: String
        $adultPossible: String
        $groupPossible: String
        $pageNumber: int
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
            registNo
            progrmTitle
            progrmBeginDate
            progrmEndDate
            actBeginTm
            actEndTm
            recruitNunber
            srvcClcode
            mnnstNm
            postAdres
            adminName
            email
            progrmExpl
            telNo
            actWkdy
            noticeBegin
            noticeEnd
            teenPossible
            adultPossible
            groupPossible
        }
    }
`;
