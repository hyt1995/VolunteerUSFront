import AuthTemplate from 'component/template/AuthTemplate';
import InfoForm from 'component/organisms/InfoForm';
import useInfo from 'hooks/auth/useInfo';

const Info = () => {
    const { form, onChange, onSubmit, error } = useInfo();
    return (
        <AuthTemplate>
            <InfoForm form={form} onChange={onChange} onSubmit={onSubmit} error={error} />
        </AuthTemplate>
    );
};

export default Info;
