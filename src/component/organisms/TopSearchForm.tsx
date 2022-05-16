import { Button, Input, BaseBox, Title } from '../atoms';
import { DropDown } from '../molecule';
import useSearch from '../../hooks/main/useSearch';

const TopSearchForm = () => {
    const { form, select, onChange, onSelectCity, onSelectDetail, onSubmit } = useSearch();
    return (
        <BaseBox>
            <Title>그룹 검색</Title>
            <div style={{ margin: '0 12px 34px' }}>
                <DropDown options={select.city} onChange={onSelectCity} />
                <DropDown options={select.detail} onChange={onSelectDetail} />
                <DropDown options={select.detail} onChange={onSelectDetail} />
                <Input
                    name="keyword"
                    value={form.keyword}
                    onChange={onChange}
                    id="title"
                    placeholder="제목 키워드를 입력해주세요"
                    style={{ margin: '13px 0' }}
                />
            </div>
            <Button lg fullWidth bgColor="primary" onClick={onSubmit}>
                봉사 그룹 검색
            </Button>
        </BaseBox>
    );
};

export default TopSearchForm;
