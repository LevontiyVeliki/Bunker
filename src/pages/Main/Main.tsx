import React, {useEffect, useState, useLayoutEffect, useRef} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Card from '../../components/Main/Card/Card';
import CreateCard from '../../components/Main/Card/CreateCard';
import { TCard } from '../../utils/types';
import { useCard } from '../../hooks/useCard';
import "./Main.css"
import { getCards } from '../../utils/api';

function Main() {

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
    const [showModal, setShowModal] = useState<boolean>(false)
    const [cards, setCards] = useState<TCard[]>()

    useEffect(
        () => {
            const fetchRes = async() => {
                try{
                    setCards(await getCards())
                    console.log(cards)
                }
                catch(e)
                {
                    console.log(e)
                }
            }

            fetchRes()
        }, []
    )

    return (
        <div className="main">
            {showModal && (
                <CreateCard setShowModal={setShowModal}></CreateCard>
            )}
            <div className="mainblock">
                <div className="mainblock__header">
                    <h1 className="header__heading">
                        Генератор Персонажей Бункер
                    </h1>
                    <Link className="header__link" to='/login'>Авторизация</Link>
                </div>
                <div className="cardList">
                    {cards?.map((card: TCard) => (
                        <Card 
                            key={cards.length} 
                            card={card}
                        ></Card>
                     ))}
                </div>
                <div className="footer">
                    <button className="footer__createCard" onClick={(e) => {setShowModal(true)}}>
                        Создать персонажа
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Main;
