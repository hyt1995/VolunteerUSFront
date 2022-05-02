import AuthTemplate from 'component/template/AuthTemplate';
import RegisterForm from 'component/organisms/RegisterForm';
import useRegister from 'hooks/auth/useRegister';

const Index = () => {
    const { form, onChange, onSubmit, error } = useRegister();
    return (
        <AuthTemplate>
            <RegisterForm form={form} onChange={onChange} onSubmit={onSubmit} error={error} />
        </AuthTemplate>
    );
};

export default Index;
