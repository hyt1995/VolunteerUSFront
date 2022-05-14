import { Button, Input, Textarea, BaseBox, SubTitle, FlexBox } from '../atoms';
import { DropDown } from '../molecule';
import useSearch from '../../hooks/main/useSearch';
import Image from 'next/image';

const RegisterGroup = () => {
    const { form, select, onChange, onSelectCity, onSelectDetail, onSubmit } = useSearch();
    return (
        <>
            <BaseBox>
                <SubTitle>
                    <Image src="/images/icon/location.svg" alt="icon" width={16} height={16} />
                    지역
                </SubTitle>
                <div style={{ margin: '5px 12px 21px' }}>
                    <DropDown options={select.city} onChange={onSelectCity} />
                    <DropDown options={select.detail} onChange={onSelectDetail} />
                    <DropDown options={select.detail} onChange={onSelectDetail} />
                </div>
                <FlexBox>
                    <div style={{ flex: '2' }}>
                        <SubTitle>그룹 이름</SubTitle>
                        <Input
                            name="keyword"
                            value={form.keyword}
                            onChange={onChange}
                            id="title"
                            placeholder="그룹이름을 입력해주세요"
                            style={{ margin: '5px 0', background: '#F5F6F9', border: 'none' }}
                        />
                    </div>
                    <div style={{ flex: '1', marginLeft: '21px' }}>
                        <SubTitle>정원</SubTitle>
                        <Input
                            name="keyword"
                            value={form.keyword}
                            onChange={onChange}
                            id="title"
                            placeholder="50명"
                            style={{ margin: '5px 0', background: '#F5F6F9', border: 'none' }}
                        />
                    </div>
                </FlexBox>
                <div style={{ margin: '21px 0 0' }}>
                    <SubTitle>그룹 소개</SubTitle>
                    <Textarea
                        placeholder="그룹 소개글을 적어주세요 (30자 이내)"
                        style={{ margin: '5px 0', background: '#F5F6F9' }}
                    ></Textarea>
                </div>
                <div style={{ margin: '21px 0 0' }}>
                    <SubTitle>그룹 설명</SubTitle>
                    <Textarea
                        placeholder="봉사 그룹의 목적과 목표를 설명해주세요"
                        style={{ margin: '5px 0', background: '#F5F6F9' }}
                    ></Textarea>
                </div>
            </BaseBox>
            <BaseBox>
                <Button lg fullWidth bgColor="primary" onClick={onSubmit}>
                    봉사 그룹 생성
                </Button>
            </BaseBox>
        </>
    );
};

export default RegisterGroup;
