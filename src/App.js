import './App.css';
import axios from 'axios';
import {useState, useEffect} from 'react';
import Cards from './components/cards/Cards.js'

const App = () => {

    const [dbPort, setDbPort] = useState()

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

    return(
    <>
        <p>App Loaded on port {dbPort}</p>
        <br/>
        <hr/>
        <Cards />
    </>
    )
}

export default App;
