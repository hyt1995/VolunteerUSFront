import { useState, ChangeEvent } from 'react';
import useInputs from '../useInputs';
import { korea } from 'utils/city';

const useSearch = () => {
    const { form, setForm, onChange } = useInputs({
        city: '서울특별시',
        detail: '',
        period: '',
        keyword: '',
        target: '성인'
    });
    const [select, setSelect] = useState<selectType>({
        city: Object.keys(korea),
        detail: korea['서울특별시']
    });

    const onSelectCity = (e: ChangeEvent<HTMLSelectElement>) => {
        console.log(e.target.value);
        setSelect({ ...select, detail: korea[e.target.value] });
        setForm({ ...form, city: e.target.value });
    };

    const onSelectDetail = (e: ChangeEvent<HTMLSelectElement>) => {
        setForm({ ...form, detail: e.target.value });
    };
    return { form, select, onSelectCity, onSelectDetail };
};

type selectType = {
    city: string[];
    detail: string[];
};
export default useSearch;
