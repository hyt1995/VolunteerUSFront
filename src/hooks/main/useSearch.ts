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
};

type selectType = {
    city: string[];
    detail: string[];
};
export default useSearch;
