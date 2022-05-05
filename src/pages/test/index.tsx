import Dropdown from 'component/molecule/Dropdown';
import useSearch from 'hooks/main/useSearch';

const Test = () => {
    const { form, select, onSelectCity, onSelectDetail } = useSearch();
    console.log(form);
    return (
        <>
            <Dropdown label="test" items={select.city} onChange={onSelectCity}></Dropdown>
            <Dropdown label="test" items={select.detail} onChange={onSelectDetail} />
        </>
    );
};

export default Test;
