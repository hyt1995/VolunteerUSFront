import { useQuery, useMutation } from '@apollo/react-hooks';
import { lookUpGroup, groupApply, userApplyToGroup } from 'lib/gql/group';

export const useLookUpQuery = ({ groupName, userName, onCompleted }: groupType) =>
    useQuery(lookUpGroup, {
        variables: { applyGroupName: groupName, applyUserName: userName }
    });

export const useGroupApplyMutation = ({ groupName, repreName, limit, groupGreeting, groupExplane, onCompleted }: groupApplyType) =>
    useMutation(groupApply, {
        variables: { groupName, repreName, limit, groupGreeting, groupExplane }
    });

export const useUserApplyGroupMutation = ({ groupName, userName, onCompleted }: groupType) =>
    useMutation(userApplyToGroup, {
        variables: { applyGroupName: groupName, applyUserName: userName }
    });

type commonType = {
    onCompleted: (data: any) => void;
};

type groupType = commonType & {
    groupName: string;
    userName: string;
};

type groupApplyType = commonType & {
    groupName: string;
    repreName: string;
    limit: number;
    groupGreeting: string;
    groupExplane: string;
};
