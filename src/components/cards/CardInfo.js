import React from 'react';
import axios from 'axios';
import {useState, useEffect} from 'react';
import EditCardForm from './EditCard.js';

const CardInfo = (props) => {

    const [cardData, setCardData] = useState(props.cardData)
    const [hideEditForm, setHideEditForm] = useState(true)

    const renderCardData = () => {
        return (
                <div id="card-info-body" className="flex-box flex-row flex-nowrap justify-spacearound">
                    <img src={cardData.image_uris.normal} alt={cardData.name} id="card-data-image"/>
                    <div className="flex-box flex-column justify-spacearound align-items-center">
                        <table id="card-data-table">
                            <thead>
                                <tr>
                                    <th colSpan="2"> <h3>{cardData.name}</h3> </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td> Mana Cost </td>
                                    <td> {cardData.mana_cost} </td>
                                </tr>
                                <tr>
                                    <td> Type Line </td>
                                    <td> {cardData.type_line} </td>
                                </tr>
                                <tr>
                                    <td> Rarity </td>
                                    <td> {cardData.rarity} </td>
                                </tr>
                                <tr>
                                    <td> Oracle Text </td>
                                    <td> {cardData.oracle_text} </td>
                                </tr>
                                <tr>
                                    <td> Flavor Text </td>
                                    <td> {cardData.flavor_text} </td>
                                </tr>
                                {
                                    (cardData.power || cardData.toughness) ?
                                    <>
                                        <tr>
                                        <td colSpan="2"> Power: {cardData.power} </td>
                                        </tr>
                                        <tr>
                                        <td colSpan="2"> Toughness: {cardData.toughness}</td>
                                        </tr>
                                    </>
                                    :
                                    null
                                }
                                {
                                    cardData.loyaty ?
                                        <tr>
                                        <td> Loyalty </td>
                                        <td>{cardData.loyaty}</td>
                                        </tr>
                                    :
                                        null
                                }
                                <tr>
                                    <td> Artist </td>
                                    <td> {cardData.artist} </td>
                                </tr>
                                <tr>
                                    <td> Set </td>
                                    <td> {cardData.set_name} </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
        )
    }

    const renderCardEditForm = () => {
        return <EditCardForm cardData={cardData} />
    }

    const renderEditOrAddButton = () => {
        // console.log(props.origin);
        return (
            <>
                {props.origin == "deck" ?
                    <button onClick={() => {props.getNewCard(cardData)}}> Add {cardData.name} To Deck</button>
                    :
                    null
                }

                {props.origin == "cards" ?
                    <button onClick={() => {setHideEditForm(!hideEditForm)}}>Edit {cardData.name}</button>
                    :
                    null
                }
            </>


        )
    }

    const deleteCard = (_id) => {
        // axios.delete(`https://magic-academy-api.herokuapp.com/cards/${_id}`).then(renderCards())
        axios.delete(`https://magic-academy-api.herokuapp.com/cards/${_id}`)
    }

    return (
        <div id="card-info-overlay">
            <div id="card-info-container">
                <div id="card-info-header">
                    <h3>{cardData.name}</h3>
                </div>
                <hr/>
                {hideEditForm ? renderCardData() : renderCardEditForm()}
                <hr/>
                <div id="card-info-footer" className="flex-box flex-row justify-spacearound">
                    { hideEditForm ?
                        <>
                        {renderEditOrAddButton()}
                        <button onClick={props.hideCardInfo}> Close </button>
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
