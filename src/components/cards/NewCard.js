import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';

const NewCard = () => {

    const [newCard, setNewCard] = useState({})

    const renderNewCardForm = (event) => {
        return (
            <form onSubmit={handleNewCardFormSubmit}>
                <h2>Enter New Card Data</h2>
                <table>
                    <tr>
                        <td>Card Name</td>
                        <td> <input type="text" onChange={handleCardNameChange}/> </td>
                    </tr>
                    <tr>
                        <td>Mana Cost</td>
                        <td> <input type="text" onChange={(event)}/> </td>
                    </tr>
                </table>
            </form>
        )
    }

    return(
        <></>
    )

}

export default NewCard
