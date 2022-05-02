import { AuthFormBlock, Button, Input, Error } from '../atoms';
import Link from 'next/link';
import { ChangeEvent, SyntheticEvent } from 'react';
// import Eye from './images/icon/Eye.svg';

type propsType = {
    form: {
        email: string;
        password: string;
    };
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    onSubmit: (e: SyntheticEvent) => void;
    error: string | null;
};

const LoginForm = ({ form, onChange, onSubmit, error }: propsType) => {
    const KAKAO_URL = process.env.NEXT_PUBLIC_KAKAO_AUTH_URL;
    return (
        <AuthFormBlock>
            <h1>
                <img src="" alt="logo" />
            </h1>

            <div className="input-box">
                <Input name="email" placeholder="ID" type="email" onChange={onChange} value={form.email} />
                <label htmlFor="userId">아이디</label>
            </div>

            <div className="input-box">
                <Input name="password" placeholder="password" type="password" onChange={onChange} value={form.password} />
                <label htmlFor="userPw">비밀번호</label>
                <button type="button" className="btn-show">
                    <img src="src/images/icon/Eye.svg" alt="icon" />
                </button>
            </div>

            <div className="auth-another">
                <Button type="button" className="text" fontSize="14px">
                    <Link href="/register">회원가입</Link>
                </Button>
                <Button type="button" className="text" fontSize="14px" styled={{ fontWeight: '400' }}>
                    비밀번호 찾기
                </Button>
            </div>
            {error && <Error>{error}</Error>}
            <Button fullWidth bgColor={'primary'} onClick={onSubmit}>
                로그인
            </Button>
            <hr className="or" />
            <a href={KAKAO_URL}>
                <Button className="icon" fullWidth bgColor={'warning'} color={'default'}>
                    <img src="" alt="icon" /> 카톡 아이디로 로그인
                </Button>
            </a>
        </AuthFormBlock>
    );
};

export default LoginForm;
