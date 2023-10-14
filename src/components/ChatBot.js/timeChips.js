import React, { useEffect } from "react";
import Chip from "@material-ui/core/Chip";

import { useStyles } from "./styles";

const TimeChips = ({ times, handleTime, timer }) => {
  const classes = useStyles();
  let localTime = [];

  times.map((item, key) => {
    let DateVal = new Date(item + "+05:30");
    localTime.push(DateVal.toLocaleString("en-US", { hour12: true }));
  });

  return (
    <div>
      <div className={classes.chipBox}>
        {localTime.map((item, key) => (
          <div className={classes.chipIndividual}>
            <Chip
              label={item}
              color={timer ? "primary" : "gery"}
              onClick={timer ? () => handleTime(times[key], item) : null}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimeChips;
