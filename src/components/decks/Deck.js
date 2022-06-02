import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';
import DeckInfo from './DeckInfo.js'


const Deck = (props) => {


    const [deck, setDeck] = useState(props.deck);

    return (
        <div>
          <p>{deck.name}</p>

          <DeckInfo deckData={deck}/>
        </div>
    )
}

export default Deck
