import React from 'react';
import axios from 'axios';
import {useState, useEffect} from 'react';
import CardSearch from '../searches/CardSearch.js';
import Card from "../cards/Card.js"


const EditDeck = (props) => {

  const [cardList, setCardList] = useState(props.deckData.cardList)
  const [deckData, setDeckData] = useState(props.deckData)
  const [cards, setCards] = useState([])
  const [cardSkip, setCardSkip] = useState(0)
  const [toggleIndex, setToggleIndex] = useState("")
  const [toggleSearch, setToggleSearch] = useState("")
  const [cardState, setCardState] = useState("")
  const [showCardInfo, setShowCardInfo] = useState(false);
  const [arr2, setArr2] = useState([])
  const [newCard, setNewCard] = useState({});
  const [updatedDeckName, setUpdatedDeckName] = useState(props.deckData.name)

  const renderCardList = () => {
      setCardList([...cardList, {card_id:newCard._id, card_name:newCard.name}])
  }

  const saveDeckChanges = (event) => {
      console.log("Saved Changes");
      axios.put(`https://magic-academy-api.herokuapp.com/decks/${deckData._id}`,
          {
            name: deckData.name,
            cardList: cardList
          }
      )

  }


  const renderCardSearch = () => {
    return (
        <CardSearch origin={"deck"} cardList={cardList} getNewCard={(card) => {setCardList([...cardList, {card_id:card._id, card_name:card.name}])}}/>
    )
  }

  const deckNameUpdate = (deckData) => {
    axios.put(`https://magic-academy-api.herokuapp.com/decks/${deckData._id}`,
    {
        name: updatedDeckName
    })
  }
  const handleUpdateDeckName = (event) => {
    setUpdatedDeckName(event.target.value)
  }

  const handleRemoveCard = (card) => {
      const arr = cardList;
      // console.log(arr);
      // console.log(arr.indexOf(card));
      arr.splice(arr.indexOf(card), 1)
      // console.log(arr);
      setCardList([...arr]);
      // console.log(cardList);
  }

  const handleQuantityChange = (cardID) => {
      console.log(cardList.indexOf(cardID));
  }

// onClick={() => {setCardList(cardList.splice((cardList.indexOf(card), 1)))}}
// return (
//     <li key={card._id}>
//         {card.card_name} &nbsp; &nbsp;
//         <button onClick={(event) => {handleRemoveCard(card)}}>remove</button>
//     </li>
// )

  return(
      <div className="flex-box flex-row flex-nowrap justify-spacearound">
          <section id="deck-card-list" className="flex-box flex-column justify-spacearound align-items-center glassify">
            <div>
                <form onSubmit={(event) => {deckNameUpdate(deckData)}}>
                Update Deck Name: <input type="text" value={updatedDeckName} onChange={handleUpdateDeckName}/>
                <input className="clickable" type="submit" value="change Name"/>
                </form><br/>
            </div>
            <table>
                <tr>
                    <th>Card Name</th>
                    <th>Remove?</th>
                </tr>
                {cardList.map((card) => {
                    return (
                        <tr key={card._id}>
                        <td> <Card card={card} origin="deck-list"/> </td>
                        <td> <button onClick={(event) => {handleRemoveCard(card)}}> remove </button> </td>
                        </tr>
                    )
                })}
            </table>
            <button onClick={(event) => {saveDeckChanges()}}> Save Changes </button>
          </section>
        <section id="deck-card-search" className="glassify flex-box flex-column align-items-center">
            {renderCardSearch()}
        </section>

        {props.currentTab == "edit-deck" ? <button onClick={props.deckDelete}> DELETE DECK </button> : null}

      </div>
  )

}

export default EditDeck

// Erik Old Code //

// <nav>
//   <button onClick={(event) => {handleToggleSearch()}}>search</button>
//   <button onClick={(event) => {handleIndexToggle()}}>Index</button>
// </nav>
// <section>{cardsF()}</section>
// {toggleSearch === "toggle-search" ? renderCardSearch() : null}
// {toggleIndex === "toggle-index" ? renderCardIndex() : null}

// TEMP CODE DUMP

