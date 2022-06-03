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
        <p>App Loaded on port {dbPort}</p>
        <br/>
        <hr/>
        <section id="card-section" className="flex-box flex-column flex-nowrap width-100 justify-content-center align-items-center">
            <Cards />
        </section>
        <br/>
        <hr/>
        <br/>
        <section id="deck-section" className="flex-box flex-column flex-nowrap width-100 justify-content-center align-items-center">
            <Decks />
        </section>
    </>
    )
}

export default App;
