import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(() => ({
  clientPageImage: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: "3em",
    paddingLeft: "4em",
    paddingRight: "4em",

    ["@media (min-width:320px) and (max-width:768px)"]: {
      position: "relative",
      // padding: "0.6em",
      padding: "1em 1.5em 0 1.5em",
      height: "auto",
      marginTop: "5.2em",
    },

    ["@media (min-width:769px) and (max-width:1199px)"]: {
      marginTop: "4.2em",
      padding: "3em 2em",
    },
  },

  secondTitle: {
    marginTop: "2em",
    // marginBottom: "2em",
    background: "-webkit-linear-gradient(40deg, #428F9C 30%, #FF9800 80%)",
    WebkitTextFillColor: "transparent",
    WebkitBackgroundClip: "text",
    fontSize: "1.15em",
    padding: "2em 4em",
    textAlign: "center",

    ["@media (min-width:320px) and (max-width:576px)"]: {
      fontSize: "0.7em",
    },

    ["@media (min-width:577px) and (max-width:768px)"]: {
      padding: "2em 1.5em",
      marginBottom: "1em",
      marginTop: "1em",
    },

    ["@media (min-width:1024px) and (max-width:1200px)"]: {
      padding: "2em 3em",
    },

    ["@media (min-width: 769px) and (max-width:1199px)"]: {
      marginTop: "0em",
    },
  },

  btn: {
    backgroundColor: " #428F9C",
    fontSize: "0.9em",
    color: "#FFFFFF",
  },

  btnGrid: {
    display: "flex",
    justifyContent: "center",
  },

  iconGrid: {
    marginTop: "7em",
    // marginBottom: "2em",
    // paddingLeft: "2em",
    justifyContent: "center",
    rowGap: "3.5em",
  },

  imgStyles: {
    maxWidth: "24.8",
    height: "5em",
  },
  imgDiv: {
    display: "flex",
    justifyContent: "center",
  },

  tagLine: {
    marginTop: ".2em",
    // marginBottom: "1.2em",
    color: "#428F9C",
    fontWeight: "900",
    lineHeight: "1.2em",
    fontSize: "2.1em",
    padding: "0 0.5em",
    alignItems: "center",
    alignContent: "center",

    ["@media (min-width:320px) and (max-width:576px)"]: {
      padding: "0 0",
      fontSize: "2em",
    },

    ["@media (min-width:577px) and (max-width:768px)"]: {
      textAlign: "center",
      // marginBottom: "1em",
      fontSize: "1.5em",
    },

    ["@media (min-width: 769px) and (max-width:1023px)"]: {
      fontSize: "1.7em",
      marginTop: "0em",
      marginBottom: "0em",
    },
  },

  footer: {
    marginTop: "4em",
    padding: "1em 10em",
    background: "#428F9C",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    ["@media (max-width:780px)"]: {
      padding: "1em",
    },
  },
}));
