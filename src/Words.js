import React, { Component } from "react";
import randomWords from "random-words";

import { Button, Card, Input, Table } from "reactstrap";

export default class Words extends Component {
  state = {
    words: [],
    index: 0,
    inputValue: "",
    backgroundColor: "",
    myPlaceHolder: "Başlamak için butona tıklayınız",
  };

  onFocus = () => {
    document.getElementById("input").placeholder = "";
  };

  blurHandler() {
    document.getElementById("input").placeholder =
      "Başlamak için butona tıklayınız";
  }

  getWords = () => {
    const allWords = document.querySelectorAll(".word");
    allWords.forEach((word) => {
      word.style.backgroundColor = "white";
    });

    const words = randomWords(10);
    this.setState({ words });
    this.setState({ index: 0 });
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
        <Card>
          {this.state.words.map((word, index) => (
            <div>
              <h3
                id={index}
                className="word"
                style={{
                  display: "inline-block",
                  backgroundColor: this.state.backgroundColor,
                }}
              >
                {word}
              </h3>
            </div>
          ))}
        </Card>

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
