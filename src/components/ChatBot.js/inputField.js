import React from "react";
import { useStyles } from "./styles";

const InputField = ({ textInput, handleChange,...props }) => {
  const classes = useStyles();
  return (
    <>
      <input
        className={classes.inputField}
        type="text"
        value={textInput}
        placeholder="Type something here.."
        onChange={handleChange}
        {...props}
      />
    </>
  );
};

export default InputField;
