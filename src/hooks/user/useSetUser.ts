import { userAtom } from 'store/user';
import useRecoil from 'hooks/useRecoil';

const useSetUser = () => {
    const [user, setUser, reset] = useRecoil(userAtom);

    // 로그인 처리
    const userLogin = ({ id, name, jwt }: loginType) => {
        localStorage.setItem('auth', JSON.stringify({ token: jwt }));
        setUser({ id: id, name: name, login: true });
    };

    // 로그아웃 처리
    const userLogout = () => {
        localStorage.removeItem('auth');
        reset();
    };

    return { user, userLogin, userLogout };
};

export default useSetUser;

type loginType = {
    id: string;
    name: string;
    jwt: string;
};
