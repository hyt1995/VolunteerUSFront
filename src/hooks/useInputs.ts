import { ChangeEvent, useCallback, useState } from 'react';

const useInput = (initialForm: any) => {
    const [form, setForm] = useState<typeof initialForm>(initialForm);

    const onChange = useCallback(
        (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
            const { name, value } = e.target;
            // @ts-ignore
            setForm({ ...form, [name]: value });
        },
        [form, setForm]
    );

    const reset = useCallback(() => {
        setForm(initialForm);
    }, [initialForm]);

    return { form, setForm, onChange, reset };
};

export default useInput;
