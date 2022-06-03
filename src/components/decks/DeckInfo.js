import React from 'react';
import axios from 'axios';
import {useState, useEffect} from 'react';
import EditDeck from './EditDeck.js'

const DeckInfo = (props) => {

    const [deckData, setDeckData] = useState(props.deckData)
    const [deckName, setDeckName] = useState(props.deckData)
    const [updatedDeckName, setUpdatedDeckName] = useState(props.deckData)


    const handleUpdateDeckName = (event) => {
      setUpdatedDeckName(event.target.value)
    }

    const deckDelete = (_id) => {
      console.log(_id);
      console.log(deckData._id);
      axios.delete(`https://magic-academy-api.herokuapp.com/decks/${_id}`)
    }

    const deckNameUpdate = (deckData) => {
      axios.put(`http://localhost:3000/decks/${deckData._id}`,
      {
        name: updatedDeckName
      })
    }


    return (
        <div>
            <button onClick={(event) => {deckDelete(deckData._id)}}> Delete </button>
            <form onSubmit={(event) => {deckNameUpdate(deckData)}}>
            Update Deck Name: <input type="text" onChange={handleUpdateDeckName}/>
            <input type="submit" value="change Name"/>
            </form><br/>
            <EditDeck deckData={deckData}/>
        </div>
    )
}

export default DeckInfo
