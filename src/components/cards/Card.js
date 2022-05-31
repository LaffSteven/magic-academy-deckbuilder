import React from 'react';
import {useState, useEffect} from 'react';
import CardInfo from './CardInfo.js'

const Card = (props) => {

    const [card, setCard] = useState(props.card);
    const [showCardInfo, setShowCardInfo] = useState(false);

    const renderSmallCardImage = () => {
        return(
            <img src={card.image_uris.small} alt={card.name} onClick={(event) => {toggleShowCardInfo()}}/>
        )
    }

    const renderCardInfo = () => {
        return (
            <div>
                <img src={card.image_uris.normal} alt={card.name} />
                <CardInfo cardData={card}/>
                <button onClick={toggleShowCardInfo()}> Hide </button>
            </div>
        )
    }

    const toggleShowCardInfo = () => {
        setShowCardInfo(!showCardInfo);
    }

    return (
        <>
        {!showCardInfo ? renderSmallCardImage() : renderCardInfo()}
        </>

    )
}

export default Card
