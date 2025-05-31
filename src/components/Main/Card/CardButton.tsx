import React from 'react';
import { ICardButtonProps } from '../../../utils/types';
import './CardButton.css'

const CardButton: React.FC<ICardButtonProps> = ({loading, onCLick}) => {

     return (
        <button 
            className="card-button"
            type="submit"
            onClick={onCLick} 
            disabled={loading}
        >{loading ? 'Отправка...' : 'Отправить'}</button>
    );
}

export default CardButton;