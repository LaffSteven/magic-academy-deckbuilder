import './App.css';
import axios from 'axios';
import {useState, useEffect} from 'react';

const App = () => {

    const [dbMessage, setDbMessage] = useState()
    const [cardList, setCardList] = useState([])



    useEffect(()=>{
        axios.get('https://magic-academy-api.herokuapp.com/')
            .then((response) => {
                setDbMessage(response.data);
        })
        axios.get(`https://magic-academy-api.herokuapp.com:${dbMessage}/cards`)
            .then((response) => {
                // console.log(response);
                setCardList(response.data);
        })
    })

    const getSampleCards = () => {
        axios.get(`http://localhost:3000/cards`)
            .then((response) => {
                // console.log(response);
                setCardList(response.data);
        })
    }

    return(
        <>

            <p>{dbMessage}</p>

            <button onClick={(event) => {getSampleCards()}}> Get Cards </button>
            <ul>
                {cardList.map((item) => {
                    return(
                        <li>{item}</li>
                    )
                })}
            </ul>

        </>
    )
}

export default App;
