import React from 'react';
import {useState, useEffect} from 'react';
import CardInfo from './CardInfo.js'
import './css/style.css'
import EditDeck from './EditDeck.js'

const Card = (props) => {

    const [deckData, setDeckData] = useState(props.deckData);
    const [card, setCard] = useState(props.card);
    const [showCardInfo, setShowCardInfo] = useState(false);

    const renderSmallCardImage = () => {
        return(
            <img src={card.image_uris.small} alt={card.name} onClick={(event) => {toggleShowCardInfo()}}/>
        )
    }

    const renderCardInfo = () => {
        return (
            <div className="modal flex-box flex-row">
                <img src={card.image_uris.normal} alt={card.name} />
                <CardInfo cardData={card} deckData={deckData}/>
                <button onClick={(event) => {toggleShowCardInfo()}}> Hide </button>
            </div>
        )
    }

    const toggleShowCardInfo = (event) => {
        console.log(`Setting showCardInfo to ${!showCardInfo}`);
        setShowCardInfo(!showCardInfo);
    }

    return (
        <>
        {!showCardInfo ? renderSmallCardImage() : renderCardInfo()}
        </>

    )
}

export default Card
