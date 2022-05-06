import { ChangeEvent, SyntheticEvent, useState, useCallback } from 'react';
import useRecoilInput from '../useRecoilInput';
import { registerAtom } from 'store/auth';
import { birthdayFormatter } from 'utils/date';
import { useRegisterMutation } from 'lib/query/auth';
import { useRouter } from 'next/router';

const useInfo = () => {
    const { form, onChange, setForm } = useRecoilInput(registerAtom);
    const [visible, setVisible] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();
    const [register, { error: queryError }] = useRegisterMutation();

    const onComplete = (body: any) => {
        const { createUser } = body;

        if (createUser) {
            router.push('/search');
        } else {
            setError('회원가입 실패');
        }
    };

    const onError = () => {
        setError('회원가입 실패');
    };

    const onSubmit = (e: SyntheticEvent) => {
        const { id, password, userName, gender, birthday, phone, address }: any = form;
        e.preventDefault();

        register({
            variables: { id, userName, password, gender, birthday: '19950105', phone, address },
            onCompleted: (body: any) => onComplete(body),
            onError: () => onError()
        });
    };

    const onClick = useCallback(() => {
        setVisible(true);
    }, []);

    const onChangeBirthDay = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => {
            const { birthday }: any = form;
            const { value } = e.target;
            if (birthday.length < value.length) {
                setForm({ ...form, birthday: birthdayFormatter(value) });
            } else {
                setForm({ ...form, birthday: value });
            }
        },
        [form]
    );

    const handleComplete = useCallback(
        (data: any) => {
            let fullAddress = data.address;
            let extraAddress = '';

            if (data.addressType === 'R') {
                if (data.bname !== '') {
                    extraAddress += data.bname;
                }
                if (data.buildingName !== '') {
                    extraAddress += extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
                }
                fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
            }

            setForm({ ...form, address: fullAddress });
            setVisible(false);
        },
        [form]
    );

    return { form, onChange, onChangeBirthDay, error, onSubmit, onClick, visible, handleComplete };
};

export default useInfo;
