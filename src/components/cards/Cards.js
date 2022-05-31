import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';
import Card from './Card.js';
import CardSearch from '../searches/CardSearch.js';
// import NewCard from './NewCard.js'



const Cards = () => {

    const [cards, setCards] = useState([]);

    useEffect(() => {
        axios.get(`https://magic-academy-api.herokuapp.com/cards`)
            .then((response) => {
                // console.log(response.data);
                setCards(response.data);
        })
        // axios.get(`http://localhost:3000/cards`)
        //     .then((response) => {
        //         // console.log(response.data);
        //         setCards(response.data);
        // })
    })

    const renderCards = () => {
        return (
            <ul>
                {cards.map((card) => {
                    return(
                        <li key={card._id}> <Card card={card}/> <button onClick={(event) => {deleteCard(card._id)}}>Delete</button> </li>
                    )
                })}
            </ul>
        )
    }

    const deleteCard = (_id) => {
        axios.delete(`https://magic-academy-api.herokuapp.com/cards/${_id}`).then(renderCards())
        // axios.delete(`http://localhost:3000/cards/${_id}`).then(renderCards())
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
