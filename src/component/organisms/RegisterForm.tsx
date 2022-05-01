import { AuthFormBlock, Button, Input, Error } from '../atoms';

const RegisterForm = ({ form, onChange, onSubmit, error }: any) => (
    <AuthFormBlock>
        <h2 className="title">회원가입</h2>
        <p className="subtitle" style={{ margin: '21px 0 89px' }}>
            ㅇㅇㅇ과 함께 가치를 나눠봐요.
        </p>

        <div className="input-box">
            <Input name="email" type="email" onChange={onChange} value={form.email} />
            <label htmlFor="userId">
                아이디<i>*</i>
            </label>
        </div>

        <div className="input-box">
            <Input name="password" type="password" onChange={onChange} value={form.password} />
            <label htmlFor="userPw">
                비밀번호<i>*</i>
            </label>
            <button type="button" className="btn-show">
                <img src="src/images/icon/Eye.svg" alt="icon" />
            </button>
            {error && <Error>{error}</Error>}
        </div>

        <div className="input-box">
            <Input name="password" type="password" onChange={onChange} value={form.password} />
            <label htmlFor="userPw">
                비밀번호 확인<i>*</i>
            </label>
            <button type="button" className="btn-show">
                <img src="src/images/icon/Eye.svg" alt="icon" />
            </button>
            {error && <Error>{error}</Error>}
        </div>

        <Button className="outline" fullWidth bgColor={'primary'} onClick={onSubmit} style={{ marginTop: '135px' }}>
            다음
        </Button>

        <div className="auth-another" style={{ justifyContent: 'center' }}>
            <div>
                이미 계정을 갖고 계신가요?
                <Button className="text" fontSize="14px" color={'primary'} style={{ paddingLeft: '13px' }}>
                    로그인
                </Button>
            </div>
        </div>
    </AuthFormBlock>
);

export default RegisterForm;
