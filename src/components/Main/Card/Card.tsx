import React, {useEffect, useState, useLayoutEffect, useRef} from 'react';
import { TCard } from '../../../utils/types';
import "./Card.css"

const Card:React.FC<{card: TCard}> = ({card}) => {

    return (
        <div className="card">
            <div className="card__text">{card.name}</div>
            <div className="card__text">{card.sex}</div>
            <div className="card__text">{card.age}</div>
            <div className="card__text">{card.bodytype}</div>
            <div className="card__text">{card.personality}</div>
            <div className="card__text">{card.profession}</div>
            <div className="card__text">{card.health}</div>
            <div className="card__text">{card.hobby}</div>
            <div className="card__text">{card.phobia}</div>
            <div className="card__text">{card.largeInventory}</div>
            <div className="card__text">{card.backpack}</div>
            <div className="card__text">{card.additionalInformation}</div>
            <div className="card__text">{card.specialFeature}</div>
        </div>
    );
}

export default Card;
