import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';
import Card from '../cards/Card.js'

const CardSearch = () => {

    const [searchResults, setSearchResults] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [displayFor, setDisplayFor] = useState("");

    const searchByName = (name) => {
        axios.get(`https://magic-academy-api.herokuapp.com/cards/search?name=${searchTerm}`)
            .then((response) => {
                setSearchResults(response.data);
                console.log(searchResults);
        })
    }

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        if (searchTerm) {
            searchByName(searchTerm);
        }
    }

    const handleSearchTermChange = (event) => {
        setSearchTerm(event.target.value);
    }

    const renderSearchResults = () => {
        return (
            <ul>
                {searchResults.map((card) => {
                    return <li>{card.name}</li>
                })}
            </ul>
        )
    }

    return (
    <>
        <form onSubmit={handleSearchSubmit}>
            Card Name: <input type="text" onChange={handleSearchTermChange}/>
            <input type="submit" value="Search"/>
        </form>
        <br/>
        <p>{searchResults.length} results for "{searchTerm}"</p>
        <hr/>

        {renderSearchResults()}
    </>
    )

}

export default CardSearch


// {searchResults.map((card) => {
//     <img src={card.image_uris.small}/>
// })}
