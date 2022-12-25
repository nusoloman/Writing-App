import React, { Component, useState } from "react";
import randomWords from "random-words";
import Popup from "./Popup";
import "./index.css";
import { Button, Card, Input, Table } from "reactstrap";
import Timer from './Timer';
import { LEVEL_1_TIME, LEVEL_2_TIME, LEVEL_3_TIME, LEVEL_4_TIME, LEVEL_5_TIME } from "./Constants";

function Words(){

  const [words,setWords] = useState([]);
  const [index,setIndex] = useState(0);
  const [inputValue,setInputValue] = useState("");
  const [backgroundColor,setBackgroundColor] = useState("");
  const [myPlaceHolder,setMyPlaceHolder] = useState("Başlamak için butona tıklayın");
  const [level,setLevel] = useState(1);
  const [timer,setTimer] = useState(false);
  const [seconds,setSeconds] = useState(0);
  const [openPopup,setOpenPopup] = useState(false);


  const handleTimer = (value) => {
    setTimer(value);
  }


  const getWords = () => {
    handleTimer(!timer);
    setLevel(level+1);
    const allWords = document.querySelectorAll('.word');
    allWords.forEach(word => {
      word.style.backgroundColor = 'white';
    });
    
    // const words = randomWords(10);
    switch (level){
      case 1 : {
        setSeconds(LEVEL_1_TIME);
        let words = randomWords(10);
        setWords(words);
        setIndex(0);
      }
      break;
      case 2: {
        let words = randomWords(20);
        setSeconds(LEVEL_2_TIME);
        setOpenPopup(true);
        setWords(words);
        setIndex(0);
      }
      break;
      case 3: {
        let words = randomWords(25);
        setSeconds(LEVEL_3_TIME);
        setOpenPopup(true);
        setWords(words);
        setIndex(0);

      }
      break;
      case 4: {
        let words = randomWords(30);
        setSeconds(LEVEL_4_TIME);
        setOpenPopup(true);
        setWords(words);
        setIndex(0);
        
      }
      break;
      case 5: {
        let words = randomWords(40);
        setSeconds(LEVEL_5_TIME);
        setOpenPopup(true);
        setWords(words);
        setIndex(0);
        
      }
      break;
      default : {
        const words = randomWords(10);
        setWords(words);
        setIndex(0);
      }
    }
    // this.setState({ words });
    // this.setState({index:0});

   
  };

  const checkWord = (e) => {
    document.getElementById(index).style.backgroundColor = "yellow";
    let { value } = e.target;
    setInputValue(value);
    value = value.toLowerCase().split(" ");

    if (value.length === 2) {
      if (words[index] === value[0]) {
        setIndex(index+1);
        document.getElementById(index).style.backgroundColor ="green";
        setInputValue("");
      } else {
        setIndex(index+1);
        document.getElementById(index).style.backgroundColor ="red";
        setInputValue("");
      }
    }
  };

    return (
      <div className="main" style={{ textAlign: "center" }}>

        {timer &&(
      <Timer handleTimer={handleTimer} timer={timer} seconds={seconds} level={level}></Timer> )}
        
        <div style={{ direction: "ltr" }}>
          {words.map((word, index) => (
            <span key={index}>
              <h3
                id={index}
                className="word"
                style={{
                  display: "inline-block",
                  backgroundColor: backgroundColor,
                  margin: "5px",
                }}
              >
                {word}
              </h3>
            </span>
          ))}
        </div>

        <Input
          placeholder={myPlaceHolder}
          id="input"
          type="text"
          onFocus={()=>setMyPlaceHolder("")}
          onBlur={()=>setMyPlaceHolder("Başlamak için butona tıklayınız")}
          value={inputValue}
          onChange={(e) => checkWord(e)}
        ></Input>

       <Popup openPopup={openPopup} setOpenPopup={setOpenPopup}>
          <h1>This popup has triggered.</h1></Popup>

        <Button onClick={getWords}> Get</Button>


        
      </div>
    );
  }


export default Words;
