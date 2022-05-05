import { AuthFormBlock, Button, Input, Error } from '../atoms';
import Link from 'next/link';
import { ChangeEvent, SyntheticEvent } from 'react';
import Image from 'next/image';

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
                <Input type="email" lg name="email" placeholder="ID" onChange={onChange} value={form.email} />
                <label htmlFor="userId">아이디</label>
            </div>

            <div className="input-box">
                <Input type="password" lg name="password" placeholder="password" onChange={onChange} value={form.password} />

                <label htmlFor="userPw">비밀번호</label>

                <Button text>
                    <Image src="/images/icon/Eye.svg" alt="icon" width={24} height={24} />
                </Button>
            </div>

            <div className="auth-another">
                <Button text fontSize="14px">
                    <Link href="/register">회원가입</Link>
                </Button>

                <Button text fontSize="14px" style={{ fontWeight: '400' }}>
                    비밀번호 찾기
                </Button>
            </div>

            {error && <Error>{error}</Error>}

            <Button fullWidth lg bgColor={'primary'} onClick={onSubmit}>
                로그인
            </Button>

            <hr className="or" />

            <a href={KAKAO_URL}>
                <Button className="icon" fullWidth lg bgColor={'warning'} color={'default'}>
                    <img src="" alt="icon" /> 카톡 아이디로 로그인
                </Button>
            </a>
        </AuthFormBlock>
    );
};

export default LoginForm;
