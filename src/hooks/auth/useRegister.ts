import useInputs from '../useInputs';
import { SyntheticEvent, useState } from 'react';

const useRegister = () => {
    const { form, onChange } = useInputs({
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [visible, setVisible] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);

    const onSubmit = (e: SyntheticEvent) => {
        const { email, password }: formType = form;
        e.preventDefault();
        setError(false);

        console.log(email, password);
    };

    // Daum 주소 API
    const handleComplete = (data: any) => {
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

        console.log(fullAddress); // e.g. '서울 성동구 왕십리로2길 20 (성수동1가)'
        setVisible(false);
    };

    const handleVisible = (data: any) => {
        setVisible(true);
    };

    return { form, onChange, error, onSubmit, handleComplete, handleVisible, visible };
};

type formType = {
    email: string;
    password: string;
};

export default useRegister;
