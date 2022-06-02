import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';

const NewCardForm = () => {

    const [newCard, setNewCard] = useState({});
    const [newName, setNewName] = useState("");
    const [manaCost, setManaCost] = useState("");
    const [image, setImage] = useState("");
    const [setName, setSetName] = useState("");
    const [flavorText, setFlavorText] = useState("");
    const [oracleText, setOracleText] = useState("");
    const [artist, setArtist] = useState("");
    const [rarity, setRarity] = useState("");
    const [typeLine, setTypeLine] = useState("");
    const [power, setPower] = useState("");
    const [toughness, setToughness] = useState("");
    const [loyalty, setLoyalty] = useState("");

    const renderNewCardForm = (event) => {
        return (
            <form onSubmit={handleNewCardSubmit} className="flex-box flex-column justify-center align-content-center">
                <h2>Enter New Card Data</h2>
                <table>
                    <tbody>
                    <tr>
                        <td>Card Name</td>
                        <td> <input type="text" onChange={handleNameChange}/> </td>
                    </tr>
                    <tr>
                        <td>Mana Cost</td>
                        <td> <input type="text" onChange={handleManaCostChange}/> </td>
                    </tr>
                    <tr>
                        <td>Image URL</td>
                        <td> <input type="text" onChange={handleImageChange}/> </td>
                    </tr>
                    <tr>
                        <td>Type Line</td>
                        <td> <input type="text" onChange={handleTypeLineChange}/> </td>
                    </tr>
                    <tr>
                        <td>Oracle Text</td>
                        <td> <input type="text" onChange={handleOracleTextChange}/> </td>
                    </tr>
                    <tr>
                        <td>Flavor Text</td>
                        <td> <input type="text" onChange={handleOracleTextChange}/> </td>
                    </tr>
                    <tr>
                        <td>Power</td>
                        <td> <input type="text" onChange={handlePowerChange}/> </td>
                    </tr>
                    <tr>
                        <td>Toughness</td>
                        <td> <input type="text" onChange={handleToughnessChange}/> </td>
                    </tr>
                    <tr>
                        <td>Loyalty</td>
                        <td> <input type="text" onChange={handleLoyaltyChange}/> </td>
                    </tr>
                    <tr>
                        <td>Rarity</td>
                        <td> <input type="text" onChange={handleRarityChange}/> </td>
                    </tr>
                    <tr>
                        <td>Artist</td>
                        <td> <input type="text" onChange={handleArtistChange}/> </td>
                    </tr>
                    </tbody>
                </table>
                <input type="submit" value="Save New Card" />
            </form>
        )
    }

    const handleNewCardSubmit = (event) => {
        handleNewCardChange()
        axios.post('https://magic-academy-api.herokuapp.com/cards', newCard)
            .then(() => {console.log(`posted ${newCard.name}`);})
    }

    const handleNewCardChange = () => {
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
                power: power,
                toughness: toughness,
                loyalty: loyalty,
                artist: artist,
                rarity: rarity,
                type_line: typeLine
            }
        )
    }

    const handleNameChange = (event) => {
        setNewName(event.target.value);
        handleNewCardChange();
    }
    const handleManaCostChange = (event) => {
        setManaCost(event.target.value);
        handleNewCardChange();
    }
    const handleImageChange = (event) => {
        setImage(event.target.value);
        handleNewCardChange();
    }
    const handleSetNameChange = (event) => {
        setSetName(event.target.value);
        handleNewCardChange();
    }
    const handleFlavorTextChange = (event) => {
        setFlavorText(event.target.value);
        handleNewCardChange();
    }
    const handleOracleTextChange = (event) => {
        setOracleText(event.target.value);
        handleNewCardChange();
    }
    const handleArtistChange = (event) => {
        setArtist(event.target.value);
        handleNewCardChange();
    }
    const handleRarityChange = (event) => {
        setRarity(event.target.value);
        handleNewCardChange();
    }
    const handleTypeLineChange = (event) => {
        setTypeLine(event.target.value);
        handleNewCardChange();
    }
    const handlePowerChange = (event) => {
        setArtist(event.target.value);
        handleNewCardChange();
    }
    const handleToughnessChange = (event) => {
        setRarity(event.target.value);
        handleNewCardChange();
    }
    const handleLoyaltyChange = (event) => {
        setTypeLine(event.target.value);
        handleNewCardChange();
    }


    return(
        <>
        {renderNewCardForm()}
        </>
    )

}

export default NewCardForm
