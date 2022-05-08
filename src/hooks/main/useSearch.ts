import { useState, ChangeEvent, useCallback, SyntheticEvent } from 'react';
import { useRecoilState } from 'recoil';
import useInputs from '../useInputs';
import { korea } from 'utils/city';
import { dateFormatter } from 'utils/date';
import { searchAtom } from 'store/main';

const useSearch = () => {
    const { form, setForm, onChange } = useInputs({
        city: '서울특별시',
        detail: '',
        date: '',
        keyword: '',
        option: {
            teen: false,
            adult: false,
            group: false
        }
    });
    const [select, setSelect] = useState<selectType>({
        city: Object.keys(korea),
        detail: korea['서울특별시']
    });
    const [search, setSearch] = useRecoilState(searchAtom);

    // 시작날짜 선택
    const onChangeDate = useCallback(
        (date: any) => {
            setForm({ ...form, date: dateFormatter(new Date(date)) });
        },
        [form]
    );

    // 광역시, 도 선택
    const onSelectCity = useCallback(
        (e: ChangeEvent<HTMLSelectElement>) => {
            console.log(e.target.value);
            setSelect({ ...select, detail: korea[e.target.value] });
            setForm({ ...form, city: e.target.value });
        },
        [select, form]
    );

    // 구, 시 선택
    const onSelectDetail = useCallback(
        (e: ChangeEvent<HTMLSelectElement>) => {
            setForm({ ...form, detail: e.target.value });
        },
        [form]
    );

    // 옵션 체크
    const handleCheck = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => {
            const value = e.target.value;

            setForm({
                ...form,
                option: {
                    ...form.option,
                    [value]: !form.option[value]
                }
            });
        },
        [form]
    );

    const onSubmit = useCallback(
        (e: SyntheticEvent) => {
            e.preventDefault();
            setSearch(form);
        },
        [form]
    );

    return { form, select, onChange, onSelectCity, onSelectDetail, onChangeDate, handleCheck, onSubmit };
};

type selectType = {
    city: string[];
    detail: string[];
};
export default useSearch;
