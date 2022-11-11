import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import { useState, useEffect } from "react";
import { TIME_FOR_LEVELS } from "./Constants";

const Timer = (props) => {
  // initialize timeLeft with the seconds prop
  const [timeLeft, setTimeLeft] = useState(0);
  if (timeLeft === 0) {
    setTimeLeft(props.seconds);
  }
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
      <ProgressBar
        now={
          ((TIME_FOR_LEVELS[props.level - 2] - timeLeft) /
            TIME_FOR_LEVELS[props.level - 2]) *
          100
        }
      ></ProgressBar>
      <h1 style={{ textAlign: "center" }}>{timeLeft}</h1>
      {/* <h1 style={{ textAlign:"center"}}>{TIME_FOR_LEVELS[props.level-1]}</h1> */}
    </div>
  );
};

export default Timer;
