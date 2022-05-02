import AuthTemplate from 'component/template/AuthTemplate';
import InfoForm from 'component/organisms/InfoForm';
import useInfo from 'hooks/auth/useInfo';
import PostCode from 'component/organisms/PostCode';

const Info = () => {
    const { form, onChange, onSubmit, error, onClick, visible, handleComplete } = useInfo();
    return (
        <>
            <AuthTemplate>
                <InfoForm form={form} onChange={onChange} onSubmit={onSubmit} error={error} onClick={onClick} />
            </AuthTemplate>
            <PostCode visible={visible} handleComplete={handleComplete} />
        </>
    );
};

export default Info;
