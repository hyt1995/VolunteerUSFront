import AuthTemplate from 'component/template/AuthTemplate';
import UserInfoForm from 'component/organisms/auth/UserInfoForm';
import useRegister from 'hooks/auth/useRegister';
import PostCode from 'component/organisms/auth/PostCode';

const UserInfo = () => {
    const { form, onChange, onSubmit, error, visible, handleComplete, handleVisible } = useRegister();
    return (
        <>
            <AuthTemplate>
                <UserInfoForm form={form} onChange={onChange} onSubmit={onSubmit} error={error} onClick={handleVisible} />
            </AuthTemplate>
            {visible ? <PostCode onComplete={handleComplete} visible={visible} /> : null}
        </>
    );
};

export default UserInfo;
