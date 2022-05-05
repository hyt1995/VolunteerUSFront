import SearchForm from 'component/organisms/SearchForm';
import Header from 'component/organisms/BaseHeader';
import useSearch from '../../hooks/main/useSearch';

const Index = () => {
    const { form, select, onSelectCity, onSelectDetail, onChangeDate } = useSearch();
    return (
        <>
            <Header />
            <SearchForm
                form={form}
                select={select}
                onChangeCity={onSelectCity}
                onChangeDetail={onSelectDetail}
                onChangeDate={onChangeDate}
            />
        </>
    );
};

export default Index;
