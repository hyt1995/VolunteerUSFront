import SearchForm from 'component/organisms/SearchForm';
import Header from 'component/organisms/BaseHeader';
import useSearch from '../../hooks/main/useSearch';

const Index = () => {
    const { form, select, onSelectCity, onSelectDetail } = useSearch();
    return (
        <>
            <Header />
            <SearchForm form={form} select={select} onChangeCity={onSelectCity} onChangeDetail={onSelectDetail} />
        </>
    );
};

export default Index;
