import SearchForm from 'component/organisms/SearchForm';
import Header from 'component/organisms/BaseHeader';
import useSearch from '../../hooks/main/useSearch';

const Index = () => {
    const { form, select, onChange, onSelectCity, onSelectDetail, onChangeDate, handleCheck } = useSearch();
    return (
        <>
            <Header />
            <SearchForm
                form={form}
                select={select}
                onChange={onChange}
                onChangeCity={onSelectCity}
                onChangeDetail={onSelectDetail}
                onChangeDate={onChangeDate}
                handleCheck={handleCheck}
            />
        </>
    );
};

export default Index;
