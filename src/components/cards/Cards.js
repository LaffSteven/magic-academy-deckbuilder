import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';
import Card from './Card.js';
import CardSearch from '../searches/CardSearch.js';
// import NewCard from './NewCard.js'



const Cards = (props) => {

    const [cards, setCards] = useState([]);
    const [moreCards, setMoreCards] = useState([]);
    const [cardSkip, setCardSkip] = useState(0)

    useEffect(()=>{
        // axios.get(`https://magic-academy-api.herokuapp.com/cards`)
        //     .then((response) => {
        //         // console.log(response.data);
        //         setCards(response.data);
        // })
        axios.get(`http://localhost:3000/cards?skip=0`)
            .then((response) => {
                console.log(response.data);
                // setCards(response.data);
        })
    })

    const renderCards = () => {
        return (
            <>
            <h2>Card List</h2>
            <ul>
                {cards.map((card) => {
                    return(
                        <li key={card._id}> <Card card={card}/> </li>
                    )
                })}
            </ul>
            <button onClick={(event) => {loadMoreCards()}}>Load More Cards</button>
            </>
        ).then(() => {
            setCardSkip(cards.length)
        })
    }

    const loadMoreCards = () => {
        axios.get(`http://localhost:3000/cards?skip=${cardSkip}`)
            .then((response) => {
                if (response.data) {
                    setMoreCards([...cards, ...response.data])
                    setCardSkip(moreCards.length)
                }
            }).then(() => {
                if (moreCards.length >= cards.length) {
                    setCards([...moreCards]);
                }
            })
    }

    return (
    <>
        <CardSearch />

        {cards.length > 0 ? renderCards() : null}

    </>
    )
}


export default Cards


// <CardSearch />
// <hr/>
// <br/>
// <br/>
// <hr/>
// <ul>
//     {cards.map((card) => {
//         return(
//             <li key={card.id}> <Card card={card}/> </li>
//         )
//     })}
// </ul>


// <ul>
//     {cards.map((card) => {
//         return(
//             <li key={card.id}> <Card card={card}/> </li>
//         )
//     })}
// </ul>
