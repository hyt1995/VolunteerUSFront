import { useEffect, ReactElement } from 'react';
import useSetUser from '../hooks/user/useSetUser';
import { useTokenQuery } from '../lib/query/auth';

type props = {
    children: ReactElement;
};

const AuthCheck = ({ children }: props) => {
    const { userLogin } = useSetUser();
    const [login] = useTokenQuery();
    const onCompleted = (data: any) => {
        console.log(data);
    };

    useEffect(() => {
        const user = localStorage.getItem('auth');
        if (user) {
            const { token } = JSON.parse(user);
            login({
                variables: {
                    token: token
                },
                onCompleted
            });
        }
    }, []);

    return children;
};

export default AuthCheck;
