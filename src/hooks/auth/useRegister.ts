import useRecoilInput from '../useRecoilInput';
import { registerAtom } from 'store/auth';
import { SyntheticEvent, useState, useCallback } from 'react';
import { useConfirmQuery } from 'lib/query/auth';
import { useRouter } from 'next/router';
import { passwordStrength } from 'utils/auth';

const useRegister = () => {
    const { form, onChange } = useRecoilInput(registerAtom);
    const [error, setError] = useState<string | null>(null);
    const [confirm, { data, error: queryError }] = useConfirmQuery();
    const router = useRouter();

    console.log(data);
    const onComplete = useCallback((body: any) => {
        const { confirmUserId } = body;

        if (confirmUserId) {
            router.push('/info');
        } else {
            setError('이미 존재하는 아이디입니다.');
        }
    }, []);

    const onError = () => {
        setError('회원가입 실패');
    };

    const onSubmit = useCallback(
        (e: SyntheticEvent) => {
            const { id, password, confirmPassword }: any = form;
            e.preventDefault();
            if ([id, password, confirmPassword].includes('')) {
                setError('빈 칸을 입력해주세');
                return;
            }

            if (password !== confirmPassword) {
                setError('비밀번호가 다릅니다.');
                return;
            }

            if (!passwordStrength(password)) {
                setError('비밀번호는 6글자 이상 영문자와 숫자 특수문자를 포함시켜주세요.');
            }

            confirm({ variables: { id }, onCompleted: (body: any) => onComplete(body), onError: () => onError() });
        },
        [form]
    );

    return { form, onChange, error, onSubmit };
};

export default useRegister;
