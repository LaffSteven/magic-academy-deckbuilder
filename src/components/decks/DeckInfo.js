import React from 'react';
import axios from 'axios';
import {useState, useEffect} from 'react';
import EditDeck from './EditDeck.js'

const DeckInfo = (props) => {

    const [deckData, setDeckData] = useState(props.deckData)
    const [deckName, setDeckName] = useState(props.deckData)








    return (
        <div>
            <button onClick={props.deckDelete}> Delete Deck </button>

            <EditDeck deckData={deckData}/>
        </div>
    )
}

export default DeckInfo
