import { useState, SyntheticEvent } from 'react';
import useInputs from '../useInputs';

const useLogin = () => {
    const { form, onChange } = useInputs({
        email: '',
        password: ''
    });
    const [error, setError] = useState<boolean>(false);

    const onSubmit = (e: SyntheticEvent) => {
        const { email, password }: formType = form;
        e.preventDefault();
        setError(false);

        console.log(email, password);
    };

    return { form, onChange, error, onSubmit };
};

type formType = {
    email: string;
    password: string;
};

export default useLogin;
