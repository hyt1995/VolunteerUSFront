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
        target: '성인'
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

    console.log(form);
    return { form, select, onSelectCity, onSelectDetail, onChangeDate };
};

type selectType = {
    city: string[];
    detail: string[];
};
export default useSearch;
