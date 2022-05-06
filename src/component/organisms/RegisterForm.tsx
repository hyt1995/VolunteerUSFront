import { AuthFormBlock, Button, Input, Error } from '../atoms';
import Link from 'next/link';
import { ChangeEvent, SyntheticEvent, useState } from 'react';
import Image from 'next/image';

type propsType = {
    form: {
        id: string;
        password: string;
        confirmPassword: string;
        userName: string;
        gender: boolean;
        birthday: string;
        phone: string;
        address: string;
    };
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    onSubmit: (e: SyntheticEvent) => void;
    error: string | null;
};

const RegisterForm = ({ form, onChange, onSubmit, error }: propsType) => {
    const [visible, setVisible] = useState<boolean>(false);

    const handleVisible = () => {
        setVisible(!visible);
    };
    return (
        <AuthFormBlock>
            <h2 className="title">회원가입</h2>
            <p className="subtitle" style={{ margin: '21px 0 89px' }}>
                ㅇㅇㅇ과 함께 가치를 나눠봐요.
            </p>

            <div className="input-box">
                <Input name="id" type="id" onChange={onChange} value={form.id} lg />
                <label htmlFor="userId">
                    아이디<i>*</i>
                </label>
            </div>

            <div className="input-box">
                <Input name="password" type={visible ? 'text' : 'password'} onChange={onChange} value={form.password} lg />
                <label htmlFor="userPw">
                    비밀번호<i>*</i>
                </label>

                <Button text onClick={handleVisible}>
                    <Image src="/images/icon/Eye.svg" alt="icon" width={24} height={24} />
                </Button>
            </div>

            <div className="input-box">
                <Input name="confirmPassword" type={visible ? 'text' : 'password'} onChange={onChange} value={form.confirmPassword} lg />
                <label htmlFor="userPw">
                    비밀번호 확인<i>*</i>
                </label>

                <Button text onClick={handleVisible}>
                    <Image src="/images/icon/Eye.svg" alt="icon" width={24} height={24} />
                </Button>
            </div>
            {error && <Error>{error}</Error>}
            <Button outline fullWidth lg color={'primary'} onClick={onSubmit} style={{ marginTop: '135px' }}>
                다음
            </Button>

            <div className="auth-another" style={{ justifyContent: 'center' }}>
                <div>
                    이미 계정을 갖고 계신가요?
                    <Button text fontSize="14px" color={'primary'} style={{ paddingLeft: '13px' }}>
                        <Link href="/login">로그인</Link>
                    </Button>
                </div>
            </div>
        </AuthFormBlock>
    );
};

export default RegisterForm;
