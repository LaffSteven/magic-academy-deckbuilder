import React from 'react';
import {useState, useEffect} from 'react';
import CardInfo from './CardInfo.js'
import './css/style.css'

const Card = (props) => {

    const [card, setCard] = useState(props.card);
    const [showCardInfo, setShowCardInfo] = useState(false);

    const renderSmallCardImage = () => {
        return(
            <img src={card.image_uris.small} alt={card.name} onClick={(event) => {toggleShowCardInfo()}} width="146" height="204"/>
        )
    }

    const renderCardInfo = () => {
        return (
            <div className="modal flex-box flex-row">
                <CardInfo cardData={card} hideCardInfo={() => {setShowCardInfo(false)}}/>
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
