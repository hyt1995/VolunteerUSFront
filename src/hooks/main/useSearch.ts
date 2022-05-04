import { useState } from 'react';
import useInputs from '../useInputs';
import { korea } from 'utils/city';

const useSearch = () => {
    const { form, setForm, onChange } = useInputs({
        city: '',
        detail: '',
        period: '',
        keyword: '',
        target: '성인'
    });
};

export default useSearch;
