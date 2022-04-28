import { AuthFooter, AuthFormBlock, ButtonWithMarginTop, Input, Error } from '../atoms';

const LoginForm = ({ form, onChange, onSubmit, error }: any) => (
    <AuthFormBlock>
        <h3>Login</h3>
        <Input name="email" placeholder="ID" type="email" onChange={onChange} value={form.email} />
        <Input name="password" placeholder="password" type="password" onChange={onChange} value={form.password} />
        {error && <Error>{error}</Error>}
        <ButtonWithMarginTop fullWidth cyan onClick={onSubmit} styled={{ marginTop: '1rem' }}>
            Login
        </ButtonWithMarginTop>
        <AuthFooter>
            <p>회원가입</p>
        </AuthFooter>
    </AuthFormBlock>
);

export default LoginForm;
