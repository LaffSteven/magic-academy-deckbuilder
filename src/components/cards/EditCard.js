import React from 'react';
import axios from 'axios';
import {useState, useEffect} from 'react';

const EditCardForm = (props) => {

    const [editCard, setEditCard] = useState({});
    const [editName, setEditName] = useState(props.cardData.name);
    const [manaCost, setManaCost] = useState(props.cardData.mana_cost);
    const [image, setImage] = useState(props.cardData.image_uris.normal);
    const [setName, setSetName] = useState(props.cardData.set_name);
    const [flavorText, setFlavorText] = useState(props.cardData.flavor_text);
    const [oracleText, setOracleText] = useState(props.cardData.oracle_text);
    const [artist, setArtist] = useState(props.cardData.artist);
    const [rarity, setRarity] = useState(props.cardData.rarity);
    const [typeLine, setTypeLine] = useState(props.cardData.type_line);
    const [power, setPower] = useState(props.cardData.power);
    const [toughness, setToughness] = useState(props.cardData.toughness);
    const [loyalty, setLoyalty] = useState(props.cardData.loyalty);

    const renderForm = () => {
        return (
            <div id="card-edit-body">
                <form onSubmit={handleEditCardSubmit} className="flex-box flex-column justify-center align-content-center">
                    <h2>Enter New Card Data</h2>
                    <table>
                        <tbody>
                        <tr>
                            <td>Card Name</td>
                            <td> <input type="text" onChange={handleNameChange} value={editName}/> </td>
                        </tr>
                        <tr>
                            <td>Mana Cost</td>
                            <td> <input type="text" onChange={handleManaCostChange} value={manaCost}/> </td>
                        </tr>
                        <tr>
                            <td>Image URL</td>
                            <td> <input type="text" onChange={handleImageChange} value={image}/> </td>
                        </tr>
                        <tr>
                            <td>Type Line</td>
                            <td> <input type="text" onChange={handleTypeLineChange} value={typeLine}/> </td>
                        </tr>
                        <tr>
                            <td>Oracle Text</td>
                            <td> <input type="text" onChange={handleOracleTextChange} value={oracleText}/> </td>
                        </tr>
                        <tr>
                            <td>Flavor Text</td>
                            <td> <input type="text" onChange={handleOracleTextChange} value={flavorText}/> </td>
                        </tr>
                        <tr>
                            <td>Power</td>
                            <td> <input type="text" onChange={handlePowerChange} value={power}/> </td>
                        </tr>
                        <tr>
                            <td>Toughness</td>
                            <td> <input type="text" onChange={handleToughnessChange} value={toughness}/> </td>
                        </tr>
                        <tr>
                            <td>Loyalty</td>
                            <td> <input type="text" onChange={handleLoyaltyChange} value={loyalty}/> </td>
                        </tr>
                        <tr>
                            <td>Rarity</td>
                            <td> <input type="text" onChange={handleRarityChange} value={rarity}/> </td>
                        </tr>
                        <tr>
                            <td>Artist</td>
                            <td> <input type="text" onChange={handleArtistChange} value={artist}/> </td>
                        </tr>
                        </tbody>
                    </table>
                    <input type="submit" value="Save Edits" />
                </form>
            </div>
        )
    }

    const handleEditCardSubmit = (event) => {
        setEditCard(
            {
                name: editName,
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
        // axios.put('http://localhost:3000/cards', newCard)
        //     .then(() => {console.log(`posted ${newCard.name}`);})
    }

    const handleNameChange = (event) => {
        setEditName(event.target.value);
    }
    const handleManaCostChange = (event) => {
        setManaCost(event.target.value);
    }
    const handleImageChange = (event) => {
        setImage(event.target.value);
    }
    const handleSetNameChange = (event) => {
        setSetName(event.target.value);
    }
    const handleFlavorTextChange = (event) => {
        setFlavorText(event.target.value);
    }
    const handleOracleTextChange = (event) => {
        setOracleText(event.target.value);
    }
    const handleArtistChange = (event) => {
        setArtist(event.target.value);
    }
    const handleRarityChange = (event) => {
        setRarity(event.target.value);
    }
    const handleTypeLineChange = (event) => {
        setTypeLine(event.target.value);
    }
    const handlePowerChange = (event) => {
        setArtist(event.target.value);
    }
    const handleToughnessChange = (event) => {
        setRarity(event.target.value);
    }
    const handleLoyaltyChange = (event) => {
        setTypeLine(event.target.value);
    }

    return (
        renderForm()
    )

}

export default EditCardForm
