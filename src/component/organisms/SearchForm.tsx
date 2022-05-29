import { Button, Input, BaseBox, BorderBox, ShadowBox, FlexBox, SubTitle, Title } from '../atoms';
import { DatePicker, DropDown, CheckBox } from '../molecule';
import useSearch from '../../hooks/main/useSearch';
import { IconSearch } from 'asset/icon';

const SearchForm = () => {
    const { form, select, onChange, onSelectCity, onSelectDetail, onChangeDate, handleCheck, onSubmit } = useSearch();
    return (
        <BaseBox>
            <Title>
                <IconSearch size={16} style={{ marginRight: '5px' }} />
                봉사 조회하기
            </Title>
            <ShadowBox>
                <BorderBox style={{ border: 'none', borderRadius: '8px 8px 0 0' }}>
                    <FlexBox align="flex-start">
                        <SubTitle>봉사 지역</SubTitle>
                        <FlexBox column>
                            <DropDown options={select.city} onChange={onSelectCity} />
                            <DropDown options={select.detail} onChange={onSelectDetail} />
                            <DropDown options={select.detail} onChange={onSelectDetail} />
                        </FlexBox>
                    </FlexBox>

                    <FlexBox>
                        <SubTitle mt="0">시작 날짜</SubTitle>
                        <FlexBox>
                            <DatePicker onChange={onChangeDate} />
                        </FlexBox>
                    </FlexBox>

                    <FlexBox>
                        <SubTitle mt="0">봉사 제목</SubTitle>
                        <Input
                            name="keyword"
                            value={form.keyword}
                            onChange={onChange}
                            id="title"
                            placeholder="제목 키워드를 입력해주세요"
                        />
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
                <Button lg fullWidth bgColor="primary" style={{ borderRadius: '0 0 8px 8px', border: '2px solid #fff' }} onClick={onSubmit}>
                    검색
                </Button>
            </ShadowBox>
        </BaseBox>
    );
};

export default SearchForm;
