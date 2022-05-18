import { useQuery, useMutation } from '@apollo/react-hooks';
import { lookUpGroup, groupApply, userApplyToGroup } from 'lib/gql/group';

export const useLookUpQuery = ({ groupName, userName, onCompleted }: groupType) =>
    useQuery(lookUpGroup, {
        variables: { applyGroupName: groupName, applyUserName: userName }
    });

export const useGroupApplyMutation = () => useMutation(groupApply);

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
