import useInputs from '../useInputs';
import { SyntheticEvent, useState } from 'react';

const useRegister = () => {
    const { form, onChange } = useInputs({
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [error, setError] = useState<string | null>(null);

    const onSubmit = (e: SyntheticEvent) => {
        const { email, password }: formType = form;
        e.preventDefault();
        if ([email, password].includes('')) {
            setError('빈 칸을 입력해주세');
            return;
        }

        console.log(email, password);
    };

    return { form, onChange, error, onSubmit };
};

type formType = {
    email: string;
    password: string;
};

export default useRegister;
