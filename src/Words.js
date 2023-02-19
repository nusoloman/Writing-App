import React, { useState } from "react";
import randomWords from "random-words";
import Popup from "./Popup";
import "./index.css";
import { Button, Container, Input } from "reactstrap";
import Timer from "./Timer";
import {
  LEVEL_1_TIME,
  LEVEL_2_TIME,
  LEVEL_3_TIME,
  LEVEL_4_TIME,
  LEVEL_5_TIME,
} from "./Constants";

function Words() {
  const [words, setWords] = useState([]);
  const [index, setIndex] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [backgroundColor, setBackgroundColor] = useState("");
  const [myPlaceHolder, setMyPlaceHolder] = useState(
    "Başlamak için butona tıklayın"
  );
  const [level, setLevel] = useState(0);
  const [timerState, setTimerState] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [openPopup, setOpenPopup] = useState(false);
  const [trueValue, setTrueValue] = useState(0);
  const [falseValue, setFalseValue] = useState(0);
  const [initialValue, setInitialValue] = useState(0);

  const getWords = () => {
    setTimerState(true);
    const allWords = document.querySelectorAll(".word");
    allWords.forEach((word) => {
      word.style.backgroundColor = "#f5f5f5";
    });

    // const words = randomWords(10);
    switch (level) {
      case 1:
        {
          setSeconds(LEVEL_1_TIME);
          let words = randomWords(10);
          setInitialValue(10);
          setWords(words);
          setIndex(0);
        }
        break;
      case 2:
        {
          let words = randomWords(20);
          setInitialValue(20);
          setSeconds(LEVEL_2_TIME);
          setOpenPopup(false);
          setWords(words);
          setIndex(0);
        }
        break;
      case 3:
        {
          let words = randomWords(25);
          setInitialValue(25);
          setSeconds(LEVEL_3_TIME);
          setOpenPopup(false);
          setWords(words);
          setIndex(0);
        }
        break;
      case 4:
        {
          let words = randomWords(30);
          setInitialValue(30);
          setSeconds(LEVEL_4_TIME);
          setOpenPopup(false);
          setWords(words);
          setIndex(0);
        }
        break;
      case 5:
        {
          let words = randomWords(40);
          setInitialValue(40);
          setSeconds(LEVEL_5_TIME);
          setOpenPopup(false);
          setWords(words);
          setIndex(0);
        }
        break;
      default: {
        const words = randomWords(10);
        setInitialValue(10);
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
        setIndex(index + 1);
        document.getElementById(index).style.backgroundColor = "green";
        setTrueValue(trueValue + 1);
        setInitialValue(initialValue - 1);
        setInputValue("");
        if (words.length === index + 1) {
          setOpenPopup(true);
          setTimerState(false);
        }
      } else {
        setIndex(index + 1);
        document.getElementById(index).style.backgroundColor = "red";
        setFalseValue(falseValue + 1);
        setInitialValue(initialValue - 1);
        setInputValue("");
        if (words.length === index + 1) {
          setOpenPopup(true);
          setTimerState(false);
        }
      }
    }
  };

  return (
    <div className="main">
      <Container>
        <Timer
          level={level}
          timerState={timerState}
          setOpenPopup={setOpenPopup}
          setTimerState={setTimerState}
        />

        <div
          style={{
            direction: "ltr",
            position: "absolute",
            top: "5em",
            width: "80em",
            paddingTop: "35px",
            textAlign: "center",
          }}
        >
          {words.map((word, index) => (
            <span key={index}>
              <h3
                id={index}
                className="word"
                style={{
                  display: "inline-block",
                  backgroundColor: backgroundColor,
                  margin: "5px",
                  borderRadius: "5px",
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
          onFocus={() => setMyPlaceHolder("")}
          onBlur={() => setMyPlaceHolder("Başlamak için butona tıklayınız")}
          value={inputValue}
          onChange={(e) => checkWord(e)}
          style={{ position: "absolute", top: "40%", maxWidth: "80em" }}
        />

        <Popup
          openPopup={openPopup}
          setOpenPopup={setOpenPopup}
          getWords={getWords}
          timerState={timerState}
          trueValue={trueValue}
          setTrueValue={setTrueValue}
          falseValue={falseValue}
          setFalseValue={setFalseValue}
          initialValue={initialValue}
          setInitialValue={setInitialValue}
          level={level}
          setLevel={setLevel}
        />

        <Button
          style={{ position: "absolute", top: "50%", width: 80, left: "47%" }}
          onClick={getWords}
        >
          Get
        </Button>
      </Container>
    </div>
  );
}

export default Words;
