import { AuthFooter, AuthFormBlock, ButtonWithMarginTop, Input, Error } from '../../atoms';
import Link from 'next/link';

const UserInfoForm = ({ form, onChange, onClick, onSubmit, error }: any) => {
    const KAKAO_AUTH_URL = process.env.NEXT_PUBLIC_KAKAO_AUTH_URL;

    console.log(KAKAO_AUTH_URL);
    return (
        <AuthFormBlock>
            <h3>Login</h3>
            <Input name="email" placeholder="ID" type="email" onChange={onChange} value={form.email} />
            <Input name="password" placeholder="Password" type="password" onChange={onChange} value={form.password} />
            <Input name="address" placeholder="주소" type="주소" onClick={onClick} value={form.address} />
            <Input
                name="confirmPassword"
                placeholder="Confirm Password"
                type="confirmPassword"
                onChange={onChange}
                value={form.confirmPassword}
            />
            {error && <Error>{error}</Error>}
            <a href={KAKAO_AUTH_URL}>KAKAO</a>
            <ButtonWithMarginTop fullWidth cyan onClick={onSubmit} styled={{ marginTop: '1rem' }}>
                Login
            </ButtonWithMarginTop>
            <AuthFooter>
                <Link href="/auth/login">회원가입</Link>
            </AuthFooter>
        </AuthFormBlock>
    );
};

export default UserInfoForm;
