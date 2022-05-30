import './App.css';
import axios from 'axios';
import {useState, useEffect} from 'react';

const App = () => {

    const [dbPort, setDbPort] = useState()
    const [cardList, setCardList] = useState([])



    useEffect(()=>{
        axios.get('https://magic-academy-api.herokuapp.com/')
            .then((response) => {
                setDbPort(response.data);
        })
        // axios.get(`http://localhost:3000/cards`)
        //     .then((response) => {
        //         // console.log(response);
        //         setCardList(response.data);
        // })
    })

    const getSampleCards = () => {
        axios.get(`https://magic-academy-api.herokuapp.com:${dbPort}/cards`)
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
                        <li>{card.name}</li>
                    )
                })}
            </ul>

        </>
    )
}

export default App;
