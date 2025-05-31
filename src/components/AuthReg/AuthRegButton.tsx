import React, {useState} from 'react';
import { IAuthRegButtonProps } from '../../utils/types';
import './AuthRegButton.css'

const AuthRegButton: React.FC<IAuthRegButtonProps> = ({loading, onCLick}) => {

    return (
        <button 
            className="reg__button"
            type="submit"
            onClick={onCLick} 
            disabled={loading}
        >{loading ? 'Отправка...' : 'Отправить'}</button>
    );
}

export default AuthRegButton