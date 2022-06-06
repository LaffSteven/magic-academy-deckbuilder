import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';
import Deck from './Deck.js'



const Decks = () => {

  const [deckList, setDeckList] = useState([])
  const [deckName, setDeckName] = useState()
  const [currentTab, setCurrentTab] = useState("deck-index")
  const [currentDeck, setCurrentDeck] = useState({})
  const [allowGet, setAllowGet] = useState(false)

  useEffect(() => {
    axios.get('https://magic-academy-api.herokuapp.com/decks').then((response) => {
      setDeckList(response.data)
    })
  }, [])

    const getDeckList = () => {
        console.log("ran get decks");
        axios.get('https://magic-academy-api.herokuapp.com/decks').then((response) => {
            setDeckList(response.data)
        })
    }

  const renderDecks = () => {

      return (
          <div id="deck-list">
              <h2>Deck List</h2>
              <ul>
                  {deckList.map((deck) => {
                      return(
                        <>
                          <li key={deck._id}> <Deck deck={deck} currentTab={currentTab} setEditTab={() => {setCurrentTab("edit-deck"); setCurrentDeck(deck)}}/>
                          </li>
                        </>
                      )
                  })}
              </ul>
          </div>
      )
  }

  const deckDelete = () => {
    axios.delete(`https://magic-academy-api.herokuapp.com/decks/${currentDeck._id}`).then(() => {
      console.log(`deleting ${currentDeck._id}`);
    }).then(() => {
      axios.get('https://magic-academy-api.herokuapp.com/decks').then((response) => {
        setDeckList(response.data)
      })
    })
    setCurrentTab("deck-index")
  }

  const renderDeck = (deck) => {
      return(
          <Deck deck={currentDeck} deckDelete={() => deckDelete(currentDeck._id)} currentTab={currentTab}/>
      )
  }

  const addDeck = (event) => {
    event.preventDefault()
    console.log(deckName);
    axios.post('https://magic-academy-api.herokuapp.com/decks',
      {
        name: deckName,
        cardList: []
      }
  ).then(() => {
    axios.get('https://magic-academy-api.herokuapp.com/decks').then((response) => {
      setDeckList(response.data)
      console.log(deckName);
    })
  })
  }

  const handleUpdateDeckName = (event) => {
    setDeckName(event.target.value)
  }

  const handleTabChange = (tab) => {
      setCurrentTab(tab);
      axios.get('https://magic-academy-api.herokuapp.com/decks').then((response) => {
        setDeckList(response.data)
      })
  }


  return(
    <>


      <nav>
          <button onClick={(event) =>{handleTabChange("deck-index")}}>Deck List</button>
      </nav>
      <br/>
      <br/>
      {currentTab == "deck-index" ?
          <section id="add-deck-form">
              <form onSubmit={addDeck}>
                  Name: <input type="text" onChange={handleUpdateDeckName}/>
                  <input type="submit" value="Add Deck"/>
              </form>
          </section>
          :
          null
      }


      {currentTab == "deck-index" ? renderDecks() : null}
      {currentTab == "edit-deck" ? renderDeck(currentDeck) : null}

    </>
  )



}

export default Decks
