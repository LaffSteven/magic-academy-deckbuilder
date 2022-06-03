import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';
import DeckInfo from './DeckInfo.js'


const Deck = (props) => {


    const [deck, setDeck] = useState(props.deck);
    let card = ``

    const cards = () => {

      for(let i = 0; i<deck.cardList.length; i++){
        card = card + `#${i + 1} ${deck.cardList[i].card_name} ||`

      }
      return(<p>|| {card}</p>)

    }


    return (
        <div>
          <p>{deck.name}</p>
          <p>{deck.cardList.length}</p>
          <p>{cards()}</p>



          <DeckInfo deckData={deck}/>
        </div>
    )
}

export default Deck
