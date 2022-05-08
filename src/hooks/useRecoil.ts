import { useRecoilState, useResetRecoilState } from 'recoil';

const useRecoil = (initialForm: any) => {
    const [form, setForm] = useRecoilState<typeof initialForm>(initialForm);
    const reset = useResetRecoilState(initialForm);

    return [form, setForm, reset];
};

export default useRecoil;
