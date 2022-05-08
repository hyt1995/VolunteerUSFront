import { useState, ChangeEvent, useCallback } from 'react';
import useInputs from '../useInputs';
import { korea } from 'utils/city';
import { dateFormatter } from 'utils/date';

const useSearch = () => {
    const { form, setForm, onChange } = useInputs({
        city: '서울특별시',
        detail: '',
        date: '',
        keyword: '',
        target: {
            teen: false,
            adult: false,
            group: false
        }
    });
    const [select, setSelect] = useState<selectType>({
        city: Object.keys(korea),
        detail: korea['서울특별시']
    });

    const onChangeDate = useCallback(
        (date: any) => {
            setForm({ ...form, date: dateFormatter(new Date(date)) });
        },
        [form]
    );

    const onSelectCity = useCallback(
        (e: ChangeEvent<HTMLSelectElement>) => {
            console.log(e.target.value);
            setSelect({ ...select, detail: korea[e.target.value] });
            setForm({ ...form, city: e.target.value });
        },
        [select, form]
    );

    const onSelectDetail = useCallback(
        (e: ChangeEvent<HTMLSelectElement>) => {
            setForm({ ...form, detail: e.target.value });
        },
        [form]
    );

    const handleCheck = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => {
            const value = e.target.value;

            setForm({
                ...form,
                target: {
                    ...form.target,
                    [value]: !form.target[value]
                }
            });
        },
        [form]
    );

    const onSubmit = useCallback(() => {}, []);

    console.log(form);

    return { form, select, onChange, onSelectCity, onSelectDetail, onChangeDate, handleCheck };
};

type selectType = {
    city: string[];
    detail: string[];
};
export default useSearch;
