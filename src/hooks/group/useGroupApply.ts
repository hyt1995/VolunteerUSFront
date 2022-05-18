import { SyntheticEvent } from 'react';
import useInputs from '../useInputs';
import { useGroupApplyMutation } from 'lib/query/group';
import useRecoil from '../useRecoil';
import { userAtom } from 'store/user';

const useGroupApply = () => {
    const [user] = useRecoil(userAtom);
    const { form, onChange, reset } = useInputs({
        groupName: '',
        limit: 0,
        groupGreeting: '',
        groupExplane: ''
    });
    const [create, { error: queryError }] = useGroupApplyMutation();

    const onSubmit = (e: SyntheticEvent) => {
        const { groupName, limit, groupGreeting, groupExplane } = form;
        e.preventDefault();

        create({ variables: { groupName, limit, groupGreeting, groupExplane, repreName: user.name } });
        reset();
    };
    return { form, onChange, onSubmit };
};

type CreateGroupType = {
    groupName: string;
    limit: string;
    groupGreeting: string;
    groupExplane: string;
};

export default useGroupApply;
