import { useState, SyntheticEvent } from 'react';
import useInputs from '../useInputs';

const useLogin = () => {
    const { form, onChange } = useInputs({
        email: '',
        password: ''
    });
    const [error, setError] = useState<string | null>(null);

    const onSubmit = (e: SyntheticEvent) => {
        const { email, password }: formType = form;

        if ([email, password].includes('')) {
            setError('빈 칸을 입력해주세요');
            return;
        }
        e.preventDefault();

        console.log(email, password);
    };

    return { form, onChange, error, onSubmit };
};

type formType = {
    email: string;
    password: string;
};

export default useLogin;
