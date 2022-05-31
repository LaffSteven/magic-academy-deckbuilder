import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';
import Card from '../cards/Card.js'

const CardSearch = () => {

    const [searchResults, setSearchResults] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    const searchByName = (name) => {
        // axios.get(`https://magic-academy-api.herokuapp.com/cards/search?name=${searchTerm}`)
        //     .then((response) => {
        //         // setSearchResults(response.data);
        //         console.log(response.data);
        //         console.log(`Found ${response.data.length} Results`);
        //         setSearchResults(response.data);
        //         searchResults.forEach((card, i) => {
        //             console.log(card.name);
        //         });
        // });
        axios.get(`http://localhost:3000/cards/search?name=${searchTerm}`)
            .then((response) => {
                // setSearchResults(response.data);
                console.log(response.data);
                console.log(`Found ${response.data.length} Results`);
                setSearchResults(response.data);
                searchResults.forEach((card, i) => {
                    console.log(card.name);
                });
        });
    }
<<<<<<< HEAD

=======
    
>>>>>>> 084c13fbbf0858107ed7cb394ad5aa6e459ad232
    const handleSearchSubmit = (event) => {
        event.preventDefault();
        if (searchTerm) {
            console.log(`Searching for ${searchTerm}`);
            searchByName(searchTerm);
        } else {
            console.log(`No Results found for ${searchTerm}`);
        }

    }

    const handleSearchTermChange = (event) => {
        setSearchTerm(event.target.value);
    }

    return (
    <>
        <form onSubmit={handleSearchSubmit}>
            Card Name: <input type="text" onChange={handleSearchTermChange}/>
            <input type="submit" value="Search"/>
        </form>
        <br/>
        <p>{searchResults.length} results for {searchTerm}</p>
        <hr/>

        <ul>
            {searchResults.map((card) => {<li key={card.id}> {card.name} </li>})}
        </ul>
    </>
    )

}

export default CardSearch


// {searchResults.map((card) => {
//     <img src={card.image_uris.small}/>
// })}
