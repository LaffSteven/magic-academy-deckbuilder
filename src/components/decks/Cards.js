import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';
import './css/style.css'
import CardInfo from './CardInfo.js'



const Cards = (props) => {


    const [cardListObj, setCardListObj] = useState(props.cardListObj);
    const [arr, setArr] = useState([])
    const [cardState, setCardState] = useState("")
    let card = ``

    const array = []

    const handleArr = () => {
      let arrayLength = array.length + cardListObj.length
      for(let i = 0; i < arrayLength; i++){
        if(array[i] === cardListObj[i]){}
        else if (array[i] !== cardListObj[i]) {
          array[i] = cardListObj[i]

        }
      }
      setArr(array)
      console.log(arr);

    }

    const log = () => {
      console.log(cardListObj.cardList)
    }

    const listCards = (cardListObj) => {
      console.log(cardListObj.cardList[0])
      for(let i = 0; i<cardListObj.cardList.length; i++){
          card = (card + `${cardListObj.cardList[i].card_name} `)

      }
      setCardState(card)
      console.log(cardListObj)

    }

    return (
    <>

    <button onClick={(event) => {log()}}>card list</button>
    <p>{cardState}</p>

    </>
    )
}


export default Cards
