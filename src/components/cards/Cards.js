import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';
import Card from './Card.js';
import CardSearch from '../searches/CardSearch.js';
// import NewCard from './NewCard.js'



const Cards = () => {

    const [cards, setCards] = useState([]);
    const [cardSkip, setCardSkip] = useState(0)

    useEffect(()=>{
        // axios.get(`https://magic-academy-api.herokuapp.com/cards`)
        //     .then((response) => {
        //         // console.log(response.data);
        //         setCards(response.data);
        // })
        if (cards.length == 0) {
            axios.get(`http://localhost:3000/cards?skip=0`)
                .then((response) => {
                    console.log("useEffect");
                    setCardSkip(response.data.length)
                    setCards(response.data);
            })
        }
    }, [])

    const loadMoreCards = () => {
        console.log("Loding more cards");
        axios.get(`http://localhost:3000/cards?skip=${cardSkip}`)
            .then((response) => {
                console.log(response.data);
                setCards([...cards, ...response.data])
                setCardSkip(cardSkip + response.data.length);
            })
    }

    const renderCards = () => {

        return (
            <>
            <h2>Card List</h2>
            <ul>
                {cards.map((card) => {
                    return(
                        <li key={card.id}> <Card card={card}/> </li>
                    )
                })}
            </ul>
            </>
        )
    }

    return (
    <>
        <CardSearch />
        {cards.length > 0 ? renderCards() : null}
        <button onClick={(event) => {loadMoreCards()}}>Load More Cards</button>
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
