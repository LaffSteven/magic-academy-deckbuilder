import './App.css';
import axios from 'axios';
import {useState, useEffect} from 'react';
import Cards from './components/cards/Cards.js'
import Decks from './components/decks/Decks.js'

const App = () => {

    const [dbPort, setDbPort] = useState()

    useEffect(()=>{
        // axios.get('https://magic-academy-api.herokuapp.com/')
        //     .then((response) => {
        //         setDbPort(response.data);
        // })
        axios.get('https://magic-academy-api.herokuapp.com/')
            .then((response) => {
                setDbPort(response.data);
        })
    })

    return(
    <>
        <section id="header-bar" className="flex-box flex-row justify-spacebetween glassify">
            <div>
                <h1>Welcome to the Magic Academy</h1>
            </div>
            <div>
                <img src="https://www.corbytechnicalschool.org/_files/images/B34A44C0A7347024A4D703C82A9B5BB9.gif" alt="mtg logo"/>
            </div>
        </section>
        <section id="card-section" className="flex-box flex-column flex-nowrap width-100 justify-content-center align-items-center">
            <Cards />
        </section>
        <br/>
        <br/>
        <section id="deck-section" className="flex-box flex-column flex-nowrap width-100 justify-content-center align-items-center glassify">
            <Decks />
        </section>
    </>
    )
}

export default App;
