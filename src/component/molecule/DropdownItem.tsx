import { DropdownItemContainer } from '../atoms/Dropdown';
import MenuItem from '../atoms/MenuItem';

const DropdownItem = ({ value }: any) => {
    return (
        <DropdownItemContainer>
            <MenuItem>{value}</MenuItem>
        </DropdownItemContainer>
    );
};

export default DropdownItem;
