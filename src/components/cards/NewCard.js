import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';

const NewCard = () => {

    const [newCard, setNewCard] = useState({});
    const [newName, setNewName] = useState("");
    const [manaCost, setManaCost] = useState("");
    const [image, setImage] = useState("");
    const [setName, setSetName] = useState("");
    const [flavorText, setFlavorText] = useState("");
    const [oracleText, setOracleText] = useState("");
    const [artist, setArtist] = useState("");
    const [rarity, setRarity] = useState("");

    const renderNewCardForm = (event) => {
        return (
            <form onSubmit={handleNewCardSubmit}>
                <h2>Enter New Card Data</h2>
                <table>
                    <tr>
                        <td>Card Name</td>
                        <td> <input type="text" onChange={handleNameChange}/> </td>
                    </tr>
                    <tr>
                        <td>Mana Cost</td>
                        <td> <input type="text" onChange={(event)}/> </td>
                    </tr>
                </table>
            </form>
        )
    }

    const handleNewCardSubmit = (event) => {
        axios.post('http://localhost:3000/cards', newCard)
            .then(() => {console.log(`posted ${newCard.name}`);})
    }

    const handleNewCard = () => {
        setNewCard(
            {
                name: newName,
                mana_cost: manaCost,
                image_uris: {
                    small: image,
                    normal: image,
                },
                layout: "normal",
                set_name: setName,
                flavor_text: flavorText,
                oracle_text: oracleText,
                artist: artist,
                rarity: rarity,

            }
        )
    }

    const handleNameChange = (event) => {
        setNewName(event.target.value)
    }
    const handleManaCostChange = (event) => {
        setManaCost(event.target.value)
    }
    const handleImageChange = (event) => {
        setImage(event.target.value)
    }
    const handleSetNameChange = (event) => {
        setSetName(event.target.value)
    }
    const handleFlavorTextChange = (event) => {
        setFlavorText(event.target.value)
    }
    const handleOracleTextChange = (event) => {
        setOracleText(event.target.value)
    }
    const handleArtistChange = (event) => {
        setArtist(event.target.value)
    }
    const handleRarityChange = (event) => {
        setRarity(event.target.value)
    }


    return(
        <>
            New Card Form Goes Here
        </>
    )

}

export default NewCard
