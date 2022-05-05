import { AuthFormBlock, Button, Input, Error } from '../atoms';

const InfoForm = ({ form, onChange, onSubmit, error, onClick, onChangeBirthDay }: any) => (
    <AuthFormBlock>
        <h2 className="title">
            봉사자님의
            <br /> 정보를 알려주세요!
        </h2>
        <p className="subtitle" style={{ margin: '21px 0 62px' }}>
            개인정보는 ~~용도로만 사용돼요.
        </p>

        <div className="input-box">
            <Input name="userName" type="text" onChange={onChange} value={form.userName} lg />
            <label htmlFor="name">이름</label>
        </div>

        <div className="input-box">
            <Input name="address" type="text" onChange={onChange} value={form.address} onClick={onClick} lg />
            <label htmlFor="address">주소</label>
        </div>

        <div className="input-box">
            <Input name="birthday" type="text" onChange={onChangeBirthDay} value={form.birthday} lg />
            <label htmlFor="birthday">생년월일</label>
        </div>

        <div className="input-box">
            <Input name="gender" type="text" onChange={onChange} value={form.gender} lg />
            <label htmlFor="gender">성별</label>
        </div>

        <Button fullWidth lg bgColor={'primary'} onClick={onSubmit} style={{ marginTop: '49px' }}>
            시작하기
        </Button>
    </AuthFormBlock>
);

export default InfoForm;
