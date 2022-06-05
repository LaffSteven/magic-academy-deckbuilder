import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';
import Card from './Card.js';
import CardSearch from '../searches/CardSearch.js';
import NewCardForm from './NewCard.js'
import './css/style.css'



const Cards = () => {

    const [cards, setCards] = useState([]);
    const [cardSkip, setCardSkip] = useState(0)
    const [currentTab, setCurrentTab] = useState("card-index")

    useEffect(()=>{
        // axios.get(`https://magic-academy-api.herokuapp.com/cards`)
        //     .then((response) => {
        //         // console.log(response.data);
        //         setCards(response.data);
        // })
        if (cards.length == 0) {
            axios.get(`https://magic-academy-api.herokuapp.com/cards?skip=0`)
                .then((response) => {
                    setCardSkip(response.data.length)
                    setCards(response.data);
            })
        }
    }, [])

    const loadMoreCards = () => {
        console.log("Loding more cards");
        axios.get(`https://magic-academy-api.herokuapp.com/cards?skip=${cardSkip}`)
            .then((response) => {
                setCards([...cards, ...response.data])
                setCardSkip(cardSkip + response.data.length);
            })
    }

    const renderCardIndex = () => {
        return (
        <>
            <div className="flex-box flex-column flex-nowrap justify-content-spacearound align-items-center">
                <h2>Card Index</h2>
                <div id="card-index-list" className="flex-box flex-row flex-wrap justify-spacearound overflow-y-scroll">
                    {cards.map((card) => {
                        return(
                            <div key={card.id} > <Card card={card}/> </div>
                        )
                    })}
                </div>
                <button id="load-more-cards-button" onClick={(event) => {loadMoreCards()}}>Load More Cards</button>
            </div>
        </>
        )
    }
    const renderCardSearch = () => {
        return <CardSearch />
    }
    const renderNewCard = () => {
        return <NewCardForm />
    }

    const handleTabChange = (tab) => {
        setCurrentTab(tab);
    }

    return (
    <>
        <nav>
            <button onClick={(event) =>{handleTabChange("card-index")}}>Index</button>
            <button onClick={(event) =>{handleTabChange("card-search")}}>Card Search</button>
            <button onClick={(event) =>{handleTabChange("new-card-form")}}>Create New Card</button>
            {/* section for details */}
            {/* section for edit */}
        </nav>
        {currentTab == "card-index" ? renderCardIndex() : null}
        {currentTab == "card-search" ? renderCardSearch() : null}
        {currentTab == "new-card-form" ? renderNewCard() : null}
    </>
    )
}


export default Cards
