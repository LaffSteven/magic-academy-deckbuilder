import './App.css';
import axios from 'axios';
import {useState, useEffect} from 'react';
import Cards from './components/cards/Cards.js'

const App = () => {

    const [dbPort, setDbPort] = useState()

    // useEffect(()=>{
    //     // axios.get('https://magic-academy-api.herokuapp.com/')
    //     //     .then((response) => {
    //     //         setDbPort(response.data);
    //     // })
    //     // axios.get('http://localhost:3000/')
    //     //     .then((response) => {
    //     //         setDbPort(response.data);
    //     // })
    // })

    return(
    <>
        <p>App Loaded</p>
        <br/>
        <hr/>
    </>
    )
}

export default App;
