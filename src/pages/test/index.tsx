import Dropdown from 'component/molecule/Dropdown';
import DropdownItem from 'component/molecule/DropdownItem';

const Test = () => {
    const data = ['1', '2', '3'];
    return <Dropdown label="test" items={data}></Dropdown>;
};

export default Test;
