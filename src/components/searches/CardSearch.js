import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';
import Card from '../cards/Card.js'

const CardSearch = () => {

    const [searchResults, setSearchResults] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    const searchByName = (name) => {
        axios.get(`http://localhost:3000/cards/search?name=${searchTerm}`)
            .then((response) => {
                // setSearchResults(response.data);
                console.log(response.data);
                console.log(`Found ${response.data.length} Results`);
            });
    }
    const handleSearchSubmit = (event) => {
        event.preventDefault();
        if (searchTerm) {
            console.log(`Searching for ${searchTerm}`);
            searchByName(searchTerm);
        } else {
            console.log(`No Results found for ${searchTerm}`);
            setSearchResults()
        }

    }

    const handleSearchTermChange = (event) => {
        setSearchTerm(event.target.value);
    }

    const renderSearchResults = () => {
            return (
                <div>
                    <h3>Search Results</h3>
                    <br/>
                    <div>
                    {searchResults.map((card) => {
                        <img src={card.image_uris.small}/>
                    })}
                    </div>
                </div>
            )
    }

    return (
    <>
        <form onSubmit={handleSearchSubmit}>
            Card Name: <input type="text" onChange={handleSearchTermChange}/>
            <input type="submit" value="Search"/>
        </form>
        <div>
            <h3>Search Results</h3>
            <br/>
            <div>
            {searchResults.map((card) => {
                <img src={card.image_uris.small}/>
            })}
            </div>
        </div>
    </>
    )

}

export default CardSearch
