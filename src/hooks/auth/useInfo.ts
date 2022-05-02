import useInputs from '../useInputs';
import { SyntheticEvent, useState } from 'react';

const useInfo = () => {
    const { form, setForm, onChange } = useInputs({
        name: '',
        address: '',
        age: '',
        gender: ''
    });
    const [visible, setVisible] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);

    const onSubmit = (e: SyntheticEvent) => {
        const { email, password }: formType = form;
        e.preventDefault();
        setError(false);

        console.log(email, password);
    };

    const onClick = () => {
        setVisible(true);
    };

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

        setForm({ ...form, address: fullAddress });
        setVisible(false);
    };

    return { form, onChange, error, onSubmit, onClick, visible, handleComplete };
};

type formType = {
    email: string;
    password: string;
};

export default useInfo;
