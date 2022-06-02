import React from 'react';
import axios from 'axios';
import {useState, useEffect} from 'react';
import CardSearch from '../searches/CardSearch.js';
import Card from './Card.js';

const EditDeck = (props) => {

  const [deckData, setDeckData] = useState(props.deckData)
  const [cards, setCards] = useState([])
  const [cardSkip, setCardSkip] = useState(0)
  const [toggle, setToggle] = useState("toggle-index")

  const handleToggleChange = (value) => {
    setToggle(value)
  }

  const renderCardSearch = () => {
      return <CardSearch />
  }

  const renderCardIndex = () => {
      return (
      <>
          <div className="flex-box flex-column flex-nowrap justify-content-spacearound align-items-center">
              <h2>Card Index</h2>
              <div className="flex-box flex-row flex-wrap justify-spacearound">
                  {cards.map((card) => {
                      return(
                          <div key={card.id} > <Card card={card} deckData={deckData}/> </div>
                      )
                  })}
              </div>
              <p>{deckData._id}</p>
              <button id="load-more-cards-button" onClick={(event) => {loadMoreCards()}}>Load More Cards</button>
          </div>
      </>
      )
  }


  const loadMoreCards = () => {
      console.log("Loding more cards");
      axios.get(`http://localhost:3000/cards?skip=${cardSkip}`)
          .then((response) => {
              setCards([...cards, ...response.data])
              setCardSkip(cardSkip + response.data.length);
          })
  }



  return(
      <>
        <nav>
          <button onClick={(event) => {handleToggleChange("toggle-search")}}>search</button>
          <button onClick={(event) => {handleToggleChange("toggle-index")}}>Index</button>
        </nav>
        {toggle == "toggle-search" ? renderCardSearch() : null}
        {toggle == "toggle-index" ? renderCardIndex() : null}
      </>
  )

}

export default EditDeck
