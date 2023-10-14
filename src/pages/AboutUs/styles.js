import {makeStyles} from "@material-ui/core";
import aboutPage from "../../images/aboutPage.png";

export const useStyles = makeStyles(() => ({

  mainContainer:{
    backgroundColor: "#9DB8CC"
  },
  backgroundImage: {
    background: `url(${aboutPage})`,
    height: "30em",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    margin: "4em 4em 0em 4em",
    ["@media (max-width:767px)"]: {
      margin: "6em 2em 2em 2em",
      height: "7em",
    },

    ["@media (min-width:768px) and (max-width:1023px)"]: {
      margin: "7em 2em 2em 2em",
      height: "15em",
    },
  },

  firstContainer: {
    textAlign: "center",
    padding: "0em 8em",
    marginBottom: "6em",
    ["@media (max-width:780px)"]: {
      padding: ".5em",
       marginBottom: "0em",
      marginTop:"5em"
    },
  },

  title: {
    marginTop: "2em",
    marginBottom: "1em",
    background: "-webkit-linear-gradient(40deg, #0e086c 40%, #2c2cf4 60%)",
    WebkitTextFillColor: "transparent",
    WebkitBackgroundClip: "text",
    fontSize: "3em",
    fontWeight: "600",
    textAlign: "center",
    ["@media (max-width:780px)"]: {
      // marginTop: "-0.8em",
      fontSize: "1.5em",
    },
    ["@media (min-width:780px) and  (max-width:1023px)"]: {
      fontSize: "2.1em",
    },
  },

  firstParagraph: {
    marginBottom: "2em",
    fontWeight: "700",
    fontSize: "1.3em",
    color: "#0E0E0E",
    fontFamily: "IBM Plex Sans",
    fontStyle: "normal",
    lineHeight: "150%",
    textAlign: "justify",

    ["@media (max-width:780px)"]: {
      padding: "0em 1em",
      fontSize: ".8em",
    },
  },

  containerTitle: {
    marginTop: "1em",
    marginBottom: "1em",
    background: "-webkit-linear-gradient(40deg, #428F9C 40%, #FF9800 60%)",
    WebkitTextFillColor: "transparent",
    WebkitBackgroundClip: "text",
    fontSize: "3em",
    fontWeight: "600",
    textAlign: "center",
    ["@media (max-width:767px)"]: {
      marginTop: "1.5em",
      fontSize: "1.5em",
    },
    ["@media (min-width:768px) and (max-width:1023px)"]: {
      fontSize: "2.1em",
    },
  },

  secondParagraph: {
    fontFamily: "IBM Plex Sans",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "19px",
    lineHeight: "185%",
    textAlign: "justify",
    // color: "#5F5F5F",
    marginBottom: "2em",

    ["@media (max-width:780px)"]: {
      marginTop: "1em",
      padding: "1em",
      fontSize: ".7em",
    },
  },

  secondContainer: {
    // border:"0px dotted red",
    position: "relative",
    // background: "#FFF5E6",
    textAlign: "center",
    padding: "1em 3em",
    backgroundSize: "100% 100%",
    ["@media (max-width:1024px)"]: {
      padding: "1em",
      fontSize:"1.1em"
    },
    position: "relative",
  },

  top: {
    position: "absolute",
    top: "0",
    left: "0",
    height: "5em",
    ["@media (max-width:780px)"]: {
      height: "3.8em",
    },
  },

  end: {
    height: "5em",
    position: "absolute",
    bottom: "0",
    right: "0",
    ["@media (max-width:768px)"]: {
      height: "3.8em",
    },
  },

  firstInfo: {
    marginTop: "3em",
    marginBottom: "6em",
    justifyContent: "center",
    gap: "1.5em",
  },
  hiddenCard: {
    position: "absolute",
    width: "100%",
    left: "0em",
    top: "80%",
    fontSize: "1em",
    padding: "0em 3.5em",
    boxSizing: "border-box",
    background: "#FF9800",
    zIndex: 900,
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    transition: "all 0.5s ease",
    color: "#FFFFFF",
  },

  infoContainer: {
    overflow: "hidden",
    position: "relative",
    maxWidth: "50%",
    boxSizing: "border-box",
    background: "#FFFFFF",
    border: "1px solid rgba(0, 0, 0, 0.15)",
    // minHeight: "100%",
    // padding: "1.5em 1em",
    lineHeight: "2em",
    borderRadius: "10px",
    ["@media (max-width:780px)"]: {
      fontSize: "0.8em",
      maxWidth: "100%",
      marginTop:"1em"
    },

    ["@media (max-width:820px)"]: {
      maxWidth: "100%",
    },
  },

  infoContainerTHEME:{
    overflow: "hidden",
    position: "relative",
    // maxWidth: "30%%",
    boxSizing: "border-box",
    background: "#FFFFFF",
    border: "1px solid rgba(0, 0, 0, 0.15)",
    minHeight: "100%",
    padding: "1em 1em",
    lineHeight: "2em",
    borderRadius: "10px",
    ["@media (max-width:780px)"]: {
      fontSize: "0.8em",
      maxWidth: "100%",
    },

    ["@media (max-width:820px)"]: {
      maxWidth: "100%",
    },
  },

  registrationFeesContainer:{
    // backgroundColor:"white",
    padding: "0 1em",
    // border:'1px solid blue'
  },

  bankDetailsContainer:{
    // backgroundColor:"aqua",
    // border:'1px solid red'
  },

  bankDetails:{
    // display:"flex",
    justifyContent:"center",
    padding:"5em 1em"
  },

  my_table: {
    display: "flex",
    flexDirection: "column",
    // border: "2px solid #313131",
    background: "white",
    borderRadius: "10px",
    padding: "1em",
    boxShadow: "4px 6px 10px 0px #504a4a",
    // padding: "5px",
  },
  
  my_row: {
    display:"flex"
  },
  
  my_cell: {
    flex: "1",
    padding: "5px",
    border: "0px solid #ccc",
  },

  hoverCard: {
    top: 0,
  },

  firstImage: {
    marginTop: "2em",
  },

  firstTitle: {
    color: "#FF9800",
    fontWeight: "700",
    marginTop: "2em",
    textAlign: "center"
  },

  firstTitleThematic: {
    color: "#FF9800",
    fontWeight: "700",
    margin: "1em 0",
    textAlign: "center"
  },

  firstDescription: {
    margin: "1em",
    textAlign: "justify",
    fontSize: ".9em",
    color: "#5F5F5F",
    marginBottom: "2em",
    lineHeight: "2em",
    ["@media (max-width:767px)"]: {
      padding: "1em",
      fontSize: ".9em",
    },
  },

  secondInfo: {
    justifyContent: "center",
    border:'0px dotted blue',
  },

  secondinfoContainer: {
    width: "450px",
    paddingTop: "4em",
    minHeight: "100%",
    lineHeight: "2em",
    borderRadius: "10px",
    textAlign: "center",
  },
  secondTitle: {
    textAlign: "center",
    fontWeight: "600",
  },

  secondTitleHowToReach:{
    textAlign: "center",
    fontWeight: "600",
    // border:"1px solid red"
  },

  secondDescription: {
    margin: "2em 1em",
    textAlign: "center",
  },

  thiredContanier:{
    // border:"5px solid red",
    // height: '300px',
    padding: "3em 3em",
    justifyContent: "center",
    ["@media (max-width:767px)"]: {
      padding: "1em"
    },
  },

  thematicAreasContainer:{
    // border:'1px solid red',
    padding: "5em 5em",
    textAlign: "center",
    marginBottom: "3em",
    ["@media (max-width:780px)"]: {
      padding: ".5em",
      marginBottom: "1em",
    },
  },

  lastParagraph: {
    textAlign: "center",
    padding: "2em 15em ",
    fontWeight: "500",
    background: "linear-gradient(90deg, #428F9C 30%, #FF9800 70%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    textFillColor: "transparent",
    // ["@media (max-width:1024px)"]: {
    //   padding: "1em",
    //   fontSize: "1.5em",
    // },

    ["@media (max-width:767px)"]: {
      padding: "1em",
      fontSize: "1.5em",
    },
    ["@media (min-width:768px) and (max-width:1023px)"]: {
      padding: "2em",
      fontSize: "1.5em",
    },
  },

  videoContainer: {
    display: "flex",
    justifyContent: "center",
  },

  aboutVideo: {
    width: "1272px",
    height: "500px",
    top: "3057px",
    marginTop: "70px",
    marginBottom: "120px",
    background: "#D9D9D9",

    ["@media (max-width:767px)"]: {
      width: "315px",
      height: "139px",
      marginTop: "32px",
      marginBottom: "73px",
    },
    ["@media (min-width:768px) and (max-width:1023px)"]: {
      width: "80%",
      height: "100%",
      marginTop: "32px",
      marginBottom: "73px",
    },
  },

  footer: {
    padding: "1em 10em",
    background: "#428F9C",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    ["@media (max-width:780px)"]: {
      padding: "1em",
      display: "flex",
      flexDirection: "column",
    },
  },
}));
