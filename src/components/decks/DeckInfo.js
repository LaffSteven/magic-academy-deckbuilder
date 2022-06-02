import React from 'react';
import axios from 'axios';
import {useState, useEffect} from 'react';

const DeckInfo = (props) => {

    const [deckData, setDeckData] = useState(props.deckData)

    const deckDelete = (_id) => {
      console.log(_id);
      console.log(deckData._id);
      axios.delete(`https://magic-academy-api.herokuapp.com/decks/${_id}`)
    }

    return (
        <div>
            <button onClick={(event) => {deckDelete(deckData._id)}}> Delete </button>
        </div>
    )
}

export default DeckInfo
