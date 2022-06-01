import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';
import Deck from './Deck.js'


const Decks = () => {

  const [deckList, setDeckList] = useState([])
  const [deckName, setDeckName] = useState()

  useEffect(() => {
    axios.get('http://localhost:3000/decks').then((response) => {
      setDeckList(response.data)
    })
  }, [])


  const renderDecks = () => {
    console.log(deckList);

      return (
          <>
          <h2>Deck List</h2>
          <ul>
              {deckList.map((deck) => {
                  return(
                      <li key={deck._id}> <Deck deck={deck}/> </li>
                  )
              })}
          </ul>
          </>
      )
  }

  const addDeck = (event) => {
    event.preventDefault()
    console.log(deckName);
    axios.post('http://localhost:3000/decks',
      {
        name: deckName,
        cardList: [
            {
                card_id: "",
                card_name: "",
                quantity: null
            }
        ]
      }
  ).then(() => {
    axios.get('http://localhost:3000/decks').then((response) => {
      setDeckList(response.data)
      console.log(deckName);
    })
  })
  }

  const handleUpdateDeckName = (event) => {
    setDeckName(event.target.value)
  }


  return(
    <>
      <form onSubmit={addDeck}>
      Name: <input type="text" onChange={handleUpdateDeckName}/>
      <input type="submit" value="Add Deck"/>
      </form>
      {renderDecks()}
    </>
  )



}

export default Decks
