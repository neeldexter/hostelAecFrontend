import React, { useState } from "react";
import Countdown from "react-countdown";
import { timerSet } from "../../recoilGlobal/timertracker";
import { useRecoilState } from "recoil";

import { useStyles } from "./styles";

const CountDownTimer = React.memo(({ settimerClock, timerClock }) => {
  const classes = useStyles();
  const [timer, setTimer] = useRecoilState(timerSet);
  const [completed, setCompleted] = useState(null);

  const Completionist = () => (
    <span className={classes.timerSetExpired}>Time expired !!</span>
  );
  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      setTimer(false);
      setCompleted(true);
    } else {
      return (
        <span className={classes.timerSet}>
          Expires in {minutes}:{seconds} minutes
        </span>
      );
    }
  };

  if (completed === true) {
    return <Completionist />;
  } else if (completed === null) {
    return <Countdown date={Date.now() + 120000} renderer={renderer} />;
  }
});

export default CountDownTimer;
