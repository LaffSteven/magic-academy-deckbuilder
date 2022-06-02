import React from 'react';
import axios from 'axios';
import {useState, useEffect} from 'react';
import EditCardForm from './EditCard.js';

const CardInfo = (props) => {

    const [cardData, setCardData] = useState(props.cardData)
    const [hideEditForm, setHideEditForm] = useState(true)

    const renderCardData = () => {
        return (
                <div id="card-info-body">
                    <p>Mana Cost: {cardData.mana_cost}</p>
                    <p>Set Name: {cardData.set_name}</p>
                </div>
        )
    }

    const renderCardEditForm = () => {
        return <EditCardForm cardData={cardData} />
    }

    const deleteCard = (_id) => {
        // axios.delete(`https://magic-academy-api.herokuapp.com/cards/${_id}`).then(renderCards())
        axios.delete(`http://localhost:3000/cards/${_id}`)
    }

    return (
        <div id="card-info-overlay">
            <div id="card-info-container">
                <div id="card-info-header">
                    <h3>{cardData.name}</h3>
                </div>
                {hideEditForm ? renderCardData() : renderCardEditForm()}
                <div id="card-info-footer">
                    { hideEditForm ?
                        <>
                        <button onClick={() => {setHideEditForm(!hideEditForm)}}>Edit {cardData.name}</button>
                        </>
                        :
                        <>
                        <button onClick={() => {setHideEditForm(!hideEditForm)}}>Cancel Edits</button>
                        <button onClick={(event) => {deleteCard(cardData._id)}}> Delete {cardData.name}</button>
                        </>
                    }
                </div>
            </div>
        </div>
    )
}

export default CardInfo
