import { ChangeEvent, SyntheticEvent, useState, useCallback } from 'react';
import useRecoilInput from '../useRecoilInput';
import { registerAtom } from 'store/auth';
import { birthdayFormatter } from 'utils/date';

const useInfo = () => {
    const { form, onChange, setForm } = useRecoilInput(registerAtom);
    const [visible, setVisible] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);

    const onSubmit = (e: SyntheticEvent) => {
        const { email, password }: any = form;
        e.preventDefault();
        console.log(form);

        console.log(email, password);
    };

    const onClick = useCallback(() => {
        setVisible(true);
    }, []);

    const onChangeBirthDay = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => {
            setForm({ ...form, birthday: birthdayFormatter(e.target.value) });
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
