import React from 'react';
import { ICardInputProps } from '../../../utils/types';
import './CardInput.css'

const CardInput: React.FC<ICardInputProps> = ({field, placeholder, value, updateField}) => {

    const handlChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    {
        updateField(field, e.target.value)
    }

    return (
        <div className="card-input">
            <input 
                className="card-input__input"
                placeholder={placeholder}
                name={field}
                value={value}
                onChange={handlChange}
            />
        </div>
    );
}

export default CardInput;