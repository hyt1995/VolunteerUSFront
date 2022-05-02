import { AuthFormBlock, Button, Input, Error } from '../atoms';

const InfoForm = ({ form, onChange, onSubmit, error, onClick }: any) => (
    <AuthFormBlock>
        <h2 className="title">
            봉사자님의
            <br /> 정보를 알려주세요!
        </h2>
        <p className="subtitle" style={{ margin: '21px 0 62px' }}>
            개인정보는 ~~용도로만 사용돼요.
        </p>

        <div className="input-box">
            <Input name="emnameail" type="text" onChange={onChange} value={form.email} />
            <label htmlFor="name">이름</label>
        </div>

        <div className="input-box">
            <Input name="address" type="text" onChange={onChange} value={form.address} onClick={onClick} />
            <label htmlFor="address">주소</label>
        </div>

        <div className="input-box">
            <Input name="age" type="text" onChange={onChange} value={form.password} />
            <label htmlFor="age">나이</label>
        </div>

        <div className="input-box">
            <Input name="gender" type="text" onChange={onChange} value={form.password} />
            <label htmlFor="gender">성별</label>
        </div>

        <Button fullWidth bgColor={'primary'} onClick={onSubmit} style={{ marginTop: '49px' }}>
            시작하기
        </Button>
    </AuthFormBlock>
);

export default InfoForm;
