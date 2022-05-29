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
        axios.get('https://magic-academy-api.herokuapp.com/cards')
            .then((response) => {
                setCardList(cardList);
        })
    })

    return(
        <>

            <p>{dbMessage}</p>

            <ul>
                {cardList.map((card) => {
                    <li>{card}</li>
                })}
            </ul>

        </>
    )
}

export default App;
