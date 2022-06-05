import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';
import EditDeck from './EditDeck.js'


const Deck = (props) => {

    const [deck, setDeck] = useState(props.deck);
    const [cardState, setCardState] = useState("")
    const [toggleEditDeck, setToggleEditDeck] = useState(false)


    return (
        <div>
          <p>{deck.name}</p>
          <p>{deck.cardList.length} Cards in Deck</p>

          <br/>

          <EditDeck deckData={deck} deckDelete={props.deckDelete} currentTab={props.currentTab}/>

        </div>
    )
}

export default Deck

// const cards = () => {
//
//   for(let i = 0; i<deck.cardList.length; i++){
//     card[card.length] = `${deck.cardList[i].card_name} `
//     // card = card + `#${i + 1} ${deck.cardList[i].card_name} ||`
//
//   }
//   return (
//     <>
//     {card.map((singleCard) => {
//         return(
//             <section> {singleCard} <br/> </section>
//         )
//     })}
//
//     </>
//   )
// }

// const handleToggle = () => {
//   setToggle(!toggle)
// }

// <button onClick={(event) => {handleToggle()}}> Deck List </button>
// {toggle ? cards() : null}
