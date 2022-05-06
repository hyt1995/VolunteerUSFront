import { ChangeEvent } from 'react';
import { CheckBox as Check } from '../atoms';

type propsType = {
    id: string;
    name: string;
    onChange: (e: ChangeEvent) => void;
};

const CheckBox = ({ id, name, onChange }: propsType) => {
    return (
        <Check>
            <input id={id} type="checkbox" name={name} value={name} onChange={onChange} />
            <label htmlFor={id}>
                <span>{name}</span>
            </label>
        </Check>
    );
};

export default CheckBox;
