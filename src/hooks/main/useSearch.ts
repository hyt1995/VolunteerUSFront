import { useState } from 'react';
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

    const onSelectCity = (data: string) => {
        setSelect({ ...select, detail: korea[data] });
        setForm({ ...form, city: data });
    };

    const onSelectDetail = (data: string) => {
        setForm({ ...form, detail: data });
    };
    console.log(select);
    return { form, select, onSelectCity, onSelectDetail };
};

type selectType = {
    city: string[];
    detail: string[];
};
export default useSearch;
