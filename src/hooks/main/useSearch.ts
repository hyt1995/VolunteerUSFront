import useInputs from '../useInputs';

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
