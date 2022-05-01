import { AuthFormBlock, Button, Input, Error } from '../atoms';
// import Eye from './images/icon/Eye.svg';

const LoginForm = ({ form, onChange, onSubmit, error }: any) => (
    <AuthFormBlock>
        <h1>
            <img src="" alt="logo" />
        </h1>

        <div className="input-box">
            <Input name="email" placeholder="ID" type="email" onChange={onChange} value={form.email} />
            <label htmlFor="userId">아이디</label>
        </div>

        <div className="input-box">
            <Input name="password" placeholder="password" type="password" onChange={onChange} value={form.password} />
            <label htmlFor="userPw">비밀번호</label>
            <button type="button" className="btn-show">
                <img src="src/images/icon/Eye.svg" alt="icon" />
            </button>
            {error && <Error>{error}</Error>}
        </div>

        <div className="auth-another">
            <Button type="button" className="text" fontSize="14px">
                회원가입
            </Button>
            <Button type="button" className="text" fontSize="14px" styled={{ fontWeight: '400' }}>
                비밀번호 찾기
            </Button>
        </div>

        <Button fullWidth bgColor={'primary'} onClick={onSubmit}>
            로그인
        </Button>
        <hr className="or" />
        <Button className="icon" fullWidth bgColor={'warning'} color={'default'} onClick={onSubmit}>
            <img src="" alt="icon" /> 카톡 아이디로 로그인
        </Button>
    </AuthFormBlock>
);

export default LoginForm;
