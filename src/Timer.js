import React, { Component } from 'react'
import ProgressBar from "react-bootstrap/ProgressBar";
import { useState, useEffect } from "react";
import { LEVEL_1_TIME } from './Constants';

const Timer = ({ seconds }) => {
  // initialize timeLeft with the seconds prop
  const [timeLeft, setTimeLeft] = useState(LEVEL_1_TIME);

  useEffect(() => {
    // exit early when we reach 0
    if (!timeLeft) return;

    // save intervalId to clear the interval when the
    // component re-renders
    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    // clear interval on re-render to avoid memory leaks
    return () => clearInterval(intervalId);
    // add timeLeft as a dependency to re-rerun the effect
    // when we update it
  }, [timeLeft]);

  return (
    <div>
      <ProgressBar now={(LEVEL_1_TIME-timeLeft)/LEVEL_1_TIME*100}></ProgressBar>
      <h1 style={{ textAlign:"center"}}>{timeLeft}</h1>
    </div>
  );
};

export default Timer;