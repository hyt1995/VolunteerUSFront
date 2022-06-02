import { useQuery, useMutation } from '@apollo/react-hooks';
import { lookUpGroup, groupApply, userApplyToGroup } from 'lib/gql/group';
import * as api from './types';

export const useLookUpQuery = ({ groupName, searchAddress, pageNum, onCompleted }: api.LookUpGroupVariables & api.Complete) =>
    useQuery<api.GetLookUpGroup, api.LookUpGroupVariables>(lookUpGroup, {
        variables: { groupName, searchAddress, pageNum }
    });

export const useGroupApplyMutation = () => useMutation<api.MutationGroupApply, api.GroupApplyVariables>(groupApply);

export const useUserApplyGroupMutation = ({ applyGroupId, onCompleted }: api.UserApplyToGroupVariables & api.Complete) =>
    useMutation<api.MutationUserApplyToGroup, api.UserApplyToGroupVariables>(userApplyToGroup, {
        variables: { applyGroupId }
    });

type commonType = {
    onCompleted: (data: any) => void;
};

type groupType = commonType & {
    groupName: string;
    userName: string;
};
