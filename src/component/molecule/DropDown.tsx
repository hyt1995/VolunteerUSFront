import { ChangeEvent } from 'react';
import { Select } from '../atoms';

type propsType = {
    lg?: boolean;
    options: string[];
    onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
};

const DropDown = ({ options, onChange, lg }: propsType) => {
    return (
        <Select onChange={onChange} lg={lg}>
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
