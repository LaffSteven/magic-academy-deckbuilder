import React from 'react';
import axios from 'axios';
import {useState, useEffect} from 'react';

const CardInfo = (props) => {

  const [deckData, setDeckData] = useState(props.deckData)
    const [cardData, setCardData] = useState(props.cardData)

    const renderCardData = () => {
        return (
                <div id="card-info-body">
                    <p>Mana Cost: {cardData.mana_cost}</p>
                    <p>Set Name: {cardData.set_name}</p>
                    <button onClick={(event) => {addDeckCard(deckData)}}> Add Card {cardData.name}</button>
                </div>
        )
    }

    //change to post for decks
    const addDeckCard = (deckData) => {
      console.log(deckData._id);
        // axios.delete(`https://magic-academy-api.herokuapp.com/cards/${_id}`).then(renderCards())
        axios.put(`http://localhost:3000/decks/${deckData._id}`, {
            cardList: [
                {
                    card_id: `${cardData._id}`,
                    card_name: `${cardData.name}`,
                    quantity: 5
                }
            ]
        })
    }

    return (
        <div id="card-info-overlay">
            <div id="card-info-container">
                <div id="card-info-header">
                    <h3>{cardData.name}</h3>
                </div>
                {renderCardData()}
            </div>
        </div>
    )
}

export default CardInfo
