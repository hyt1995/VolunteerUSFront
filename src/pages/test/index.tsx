import useSearch from 'hooks/main/useSearch';

const Test = () => {
    const { form, select, onSelectCity, onSelectDetail } = useSearch();
    console.log(form);
    return (
        <>
            <p>hi</p>
        </>
    );
};

export default Test;
