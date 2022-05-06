import { ChangeEvent, SyntheticEvent, useState, useCallback } from 'react';
import useRecoilInput from '../useRecoilInput';
import { registerAtom } from 'store/auth';
import { birthdayFormatter, phoneNumberFormatter, resetFormatter } from 'utils/formatter';
import { useRegisterMutation } from 'lib/query/auth';
import { useRouter } from 'next/router';

const useInfo = () => {
    const { form, onChange, setForm } = useRecoilInput(registerAtom);
    const [visible, setVisible] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();
    const [register, { error: queryError }] = useRegisterMutation();

    // 회원 가입 쿼리 성공시
    const onComplete = (body: any) => {
        const { createUser } = body;

        if (createUser) {
            router.push('/search');
        } else {
            setError('회원가입 실패');
        }
    };

    // 회원 가입 쿼리 싪패 시
    const onError = () => {
        setError('회원가입 실패');
    };

    // 제출
    const onSubmit = (e: SyntheticEvent) => {
        const { id, password, userName, gender, birthday, phone, address }: any = form;
        e.preventDefault();

        register({
            variables: { id, userName, password, gender, birthday: resetFormatter(birthday), phone: resetFormatter(phone), address },
            onCompleted: (body: any) => onComplete(body),
            onError: () => onError()
        });
    };

    // 주소 클릭
    const onClick = useCallback(() => {
        setVisible(true);
    }, []);

    // 생년월일 입력
    const onChangeBirthDay = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => {
            const { birthday } = form;
            const { value } = e.target;
            if (birthday.length < value.length) {
                setForm({ ...form, birthday: birthdayFormatter(value) });
            } else {
                setForm({ ...form, birthday: value });
            }
        },
        [form]
    );

    // 핸드폰 번호 입력
    const onChangePhoneNumber = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => {
            const { phone } = form;
            const { value } = e.target;
            if (phone.length < value.length) {
                setForm({ ...form, phone: phoneNumberFormatter(value) });
            } else {
                setForm({ ...form, phone: value });
            }
        },
        [form]
    );

    // 성별 선택
    const onChangeGender = useCallback(
        (e: ChangeEvent<HTMLSelectElement>) => {
            const { value } = e.target;

            if (value === '남성') {
                setForm({ ...form, gender: true });
            } else {
                setForm({ ...form, gender: false });
            }
        },
        [form]
    );

    // 주소 전처리
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

    return { form, onChange, onChangeBirthDay, onChangeGender, onChangePhoneNumber, error, onSubmit, onClick, visible, handleComplete };
};

export default useInfo;
