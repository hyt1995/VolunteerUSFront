import { useState, SyntheticEvent } from 'react';
import useInputs from '../useInputs';
import { useLoginQuery } from 'lib/query/auth';
import { passwordStrength } from 'utils/auth';

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

        if (!passwordStrength(password)) {
            setError('비밀번호는 6글자 이상 영문자와 숫자 특수문자를 포함시켜주세요.');
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
