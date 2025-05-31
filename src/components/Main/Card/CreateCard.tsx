import React, {useEffect, useState, useLayoutEffect, useRef, Dispatch, SetStateAction} from 'react';
import { TCard, TResponse } from '../../../utils/types';
import CardInput from './CardInput';
import CardButton from './CardButton';
import { craeteCard } from '../../../utils/api';
import { useCard } from '../../../hooks/useCard';
import "./CreateCard.css"

const CreateCard:React.FC<{setShowModal: Dispatch<SetStateAction<boolean>>}> = ({setShowModal}) => {

    const initialCard:TCard = {name: "",
    sex: "",
    age: "",
    bodytype: "",
    personality: "",
    profession: "",
    health: "",
    hobby: "",
    phobia: "",
    largeInventory: "",
    backpack: "",
    additionalInformation: "",
    specialFeature: "",}

    const {card, updateField} = useCard(initialCard)
    const [loading, setLoading] = useState(false)
    const [response, setResponse] = useState<TResponse>()

    const handlSubmit = async () =>
    {
        setLoading(true)
        try{
            console.log(card)
            setResponse(await craeteCard(card.name))
            setShowModal(false)
        }
        catch (e)
        {
            console.log(e)
        }
        setLoading(false)
    }

    return (
        <div className="createCard">
            <h1 className="createCard__heading">Кто ты есть?</h1>
            <CardInput field={"name"} value={card.name} updateField={updateField}></CardInput>
            <CardButton loading={loading} onCLick={handlSubmit}></CardButton>
        </div>
    );
}

export default CreateCard;
