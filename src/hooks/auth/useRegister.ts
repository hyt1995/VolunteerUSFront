import useRecoilInput from '../useRecoilInput';
import { registerAtom } from 'store/auth';
import { SyntheticEvent, useState } from 'react';
import { useConfirmQuery } from 'lib/query/auth';

const useRegister = () => {
    const { form, onChange } = useRecoilInput(registerAtom);
    const [error, setError] = useState<string | null>(null);
    const [confirm, { data, error: queryError }] = useConfirmQuery();

    const onSubmit = (e: SyntheticEvent) => {
        const { id, password }: any = form;
        e.preventDefault();
        if ([id, password].includes('')) {
            setError('빈 칸을 입력해주세');
            return;
        }

        confirm({ variables: { id } });
    };

    return { form, onChange, error, onSubmit };
};

export default useRegister;
