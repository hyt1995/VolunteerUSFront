import { AuthFormBlock, Button, Input, Error } from '../atoms';
import { DropDown } from '../molecule';
import { ChangeEvent, SyntheticEvent } from 'react';

type propsType = {
    form: {
        id: string;
        password: string;
        confirmPassword: string;
        userName: string;
        gender: boolean;
        birthday: string;
        phone: string;
        address: string;
    };
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    onSubmit: (e: SyntheticEvent) => void;
    error: string | null;
    onClick: () => void;
    onChangeBirthDay: (e: ChangeEvent<HTMLInputElement>) => void;
    onChangePhoneNumber: (e: ChangeEvent<HTMLInputElement>) => void;
    onChangeGender: (e: ChangeEvent<HTMLSelectElement>) => void;
};

const InfoForm = ({ form, onChange, onSubmit, error, onClick, onChangeBirthDay, onChangePhoneNumber, onChangeGender }: propsType) => (
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
            <Input name="address" type="text" onChange={onChange} value={form.address} onClick={onClick} onFocus={onClick} lg />
            <label htmlFor="address">주소</label>
        </div>

        <div className="input-box">
            <Input name="birthday" type="text" onChange={onChangeBirthDay} value={form.birthday} lg />
            <label htmlFor="birthday">생년월일</label>
        </div>

        <div className="input-box">
            <Input name="phone" type="text" onChange={onChangePhoneNumber} value={form.phone} lg />
            <label htmlFor="phone">핸드폰 번호</label>
        </div>

        <div className="input-box">
            <DropDown options={['남성', '여성']} onChange={onChangeGender} lg />
            <label htmlFor="gender">성별</label>
        </div>

        <Button fullWidth lg bgColor={'primary'} onClick={onSubmit} style={{ marginTop: '49px' }}>
            시작하기
        </Button>
    </AuthFormBlock>
);

export default InfoForm;
