import useInputs from '../useInputs';
import { SyntheticEvent, useState } from 'react';

const useRegister = () => {
    const { form, onChange } = useInputs({
        email: '',
        password: '',
        confirmPassword: ''
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

export default useRegister;
