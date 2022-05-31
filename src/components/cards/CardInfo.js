import React from 'react';
import {useState, useEffect} from 'react';

const CardInfo = (props) => {

    const [cardData, setCardData] = useState(props.cardData)

    return (
        <>
            <p>{cardData.name}</p>
            <p>Mana Cost: {cardData.mana_cost}</p>
            <p>Set Name: {cardData.set_name}</p>

        </>
    )
}

export default CardInfo
