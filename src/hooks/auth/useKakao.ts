import { useEffect } from 'react';
import useSetUser from 'hooks/user/useSetUser';
import { useRecoilState } from 'recoil';
import { registerAtom } from 'store/auth';
import { useKakaoMutation } from 'lib/query/auth';
import { useRouter } from 'next/router';

const useKakao = () => {
    const [register, setRegister] = useRecoilState(registerAtom);
    const { userLogin } = useSetUser();
    const router = useRouter();
    const { code }: any = router.query;

    const onComplete = (body: any) => {
        const { address, birthday, gender, id, name, phone, token } = body.kakaoUserInfoLogin;
        console.log(body.kakaoUserInfoLogin);

        // 유저 정보가 없을 때 추가 정보 입력
        if ([address, birthday, gender, phone].includes('')) {
            setRegister({
                ...register,
                id: id,
                userName: name,
                gender: gender,
                birthday: birthday,
                phone: phone,
                address: address
            });
            router.push('/info');
        } else {
            userLogin({ id, name, jwt: token });
            router.push('/');
        }
    };
    const [login] = useKakaoMutation();

    useEffect(() => {
        console.log(code);
        if (code) {
            login({
                variables: {
                    token: code
                },
                onCompleted: (body: any) => onComplete(body)
            });
        }
    }, [code]);
};

export default useKakao;
