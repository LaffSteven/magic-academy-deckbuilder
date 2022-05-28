import './App.css';
import axios from 'axios';
import {useState, useEffect} from 'react';

const App = () => {

    const [dbMessage, setDbMessage] = useState()


    useEffect(()=>{
        axios.get('https://magic-academy-api.herokuapp.com/')
            .then((response) => {
                setDbMessage(response.data);
            })
    })


    return(
        <>
            <h1>Helo World!</h1>

            <p>{dbMessage}</p>
        </>
    )
}

export default App;
