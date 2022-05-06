import { ChangeEvent, useCallback } from 'react';
import { useRecoilState, useResetRecoilState } from 'recoil';

const useInput = (initialForm: any) => {
    const [form, setForm] = useRecoilState<typeof initialForm>(initialForm);
    const reset = useResetRecoilState(initialForm);

    const onChange = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => {
            const { name, value } = e.target;
            // @ts-ignore
            setForm({ ...form, [name]: value });
        },
        [form, setForm]
    );

    return { form, setForm, onChange, reset };
};

export default useInput;
