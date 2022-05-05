import { useState, useCallback, MouseEvent } from 'react';
import { DropdownContainer, DropdownBody, DropdownSelect, DropdownMenu, DropdownItemContainer } from '../atoms/Dropdown';
import MenuItem from 'component/atoms/MenuItem';

type propsType = {
    label: string;
    items: string[];
    onChange?: (e: string) => void;
};
const Dropdown = ({ label, items, onChange }: propsType) => {
    const [active, setActive] = useState<boolean>(false);
    const [item, setItem] = useState(null);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const onActiveToggle = useCallback(() => {
        setActive((prev) => !prev);
    }, []);

    const onSelectItem = useCallback((e: any) => {
        setItem(e.target.innerText);

        setActive((prev) => !prev);
    }, []);

    return (
        <DropdownContainer>
            <DropdownBody onClick={onActiveToggle}>
                {item ? (
                    <MenuItem>{item}</MenuItem>
                ) : (
                    <>
                        <DropdownSelect>{label}</DropdownSelect>
                    </>
                )}
            </DropdownBody>
            <DropdownMenu active={active}>
                {items.map((i: any) => (
                    <DropdownItemContainer
                        id="item"
                        key={i}
                        onClick={(e) => {
                            onSelectItem(e);
                            onChange?.(i);
                        }}
                    >
                        <MenuItem id="item_name">{i}</MenuItem>
                    </DropdownItemContainer>
                ))}
            </DropdownMenu>
        </DropdownContainer>
    );
};

export default Dropdown;
