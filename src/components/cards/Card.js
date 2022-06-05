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

    // const renderCardInfo = () => {
    //     return (
    //         <div className="modal flex-box flex-row">
    //             <CardInfo cardData={card} origin={props.origin} hideCardInfo={() => {setShowCardInfo(false)}}/>
    //         </div>
    //     )
    // }

    const renderCardInfo = (card) => {
        // console.log(props.origin);
        // console.log(card);
        return (
            <div className="modal flex-box flex-row">
            { props.origin == "deck" ?
                <CardInfo cardData={card} toggleCardInfo={props.toggleCardInfo} origin={props.origin} getNewCard={props.getNewCard} hideCardInfo={() => {setShowCardInfo(false)}}/>
                :
                null
            }
            { props.origin == "cards" ?
                <CardInfo cardData={card} toggleCardInfo={props.toggleCardInfo} origin={props.origin} hideCardInfo={() => {setShowCardInfo(false)}}/>
                :
                null
            }
            </div>

        )
    }

    const toggleShowCardInfo = (event) => {
        console.log(`Setting showCardInfo to ${!showCardInfo}`);
        setShowCardInfo(!showCardInfo);
    }

    // const addCardToDeck = (deckID) => {
    //     setCardList([...cardList, {card_id:card._id, card_name:card.name}])
    // }

    return (
        <>
        {!showCardInfo ? renderSmallCardImage() : renderCardInfo(card)}
        </>

    )
}

export default Card
