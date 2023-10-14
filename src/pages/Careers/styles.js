import { makeStyles } from "@material-ui/core";
import careerImage from "../../images/careerImage.png";
import careerBackround from "../../images/careerBackground.png";

export const useStyles = makeStyles(theme => ({
  rootContainer: {
    padding: "2em",
  },

  link: {
    color: " black",
  },
  container: {
    boxSizing: "border-box",
    background: "#FFFFFF",
    border: "1px solid rgba(0, 0, 0, 0.15)",
    boxShadow: "0px 100px 80px rgba(49, 49, 49, 0.1)",
    minHeight: "100%",
    padding: "4em",
    lineHeight: "2em",
    paddingBottom: "4em",
    borderLeft: "6px solid #FF9800",
    // height: "18em",
    position: "relative",
  },

  image: {
    background: `url(${careerImage})`,
    height: "30em",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    margin: "4em 4em 0em 4em",
    ["@media (max-width:767px)"]: {
      margin: "7em 2em 2em 2em",
      backgroundPosition: "left",
      height: "7em",
    },
    ["@media (min-width:768px) and  (max-width:1023px)"]: {
      height: "14em",
      margin: " 7em 4em 0em 4em",
    },
  },

  title: {
    fontFamily: "IBM Plex Sans",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "1.6rem",
    lineHeight: "31px",
    color: "#000000",
    marginBottom: "1em",
  },

  role: {
    marginTop: "1em",
    marginBottom: "2em",
    fontSize: ".95em",
    color: "#858080",
    paddingBottom: "2em",
  },

  contentBox: {
    padding: "1em",
    ["@media (max-width:780px)"]: {
      padding: "1em",
    },
  },
  contentBoxTwo: {
    padding: "1em",
    ["@media (max-width:780px)"]: {
      padding: "1em",
    },
  },

  startButn: {
    marginTop: "50px",
    position: "absolute",
    bottom: "2rem",
    backgroundColor: theme.palette.primary.main,
    "&:hover": {
      backgroundColor: theme.palette.secondary.main,
    },
  },

  paragraph: {
    marginTop: 0,
    background: "-webkit-linear-gradient(40deg, #428F9C 20%, #FF9800 80%)",
    WebkitTextFillColor: "transparent",
    WebkitBackgroundClip: "text",
    fontSize: "3em",
    fontWeight: "600",
    padding: "2em 4em",
    textAlign: "center",
    ["@media (max-width:780px)"]: {
      padding: "1em",
      fontSize: "1.5em",
    },
    ["@media (min-width:781px) and  (max-width:1023px)"]: {
      fontSize: "2em",
    },
  },

  jobContainerMain: {
    // background: `url(${careerBackround})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    padding: "0em 5em",
    ["@media (max-width:780px)"]: {
      marginTop: "3em",
      backgroundSize: "100vw 100%",
      padding: "1em",
    },
  },

  jobContainer: {
    marginTop: "6em",
    background: `url(${careerBackround})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    ["@media (max-width:780px)"]: {
      marginTop: "3em",
      backgroundSize: "100% 100%",
    },

    ["@media (min-width:781px) and (max-width:1023px)"]: {
      backgroundSize: "100% 100%",
    },
  },

  headline: {
    fontFamily: "IBM Plex Sans",
    fontSize: "3em",
    textAlign: "center",
    color: " #428F9C",
    marginTop: "2em",
    marginBottom: "1em",
    fontWeight: "600",
    margin: "auto",
    ["@media (max-width:767px)"]: {
      fontSize: "1.8em",
      marginTop: ".6em",
      marginBottom: ".6em",
    },
    ["@media (min-width:767px) and(max-width:1024px)"]: {
      fontSize: "1.8em",
      marginTop: ".6em",
      marginBottom: ".6em",
    },
  },

  profile: {
    background: "-webkit-linear-gradient(40deg, #428F9C 45%, #FF9800 55%)",
    WebkitTextFillColor: "transparent",
    WebkitBackgroundClip: "text",
    fontWeight: "600",
    fontSize: "2.2rem",
    textAlign: "center",
    marginTop: "1em",
    marginBottom: "1em",
    color: "primary",
    ["@media (max-width:780px)"]: {
      fontSize: "1.3em",
    },
  },

  description: {
    textAlign: "center",
    marginBottom: "3em",
    paddingLeft: "3em",
    paddingRight: "3em",
    fontSize: "1rem",
    ["@media (max-width:780px)"]: {
      fontSize: ".8em",
    },
  },

  endButn: {
    padding: "2em,7em",
    margin: "auto",
    marginTop: "2em",
    //color: "primary",
    //marginBottom: "1em",
    background: "#428F9C",
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
      marginTop: "2em",
    },
  },
}));
