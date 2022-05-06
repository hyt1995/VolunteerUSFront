import { ChangeEvent } from 'react';
import { Select } from '../atoms';

type propsType = {
    options: string[];
    onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
};

const DropDown = ({ options, onChange }: propsType) => {
    return (
        <Select onChange={onChange}>
            {options.map((value: string) => {
                return (
                    <option value={value} key={value}>
                        {value}
                    </option>
                );
            })}
        </Select>
    );
};

export default DropDown;
