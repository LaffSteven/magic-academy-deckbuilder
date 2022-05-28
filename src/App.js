import './App.css';
import axios from 'axios';
import {useState, useEffect} from 'react';

const App = () => {

    const [dbMessage, setDbMessage] = useState()
    const [cardMessage, setCardMessage] = useState()
    const [deckMessage, setDeckMessage] = useState()


    useEffect(()=>{
        axios.get('https://magic-academy-api.herokuapp.com/')
            .then((response) => {
                setDbMessage(response.data);
        })
        axios.get('https://magic-academy-api.herokuapp.com/cards/')
            .then((response) => {
                setCardMessage(response.data);
        })
        axios.get('https://magic-academy-api.herokuapp.com/decks/')
            .then((response) => {
                setDeckMessage(response.data);
        })
    })

    const importCardSeed = () => {
        axios.get('http://localhost:3000/cards/data/seed/import')
            .then((response) => {
                console.log("importing card seed data");
            });
    }

    return(
        <>
            <p>{dbMessage}</p>
            <p>{cardMessage}</p>
            <p>{deckMessage}</p>

            <button onClick={(event) => {importCardSeed()}}>Test Import Route</button>

        </>
    )
}

export default App;