// const cardInfoF = (card) => {
//
//     cardStr = ``
//
//
//     const renderCardData = () => {
//         return (
//                 <div id="card-info-body">
//                     <p>Mana Cost: {card.mana_cost}</p>
//                     <p>Set Name: {card.set_name}</p>
//                     <button onClick={(event) => {handleCardList()}}> Add Card {card.name}</button>
//                 </div>
//         )
//     }
//
//
//     const handleCardList = () => {
//       setArr2(cardList)
//       arr2[arr2.length] = {
//         card_id: `${card._id}`,
//         card_name: `${card.name}`,
//       }
//       setCardList(arr2)
//       console.log(cardList);
//
//       for(let i = 0; i<cardList.length; i++){
//           cardStr = (cardStr + `${cardList[i].card_name} `)
//
//       }
//       setCardState(cardStr)
//       console.log(cardStr)
//
//     }
//
//
//
//     return (
//         <div id="card-info-overlay">
//             <div id="card-info-container">
//                 <div id="card-info-header">
//                     <h3>{card.name}</h3>
//                 </div>
//                 {renderCardData()}
//
//             </div>
//         </div>
//     )
// }



// const cardF = (card) => {
//
//     const renderSmallCardImage = () => {
//         return(
//             <img src={card.image_uris.small} alt={card.name} onClick={(event) => {toggleShowCardInfo()}}/>
//         )
//     }
//
//
//     const renderCardInfo = () => {
//         return (
//             <div className="modal flex-box flex-row">
//                 <img src={card.image_uris.normal} alt={card.name} />
//                 {cardInfoF(card)}
//                 <button onClick={(event) => {toggleShowCardInfo()}}> Hide </button>
//             </div>
//         )
//     }
//
//
//     const toggleShowCardInfo = (event) => {
//         console.log(`Setting showCardInfo to ${!showCardInfo}`);
//         setShowCardInfo(!showCardInfo);
//     }
//
//
//
//     return (
//         <>
//         {!showCardInfo ? renderSmallCardImage() : renderCardInfo()}
//         </>
//
//     )
// }

// const cardsF = () => {
//
//     const addDeckCard = (cardList) => {
//
//         let arrayLength = deckData.cardList.length + cardList.length
//
//         for(let i = deckData.cardList.length; i < arrayLength; i++)
//         {
//             for(let ii = 0; ii < cardList.length; ii++)
//             {
//               deckData.cardList[i] = cardList[ii]
//             }
//
//         }
//
//         axios.put(`http://localhost:3000/decks/${deckData._id}`, {
//             cardList: deckData.cardList
//             // [
//             //     {
//             //         card_id: `${cardData._id}`,
//             //         card_name: `${cardData.name}`,
//             //         quantity: 5
//             //     }
//             // ]
//         })
//     }
//
//
//     return (
//     <>
//       <br/>
//         selected cards: {cardState}
//       <br/>
//       <br/>
//       <br/>
//         <button onClick={(event) => {addDeckCard(cardList)}}>Submit Cards to Deck</button>
//     </>
//     )
// }

// const renderCardIndex = () => {
//     return (
//     <>
//         <div className="flex-box flex-column flex-nowrap justify-content-spacearound align-items-center">
//             <h2>Card Index</h2>
//             <div className="flex-box flex-row flex-wrap justify-spacearound">
//                 {cards.map((card) => {
//                     return(
//                         <div key={card.id} > {cardF(card)} </div>
//                     )
//                 })}
//             </div>
//             <button id="load-more-cards-button" onClick={(event) => {loadMoreCards()}}>Load More Cards</button>
//         </div>
//     </>
//     )
// }

// const handleIndexToggle = () => {
//   if(toggleIndex === "toggle-index")
//   {
//     setToggleIndex("")
//   } else if (toggleIndex === "")
//   {
//     setToggleIndex("toggle-index")
//   }
// }
//
//
// const handleToggleSearch = () => {
//   if(toggleSearch === "toggle-index")
//   {
//     setToggleSearch("")
//   } else if (toggleSearch === "")
//   {
//     setToggleSearch("toggle-search")
//   }
// }

// const loadMoreCards = () => {
//     console.log("Loding more cards");
//     axios.get(`https://magic-academy-api.herokuapp.com/cards?skip=${cardSkip}`)
//         .then((response) => {
//             setCards([...cards, ...response.data])
//             setCardSkip(cardSkip + response.data.length);
//         })
// }
