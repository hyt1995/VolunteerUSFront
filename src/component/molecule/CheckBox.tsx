import { ChangeEvent } from 'react';
import { CheckBox as Check } from '../atoms';

type propsType = {
    id: string;
    name: string;
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const CheckBox = ({ id, name, value, onChange }: propsType) => {
    return (
        <Check>
            <input id={id} type="checkbox" name={name} value={value} onChange={onChange} />
            <label htmlFor={id}>
                <span>{name}</span>
            </label>
        </Check>
    );
};

export default CheckBox;
