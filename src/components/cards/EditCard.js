import React from 'react';
import axios from 'axios';
import {useState, useEffect} from 'react';

const EditCardForm = (props) => {

    const [editCard, setEditCard] = useState(props.cardData);
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
        event.preventDefault();
        console.log(editCard.id);
        axios.put(`http://localhost:3000/cards/${editCard._id}`,
            // {
            //     name: editName,
            //     mana_cost: manaCost,
            //     image_uris: {
            //         small: image,
            //         normal: image,
            //     },
            //     layout: "normal",
            //     set_name: setName,
            //     flavor_text: flavorText,
            //     oracle_text: oracleText,
            //     power: power,
            //     toughness: toughness,
            //     loyalty: loyalty,
            //     artist: artist,
            //     rarity: rarity,
            //     type_line: typeLine
            // },
            {
                object: props.cardData.object,
                id: props.cardData.id,
                oracle_id: props.cardData.oracle_id,
                multiverse_ids: props.cardData.multiverse_ids,
                mtgo_id: props.cardData.mtgo_id,
                mtgo_foil_id: props.cardData.mtgo_foil_id,
                tcgplayer_id: props.cardDatatcgplayer_id,
                cardmarket_id: props.cardData.cardmarket_id,
                name: editName,
                lang: props.cardData.lang,
                released_at: props.cardData.released_at,
                uri: props.cardData.uri,
                scryfall_uri: props.cardData.scryfall_uri,
                layout: props.cardData.layout,
                highres_image: props.cardData.highres_image,
                image_status: props.cardData.image_status,
                image_uris: {
                    small: image,
                    normal: image,
                    large: "",
                    png: "",
                    art_crop: "",
                    border_crop: ""
                },
                mana_cost: manaCost,
                cmc: "",
                power: power,
                toughness: toughness,
                loyalty: loyalty,
                type_line: typeLine,
                oracle_text: oracleText,
                colors: props.cardData.colors,
                color_identity: props.cardData.color_identity,
                keywords: props.cardData.keywords,
                legalities: props.cardData.legalities,
                games:props.cardData.games,
                reserved: props.cardData.reserved,
                foil: props.cardData.foil,
                nonfoil: props.cardData.nonfoil,
                finishes:props.cardData.finishes,
                oversized: props.cardData.oversized,
                promo: props.cardData.promo,
                reprint: props.cardData.reprint,
                variation: props.cardData.variation,
                set_id: props.cardData.set_id,
                set: props.cardData.set,
                set_name: props.cardData.set_name,
                set_type: props.cardData.set_type,
                set_uri: props.cardData.set_uri,
                set_search_uri: props.cardData.set_search_uri,
                scryfall_set_uri: props.cardData.scryfall_set_uri,
                rulings_uri: props.cardData.rulings_uri,
                prints_search_uri: props.cardData.prints_search_uri,
                collector_number: props.cardData.collector_number,
                digital: props.cardData.digital,
                rarity: rarity,
                flavor_text: flavorText,
                card_back_id: props.cardData.card_back_id,
                artist: artist,
                artist_ids: props.cardData.artist_ids,
                illustration_id: props.cardData.illustration_id,
                border_color: props.cardData.border_color,
                frame: props.cardData.frame,
                full_art: props.cardData.full_art,
                textless: props.cardData.textless,
                booster: props.cardData.booster,
                story_spotlight: props.cardData.story_spotlight,
                edhrec_rank: props.cardData.edhrec_rank,
                prices: props.cardData.prices,
                related_uris: props.cardData.related_uris
            }
        )
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
        setPower(event.target.value);
    }
    const handleToughnessChange = (event) => {
        setToughness(event.target.value);
    }
    const handleLoyaltyChange = (event) => {
        setLoyalty(event.target.value);
    }

    return (
        renderForm()
    )

}

export default EditCardForm
