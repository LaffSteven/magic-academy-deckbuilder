import React from 'react';
import axios from 'axios';
import {useState, useEffect} from 'react';

const CardInfo = (props) => {

    const [cardData, setCardData] = useState(props.cardData)

    const deleteCard = (_id) => {
        // axios.delete(`https://magic-academy-api.herokuapp.com/cards/${_id}`).then(renderCards())
        axios.delete(`http://localhost:3000/cards/${_id}`)
    }

    return (
        <div>
            <p>{cardData.name}</p>
            <p>Mana Cost: {cardData.mana_cost}</p>
            <p>Set Name: {cardData.set_name}</p>
            <button onClick={(event) => {deleteCard(cardData._id)}}> Delete </button>
        </div>
    )
}

export default CardInfo
