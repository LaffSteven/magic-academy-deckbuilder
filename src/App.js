import './App.css';
import axios from 'axios';
import {useState, useEffect} from 'react';
import Cards from './components/cards/Cards.js'

const App = () => {

    const [dbPort, setDbPort] = useState()
    // const [cardList, setCardList] = useState([])
    // const [deckList, set DeckList] = useState([])



    useEffect(()=>{
        axios.get('https://magic-academy-api.herokuapp.com/')
            .then((response) => {
                setDbPort(response.data);
        })
        // axios.get('http://localhost:3000/')
        //     .then((response) => {
        //         setDbPort(response.data);
        // })

    })

    useEffect(()=>{
        axios.get('http://localhost:3000/deck')
      })


    const cardDelete = (cardData) => {
      console.log(cardData._id);
      axios.delete(`http://localhost:3000/cards/${cardData._id}`)
        // .then(() => {
        // axios.get(`http://localhost:3000/cards`).then((response) => {
        //   setCardList(response.data)
        // })
      // })
    }

    return(
    <>
        <p>App Loaded on port {dbPort}</p>
        <br/>
        <hr/>
        <Cards />
        <p>end of populated cards</p>
    </>
    )
}

export default App;
