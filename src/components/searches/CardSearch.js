import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';
import Card from '../cards/Card.js';
import CardInfo from '../cards/CardInfo.js';

const CardSearch = (props) => {

    const [searchResults, setSearchResults] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [displayFor, setDisplayFor] = useState("");
    const [showCardInfo, setShowCardInfo] = useState(false);

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
            <>
                <div className="flex-box flex-row flex-wrap justify-spacearound">
                    {searchResults.map((card) => {
                        console.log(card.name);
                        return(
                            <>
                            {props.origin == "deck" ?
                                <div key={card.id} > <Card card={card} origin={props.origin} getNewCard={props.getNewCard} toggleCardInfo={() => {toggleCardInfo()}} cardList={props.CardList}/> </div>
                            :
                                null
                            }
                            {props.origin == "cards" ?
                                <div key={card.id} > <Card card={card} origin={props.origin} toggleCardInfo={() => {toggleCardInfo()}}/> </div>
                            :
                                null
                            }
                            </>

                        )
                    })}
                </div>
            </>
        )
    }

    const toggleCardInfo = () => {
        setShowCardInfo(!showCardInfo);
        console.log(showCardInfo);
        console.log(props.origin);
    }

    return (
    <>
        <form onSubmit={handleSearchSubmit}>
            Card Name: <input type="text" onChange={handleSearchTermChange}/>
            <input type="submit" value="Search"/>
        </form>
        <br/>
        <hr/>

        {renderSearchResults()}
    </>
    )

}

export default CardSearch


// {searchResults.map((card) => {
//     <img src={card.image_uris.small}/>
// })}
