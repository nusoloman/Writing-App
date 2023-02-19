import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import { useState, useEffect, useRef } from "react";
import { TIME_FOR_LEVELS } from "./Constants";

function Timer({
  level,
  timerState,
  setOpenPopup,
  setTimerState,
  setLeftTimeForPopup,
}) {
  const counterCB = async (timeLeft) => {
    setTimeLeft(timeLeft);
    setLeftTimeForPopup(timeLeft);
    if (timeLeft === 0) {
      clock.stop();
      setOpenPopup(true);
      setTimerState(false);
    }
  };
  const [timeLeft, setTimeLeft] = useState(TIME_FOR_LEVELS[level]);
  const clock = useRef(new Stopwatch(counterCB)).current;

  useEffect(() => {
    setTimeLeft(TIME_FOR_LEVELS[level]);
  }, [level]);

  useEffect(() => {
    if (timerState) {
      clock.start(counterCB, level);
    } else {
      clock.stop();
    }
  }, [timerState]);

  return (
    <div>
      <ProgressBar
        now={
          ((TIME_FOR_LEVELS[level] - timeLeft) / TIME_FOR_LEVELS[level]) * 100
        }
      ></ProgressBar>
      <h1 style={{ textAlign: "center" }}>{timeLeft} </h1>
      {/* <h1 style={{ textAlign:"center"}}>{TIME_FOR_LEVELS[props.level-1]}</h1> */}
    </div>
  );
}

class Stopwatch {
  constructor(handler) {
    this.interval = 0;
    this.resetHandler = handler ?? (() => {});
    this.isCounting = false;
  }

  *makeCounter(number) {
    var c = number;
    while (this.isCounting) {
      yield c--;
      if (c < 1) {
        clearInterval(this.interval);
        this.resetHandler();
      }
    }
  }

  start(handler, level) {
    this.isCounting = true;
    const counter = this.makeCounter(TIME_FOR_LEVELS[level]);
    this.interval = setInterval(() => {
      const { value } = counter.next();
      handler(value ?? 0);
    }, 1000);
  }

  reset() {
    clearInterval(this.interval);
    this.resetHandler();
    this.isCounting = false;
  }
  stop() {
    this.isCounting = false;
    clearInterval(this.interval);
  }
}

export default Timer;
