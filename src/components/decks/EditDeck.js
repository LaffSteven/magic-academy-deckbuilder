import React from 'react';
import axios from 'axios';
import {useState, useEffect} from 'react';
import CardSearch from '../searches/CardSearch.js';


const EditDeck = (props) => {

  const [cardList, setCardList] = useState([])
  const [deckData, setDeckData] = useState(props.deckData)
  const [cards, setCards] = useState([])
  const [cardSkip, setCardSkip] = useState(0)
  const [toggleIndex, setToggleIndex] = useState("")
  const [toggleSearch, setToggleSearch] = useState("")
  const [cardState, setCardState] = useState("")
  const [showCardInfo, setShowCardInfo] = useState(false);
  const [arr2, setArr2] = useState([])

  let cardStr = ``



  const cardInfoF = (card) => {

      cardStr = ``


      const renderCardData = () => {
          return (
                  <div id="card-info-body">
                      <p>Mana Cost: {card.mana_cost}</p>
                      <p>Set Name: {card.set_name}</p>
                      <button onClick={(event) => {handleCardList()}}> Add Card {card.name}</button>
                  </div>
          )
      }


      const handleCardList = () => {
        setArr2(cardList)
        arr2[arr2.length] = {
          card_id: `${card._id}`,
          card_name: `${card.name}`,
        }
        setTimeout(100)
        setCardList(arr2)
        console.log(cardList);

        for(let i = 0; i<cardList.length; i++){
            cardStr = (cardStr + `${cardList[i].card_name} `)

        }
        setCardState(cardStr)
        console.log(cardStr)

      }



      return (
          <div id="card-info-overlay">
              <div id="card-info-container">
                  <div id="card-info-header">
                      <h3>{card.name}</h3>
                  </div>
                  {renderCardData()}

              </div>
          </div>
      )
  }



  const cardF = (card) => {

      const renderSmallCardImage = () => {
          return(
              <img src={card.image_uris.small} alt={card.name} onClick={(event) => {toggleShowCardInfo()}}/>
          )
      }


      const renderCardInfo = () => {
          return (
              <div className="modal flex-box flex-row">
                  <img src={card.image_uris.normal} alt={card.name} />
                  {cardInfoF(card)}
                  <button onClick={(event) => {toggleShowCardInfo()}}> Hide </button>
              </div>
          )
      }


      const toggleShowCardInfo = (event) => {
          console.log(`Setting showCardInfo to ${!showCardInfo}`);
          setShowCardInfo(!showCardInfo);
      }



      return (
          <>
          {!showCardInfo ? renderSmallCardImage() : renderCardInfo()}
          </>

      )
  }



  const cardsF = () => {

      const addDeckCard = (cardList) => {

          let arrayLength = deckData.cardList.length + cardList.length

          for(let i = deckData.cardList.length; i < arrayLength; i++)
          {
              for(let ii = 0; ii < cardList.length; ii++)
              {
                deckData.cardList[i] = cardList[ii]
              }

          }

          axios.put(`http://localhost:3000/decks/${deckData._id}`, {
              cardList: deckData.cardList
              // [
              //     {
              //         card_id: `${cardData._id}`,
              //         card_name: `${cardData.name}`,
              //         quantity: 5
              //     }
              // ]
          })
      }


      return (
      <>
        <br/>
          selected cards: {cardState}
        <br/>
        <br/>
        <br/>
          <button onClick={(event) => {addDeckCard(cardList)}}>Submit Cards to Deck</button>
      </>
      )
  }



  const handleIndexToggle = () => {
    if(toggleIndex === "toggle-index")
    {
      setToggleIndex("")
    } else if (toggleIndex === "")
    {
      setToggleIndex("toggle-index")
    }
  }


  const handleToggleSearch = () => {
    if(toggleSearch === "toggle-index")
    {
      setToggleSearch("")
    } else if (toggleSearch === "")
    {
      setToggleSearch("toggle-search")
    }
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
                          <div key={card.id} > {cardF(card)} </div>
                      )
                  })}
              </div>
              <button id="load-more-cards-button" onClick={(event) => {loadMoreCards()}}>Load More Cards</button>
          </div>
      </>
      )
  }


  useEffect(()=>{
      // axios.get(`https://magic-academy-api.herokuapp.com/cards`)
      //     .then((response) => {
      //         // console.log(response.data);
      //         setCards(response.data);
      // })
      if (cards.length === 0) {
          axios.get(`https://magic-academy-api.herokuapp.com/cards?skip=0`)
              .then((response) => {
                  setCardSkip(response.data.length)
                  setCards(response.data);
          })
      }
  }, [])


  const loadMoreCards = () => {
      console.log("Loding more cards");
      axios.get(`https://magic-academy-api.herokuapp.com/cards?skip=${cardSkip}`)
          .then((response) => {
              setCards([...cards, ...response.data])
              setCardSkip(cardSkip + response.data.length);
          })
  }



  return(
      <>
        <nav>
          <button onClick={(event) => {handleToggleSearch()}}>search</button>
          <button onClick={(event) => {handleIndexToggle()}}>Index</button>
        </nav>
        <section>{cardsF()}</section>
        {toggleSearch === "toggle-search" ? renderCardSearch() : null}
        {toggleIndex === "toggle-index" ? renderCardIndex() : null}
      </>
  )

}

export default EditDeck
