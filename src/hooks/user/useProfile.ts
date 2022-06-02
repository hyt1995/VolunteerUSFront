import { useRecoilState } from 'recoil';
import { userAtom } from 'store/user';

const useProfile = () => {
    const [form] = useRecoilState(userAtom);

    return { id: form.id, name: form.name };
};

export default useProfile;
