import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';
import Card from './Card.js';
// import NewCard from './NewCard.js'



const Cards = () => {

    const [cards, setCards] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:3000/cards`)
            .then((response) => {
                // console.log(response.data);
                setCards(response.data);
        })
    })

    return (
        <ul>
            {cards.map((card) => {
                return(
                    <li key={card.id}><Card card={card}/></li>
                )
            })}
        </ul>
    )
}


export default Cards

// <ul>
//     {cards.map((card) => {
//         <li>
//             <img src={card.image_uris.small}/>
//         </li>
//     })}
// </ul>
