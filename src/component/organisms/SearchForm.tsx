import { Button, Input, BaseBox, BorderBox, FlexBox, SubTitle, Title } from '../atoms';
import { DatePicker, DropDown, CheckBox } from '../molecule';
import useSearch from '../../hooks/main/useSearch';

const SearchForm = () => {
    const { form, select, onChange, onSelectCity, onSelectDetail, onChangeDate, handleCheck, onSubmit } = useSearch();
    return (
        <BaseBox>
            <Title>봉사 조회하기</Title>
            <BorderBox>
                <FlexBox>
                    <SubTitle>봉사 지역</SubTitle>
                    <FlexBox column>
                        <DropDown options={select.city} onChange={onSelectCity} />
                        <DropDown options={select.detail} onChange={onSelectDetail} />
                        <DropDown options={select.detail} onChange={onSelectDetail} />
                    </FlexBox>
                </FlexBox>

                <FlexBox>
                    <SubTitle>시작 날짜</SubTitle>
                    <FlexBox>
                        <DatePicker onChange={onChangeDate} />
                    </FlexBox>
                </FlexBox>

                <FlexBox>
                    <SubTitle>봉사 제목</SubTitle>
                    <Input name="keyword" value={form.keyword} onChange={onChange} id="title" placeholder="제목 키워드를 입력해주세요" />
                </FlexBox>

                <FlexBox>
                    <SubTitle style={{ marginTop: '3px' }}>모집 대상</SubTitle>
                    <FlexBox style={{ justifyContent: 'space-between' }}>
                        <CheckBox id="group-1" name="성인" value="adult" onChange={handleCheck} />
                        <CheckBox id="group-2" name="청소년" value="teen" onChange={handleCheck} />
                        <CheckBox id="group-3" name="그룹" value="group" onChange={handleCheck} />
                    </FlexBox>
                </FlexBox>
            </BorderBox>
            <Button lg fullWidth bgColor="primary" style={{ borderRadius: 0 }} onClick={onSubmit}>
                검색
            </Button>
        </BaseBox>
    );
};

export default SearchForm;
