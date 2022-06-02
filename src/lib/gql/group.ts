// eslint-disable-next-line import/no-extraneous-dependencies
import gql from 'graphql-tag';

export const lookUpGroup = gql`
    query lookUpGroup($groupName: String, $searchAddress: String, $pageNum: Int) {
        lookUpGroup(groupName: $groupName, searchAddress: $searchAddress, pageNum: $pageNum) {
            groupName
            representName
            limitPeople
            groupGreeting
            groupExplain
            userId
            applyPeopleNumber
        }
    }
`;

export const groupApply = gql`
    mutation groupApply($groupName: String!, $repreName: String!, $limit: Int!, $groupGreeting: String!, $groupExplane: String!) {
        groupApply(groupName: $groupName, repreName: $repreName, limit: $limit, groupGreeting: $groupGreeting, groupExplane: $groupExplane)
    }
`;

export const userApplyToGroup = gql`
    mutation userApplyToGroup($applyGroupId: Int) {
        userApplyToGroup(applyGroupId: $applyGroupId)
    }
`;
