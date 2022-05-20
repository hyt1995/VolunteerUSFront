import { ChangeEvent, SyntheticEvent, useCallback, useState } from 'react';
import useInputs from '../useInputs';
import { useGroupApplyMutation } from 'lib/query/group';
import useRecoil from '../useRecoil';
import { userAtom } from 'store/user';
import { korea } from '../../utils/city';

const useGroupApply = () => {
    const [user] = useRecoil(userAtom);
    console.log(user);
    const { form, onChange, setForm, reset } = useInputs({
        city: '서울특별시',
        detail: '',
        groupName: '',
        limit: 0,
        groupGreeting: '',
        groupExplane: ''
    });
    const [select, setSelect] = useState<selectType>({
        city: Object.keys(korea),
        detail: korea['서울특별시']
    });
    const [create, { error: queryError }] = useGroupApplyMutation();

    console.log(form);
    // 광역시, 도 선택
    const onSelectCity = useCallback(
        (e: ChangeEvent<HTMLSelectElement>) => {
            console.log(e.target.value);
            setSelect({ ...select, detail: korea[e.target.value] });
            setForm({ ...form, city: e.target.value });
        },
        [select, form]
    );

    // 구, 시 선택
    const onSelectDetail = useCallback(
        (e: ChangeEvent<HTMLSelectElement>) => {
            setForm({ ...form, detail: e.target.value });
        },
        [form]
    );

    const onSubmit = (e: SyntheticEvent) => {
        const { groupName, limit, groupGreeting, groupExplane } = form;
        e.preventDefault();

        create({ variables: { groupName, limit: parseInt(limit), groupGreeting, groupExplane, repreName: '이한형' } });
        reset();
    };
    return { form, onChange, select, onSelectCity, onSelectDetail, onSubmit };
};

type CreateGroupType = {
    city: string;
    detail: string;
    groupName: string;
    limit: string;
    groupGreeting: string;
    groupExplane: string;
};

type selectType = {
    city: string[];
    detail: string[];
};

export default useGroupApply;
