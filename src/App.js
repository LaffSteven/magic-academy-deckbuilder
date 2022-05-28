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


    return(
        <>
            <h1>Helo World!</h1>

            <p>{dbMessage}</p>
            <p>{cardMessage}</p>
            <p>{deckMessage}</p>

        </>
    )
}

export default App;
