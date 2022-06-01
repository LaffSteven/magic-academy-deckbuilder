import React from 'react';
import {useState, useEffect} from 'react';

const Deck = (props) => {

    const [deck, setDeck] = useState(props.deck);

    return (
        <>
          {deck.name}
        </>
    )
}

export default Deck
