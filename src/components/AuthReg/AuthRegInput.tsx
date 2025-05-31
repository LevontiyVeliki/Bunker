import React, {useState} from 'react';
import { IAuthRegInputProps } from '../../utils/types';
import './AuthRegInput.css'

const AuthRegInput: React.FC<IAuthRegInputProps> = ({field, placeholder, value, updateField}) => {

    const handlChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    {
        updateField(field, e.target.value)
    }

    return (
        <div className="authreginput">
            <input 
                className="authreginput__input"
                placeholder={placeholder}
                name={field}
                value={value}
                onChange={handlChange}
                type={field == "password" ? "password": 'text'}
            />
            <div className={"authreginput__message"}></div>
        </div>
    );
}

export default AuthRegInput;