import './App.css';
import axios from 'axios';
import {useState, useEffect} from 'react';
import Cards from './components/cards/Cards.js'

const App = () => {

    const [dbPort, setDbPort] = useState()
<<<<<<< HEAD
    const [cardList, setCardList] = useState([])
    // const [deckList, set DeckList] = useState([])


=======
>>>>>>> 9c70961eea10edf746ba71badb8d9212a1fb4208

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
<<<<<<< HEAD
        <>

            <p>Connected on {dbPort}</p>

            <button onClick={(event) => {getSampleCards()}}> Get Cards </button>
            <ul>
                {cardList.map((card) => {
                    return(
                        <li key={card.id}>
                            <img src={card.image_uris.small}/>
                            <button onClick= {(event) => {cardDelete(card)}}> Delete </button>
                        </li>

                    )
                })}
                {}
            </ul>

        </>
=======
    <>
        <p>App Loaded on port {dbPort}</p>
        <br/>
        <hr/>
        <Cards />
    </>
>>>>>>> 9c70961eea10edf746ba71badb8d9212a1fb4208
    )
}

export default App;
