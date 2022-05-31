import React from 'react';
import {useState, useEffect} from 'react';

const Card = (props) => {

    const [card, setCard] = useState(props.card);

    return (
        <img src={card.image_uris.normal} alt=""/>
    )
}

export default Card
