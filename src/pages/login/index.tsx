import AuthTemplate from 'component/template/AuthTemplate';
import LoginForm from 'component/organisms/LoginForm';
import useLogin from 'hooks/auth/useLogin';

const Index = () => {
    const { form, error, onChange, onSubmit } = useLogin();
    return (
        <AuthTemplate>
            <LoginForm form={form} onChange={onChange} onSubmit={onSubmit} error={error} />
        </AuthTemplate>
    );
};

export default Index;
