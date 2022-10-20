import React, { Component } from "react";
import randomWords from "random-words";

import { Button, Card, Input, Table } from "reactstrap";
import Timer from './Timer';

export default class Words extends Component {
  state = {
    words: [],
    index: 0,
    inputValue: "",
    backgroundColor: "",
    myPlaceHolder: "Başlamak için butona tıklayınız",
    level:1,
  };

  onFocus = () => {
    document.getElementById("input").placeholder = "";
  }

  blurHandler() {
    document.getElementById("input").placeholder =
      "Başlamak için butona tıklayınız";
  }

  getWords = () => {
    this.setState({level:this.state.level+1});
    const allWords = document.querySelectorAll('.word');
    allWords.forEach(word => {
      word.style.backgroundColor = 'white';
    });
    
    // const words = randomWords(10);
    switch (this.state.level){
      case 1 : {
        let words = randomWords(10);
        this.setState({ words });
        this.setState({index:0});
      }
      break;
      case 2: {
        let words = randomWords();
        this.setState({ words });
        this.setState({index:0});
      }
      break;
      default : {
        const words = randomWords(10);
        this.setState({ words });
        this.setState({index:0});
      }
    }
    // this.setState({ words });
    // this.setState({index:0});

   
  };

  checkWord = (e) => {
    document.getElementById(this.state.index).style.backgroundColor = "yellow";
    const { words } = this.state;
    let { value } = e.target;
    this.setState({ inputValue: value });
    value = value.toLowerCase().split(" ");
    console.log(value);

    if (value.length === 2) {
      if (words[this.state.index] === value[0]) {
        console.log("true");
        this.setState({ index: this.state.index + 1 });
        document.getElementById(this.state.index).style.backgroundColor =
          "green";
        this.setState({ inputValue: "" });
      } else {
        console.log("false");
        this.setState({ index: this.state.index + 1 });
        document.getElementById(this.state.index).style.backgroundColor = "red";
        this.setState({ inputValue: "" });
      }
    }
  };

  render() {
    return (
      <div style={{ textAlign: "center" }}>

      <Timer></Timer>
        
        <div style={{ direction: "ltr" }}>
          {this.state.words.map((word, index) => (
            <span>
              <h3
                id={index}
                className="word"
                style={{
                  display: "inline-block",
                  backgroundColor: this.state.backgroundColor,
                  margin: "5px",
                }}
              >
                {word}
              </h3>
            </span>
          ))}
        </div>

        <Input
          placeholder={this.state.myPlaceHolder}
          id="input"
          type="text"
          onFocus={this.onFocus}
          onBlur={this.blurHandler}
          value={this.state.inputValue}
          onChange={(e) => this.checkWord(e)}
        ></Input>

        <Button onClick={this.getWords}> Get</Button>


        
      </div>
    );
  }
}
