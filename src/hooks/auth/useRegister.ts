import useRecoilInput from '../useRecoilInput';
import { registerAtom } from 'store/auth';
import { SyntheticEvent, useState } from 'react';
import { useConfirmQuery } from 'lib/query/auth';

const useRegister = () => {
    const { form, onChange } = useRecoilInput(registerAtom);
    const [error, setError] = useState<string | null>(null);
    const [confirm, { data, error: queryError }] = useConfirmQuery();

    console.log(data);

    const onSubmit = (e: SyntheticEvent) => {
        const { email, password }: any = form;
        e.preventDefault();
        if ([email, password].includes('')) {
            setError('빈 칸을 입력해주세');
            return;
        }

        confirm({ variables: { id: email } });

        console.log(email, password);
    };

    return { form, onChange, error, onSubmit };
};

export default useRegister;
