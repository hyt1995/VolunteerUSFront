import { useState, SyntheticEvent } from 'react';
import useInputs from '../useInputs';
import { useLoginQuery } from 'lib/query/auth';

const useLogin = () => {
    const { form, onChange } = useInputs({
        email: '',
        password: ''
    });
    const [error, setError] = useState<string | null>(null);

    const [login, { data, error: queryError }] = useLoginQuery();

    const onSubmit = (e: SyntheticEvent) => {
        const { email, password }: formType = form;

        if ([email, password].includes('')) {
            setError('빈 칸을 입력해주세요');
            return;
        }
        e.preventDefault();

        login({ variables: { id: email, password } });
    };

    return { form, onChange, error, onSubmit };
};

type formType = {
    email: string;
    password: string;
};

export default useLogin;
