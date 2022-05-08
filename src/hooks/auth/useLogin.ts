import { useState, SyntheticEvent } from 'react';
import useInputs from '../useInputs';
import useSetUser from 'hooks/user/useSetUser';
import { useLoginQuery } from 'lib/query/auth';
import { useRouter } from 'next/router';

const useLogin = () => {
    const { form, onChange } = useInputs({
        email: '',
        password: ''
    });
    const { userLogin } = useSetUser();
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    const onComplete = (body: any) => {
        const { login } = body;

        if (login === '아이디가 없습니다.') {
            setError('로그인 싪패');
        } else {
            userLogin({ id: 'test', name: 'test', jwt: login });
            router.push('/search');
        }
    };

    const [login] = useLoginQuery();

    const onSubmit = (e: SyntheticEvent) => {
        const { email, password }: formType = form;

        if ([email, password].includes('')) {
            setError('빈 칸을 입력해주세요');
            return;
        }

        e.preventDefault();

        login({ variables: { id: email, password }, onCompleted: (body: any) => onComplete(body) });
    };

    return { form, onChange, error, onSubmit };
};

type formType = {
    email: string;
    password: string;
};

export default useLogin;
