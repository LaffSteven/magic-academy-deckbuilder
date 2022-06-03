import React from 'react';
import axios from 'axios';
import {useState, useEffect} from 'react';

const CardInfo = (props) => {

    const [deckData, setDeckData] = useState(props.deckData)
    const [cardData, setCardData] = useState(props.cardData)
    const [cardList, setCardList] = useState([])
    const [cardState, setCardState] = useState("")
    let card = ``

    const renderCardData = () => {
        return (
                <div id="card-info-body">
                    <p>Mana Cost: {cardData.mana_cost}</p>
                    <p>Set Name: {cardData.set_name}</p>
                    <button onClick={(event) => {handleCardList()}}> Add Card {cardData.name}</button>
                    <p>Cards Added: {cardState}</p>
                    <button onClick={(event) => {addDeckCard(deckData)}}>Submit Cards to Deck</button>
                </div>
        )
    }

    const listCards = () => {
      let cardAdd = []
      for(let i = 0; i<cardList.length; i++){
          card = (card + `${cardList[i].card_name}`)

      }
      setCardState(card)
      console.log(card)
    }

    const handleCardList = () => {
      console.log(cardData.name)
      let arr = cardList
      arr[arr.length] = {
        card_id: `${cardData._id}`,
        card_name: `${cardData.name}`,

      }
      console.log(cardList[0].card_name);
      setCardList(arr)
      listCards()

    }


    const addDeckCard = (deckData) => {
      console.log(deckData._id);
        // axios.delete(`https://magic-academy-api.herokuapp.com/cards/${_id}`).then(renderCards())
        axios.put(`http://localhost:3000/decks/${deckData._id}`, {
            cardList: cardList
            // [
            //     {
            //         card_id: `${cardData._id}`,
            //         card_name: `${cardData.name}`,
            //         quantity: 5
            //     }
            // ]
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
