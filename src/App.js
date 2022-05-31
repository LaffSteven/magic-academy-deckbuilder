import './App.css';
import axios from 'axios';
import {useState, useEffect} from 'react';

const App = () => {

    const [dbPort, setDbPort] = useState()
    const [cardList, setCardList] = useState([])
    const [deckList, set DeckList] = useState([])



    useEffect(()=>{
        // axios.get('https://magic-academy-api.herokuapp.com/')
        //     .then((response) => {
        //         setDbPort(response.data);
        // })
        axios.get('http://localhost:3000/')
            .then((response) => {
                setDbPort(response.data);
        })
        // axios.get(`http://localhost:3000/cards`)
        //     .then((response) => {
        //         setCardList(response.data);
        // })
    })

    const getSampleCards = () => {
        // axios.get(`https://magic-academy-api.herokuapp.com/cards`)
        //     .then((response) => {
        //         console.log(response);
        //         setCardList(response.data);
        // })
        axios.get(`http://localhost:3000/cards`)
            .then((response) => {
                console.log(response);
                setCardList(response.data);
        })
    }

    return(
        <>

            <p>Connected on {dbPort}</p>

            <button onClick={(event) => {getSampleCards()}}> Get Cards </button>
            <ul>
                {cardList.map((card) => {
                    return(
                        <li key={card.id}>{card.name}</li>
                    )
                })}
                {}
            </ul>

        </>
    )
}

export default App;
