import { makeStyles } from "@material-ui/core";
import chatbotTop from "../../images/chatbotTop.svg";

export const useStyles = makeStyles(theme => ({
  container: {
    borderRadius: "2em",
    // overflow: "scroll",
    // boxShadow : "0px 1px 16px 2px #a5a5b5",
    boxShadow: "0px 0px 100px rgba(255, 152, 0, 0.15)",
    position: "relative",
    background: "#ECF4F5",
    // height:"35em",
    width: "100%",
    // overflowY:"auto"
  },
  topNav: {
    background: "#FFFFFF",
    padding: "1em 1em .5em 2em",
    borderRadius: "1em 1em 0em 0em",
  },
  chats: {
    background: "#EAEEF3",
    // padding:"1em 1em 1em 2em",
    borderRadius: "0em 0em 1em 1em",
    display: "flex",
    flexDirection: "column",
    height: "25em",
    // overflow: "auto",
    // position: "relative",
  },
  replyBox: {
    display: "flex",
    flexDirection: "row",
    maxWidth: "70%",
    background: "#FFFFFF",
    borderRadius: "0em 2em 2em 2em",
    padding: "1em",
    margin: "1em 0em",
  },
  replyIcon: {
    width: "2em",
    height: "2em",
    paddingRight: "1em",
  },
  tagContainer: {
    display: "flex",
    // flexDirection:"row",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
  },
  tags: {
    border: "2px solid #1D60E9",
    borderRadius: "25px",
    padding: ".5em 1em",
    background: "white",
    cursor: "pointer",
    fontWeight: "600",
    marginTop: ".1em",
  },
  inputFieldContainer: {
    // position: "absolute",
    // bottom: "0",
    // left: "8px",
    // display: "block",
    // margin: "auto",
    // width: "100%",
    display: "flex",
    justifyContent: "space-between",
    background: "#ffffff",
    // position:"absolute",
    // bottom:"0em",
    width: "100%",
    padding: ".5em 0",
    borderBottomRightRadius: "2.1em",
    borderBottomLeftRadius: "2.1em",
  },
  inputField: {
    // background: "#FFFFFF",
    padding: "1em .5em 1em 2.5em",
    border: "none",
    borderRadius: "20px",
    outline: "none",
    width: "100%",
  },

  // New ChatBot //
  topBar: {
    background: `url(${chatbotTop})`,
    backgroundRepeat: "no-repeat",
    padding: "2em 1em",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    borderTopRightRadius: "2.1em",
    //position:"absolute",
    //width:"100%"
  },
  userHeader: {
    display: "flex",
    justifyContent: "right",
    color: "#000000",
    paddingRight: "1em",
    ["@media (max-width:767px)"]: {
      fontSize: ".95em",
    },
  },
  topTextUser: {
    fontSize: ".9em",
    color: "#000000",
    opacity: ".7",
  },
  topText: {
    fontSize: "1em",
    color: "#FFFFFF",
    fontWeight: "600",
  },
  clientText: {
    fontSize: ".9em",
    paddingLeft: ".5em",
    ["@media (max-width:767px)"]: {
      fontSize: ".8em",
    },
  },
  onlineText: {
    opacity: ".6",
    color: "#ffffff",
    fontSize: ".9em",
  },
  chatBox: {
    padding: "1em",
    // position:"absolute",
    //width:"100%",
    top: "7em",
    height: "22em",
    // marginBottom:"4em",
    overflow: "auto",
    // width:"100%"
    //  display: "flex",
    // flexDirection:" column-reverse"
  },
  firstText: {
    margin: "2em 0em 1em 0em",
    ["@media (max-width:767px)"]: {
      margin: "1.5em 0em",
    },
  },
  tagBox: {
    display: "flex",
    justifyContent: "flex-start",
    marginBottom: ".7em",
  },
  tagsIn: {
    marginLeft: "1.5em",
    border: "1px solid #428F9C",
    borderRadius: "25px",
    padding: "1em",
    background: "white",
    cursor: "pointer",
    fontWeight: "500",
    marginTop: ".1em",
    color: "#428F9C",
    ["@media (max-width:767px)"]: {
      padding: ".6em",
      fontSize: ".95em",
    },
  },
  userMsg: {
    display: "flex",
    justifyContent: "flex-start",
    marginBottom: "1em",
    alignItems: "center",
    opacity: ".8",
    color: "#000000",
    ["@media (max-width:767px)"]: {
      marginBottom: "0",
    },
  },
  replyBoxParent: {
    marginBottom: "1em",
    fontSize: ".9em",

    marginTop: "2em",
    ["@media (max-width:767px)"]: {
      marginTop: "1.5em",
    },
  },
  whiteBox: {
    background: "#FFFFFF",
    borderRadius: "14px 39.5px 39.5px 26px",
    marginLeft: "1.5em",
    width: "55%",
    padding: "1em .5em",
    ["@media (max-width:767px)"]: {
      width: "60%",
    },

    ["@media (min-width:767px) and @media (max-width:1023px)"]: {
      width: "55%",
    },
  },
  replyBoxChat: {
    //  background: "#FFFFFF",
    borderRadius: "14px 39.5px 39.5px 26px",
    // padding: "1.2em",
    fontWeight: "600",
    // marginLeft: "1.5em",
    // width:"85%"
    ["@media (max-width:767px)"]: {
      fontSize: ".8em",
    },
  },
  replyBoxChatUser: {
    background: "#428F9C",
    borderRadius: "14px 39.5px 39.5px 26px",
    padding: "1.2em",
    fontWeight: "600",
    color: "#FFFFFF",
    ["@media (max-width:767px)"]: {
      fontSize: ".8em",
    },
  },
  chatArrowDiv: {
    display: "flex",
    paddingRight: "1.5em",
    alignItems: "center",
    cursor: "pointer",
  },
  chatArrowImg: {
    width: "1.2em",
  },
  timeShow: {
    paddingLeft: "2em",
    marginBottom: "1.5em",
    ["@media (max-width:767px)"]: {
      marginBottom: "1em",
      fontSize: ".75em",
    },
  },
  timeShowUser: {
    display: "flex",
    justifyContent: "right",
    paddingRight: "1em",
    marginBottom: "1.5em",
    marginTop: "1.5em",
  },
  timeDes: {
    fontSize: ".8em",
    opacity: ".7",
    ["@media (max-width:767px)"]: {
      fontSize: ".75em",
    },
  },
  typingSign: {
    width: "4em",
    height: "3em",
    marginLeft: "2em",
    marginTop: "-2.1em",
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "20%",
  },
  typeImg: {
    width: "5em",
  },
  chipBox: {
    display: "flex",
    // justifyContent: "space-around",
    // marginTop: "1em",
    flexDirection: "column",
  },
  chipIndividual: {
    marginTop: "1em ",
  },
  timerSet: {
    marginTop: "1em",
    padding: ".5em 1em",
    color: "green",
    background: "#ffffff",
    borderRadius: "1em",
  },
  timerSetExpired: {
    marginTop: "1em",
    padding: ".5em 1em",
    color: "red",
    background: "#ffffff",
    borderRadius: "1em",
  },
  // '@global': {
  //   '*::-webkit-scrollbar': {
  //     width: '0.4em',

  //   },
  //   '*::-webkit-scrollbar-track': {
  //     '-webkit-box-shadow': 'inset 0 0 20px rgba(0,0,0,0.00)'
  //   },
  //   '*::-webkit-scrollbar-thumb': {
  //     backgroundColor: '#428F9C',
  //     outline: 'none',
  //     borderRadius:"20px"
  //   }
  // },
  "@global": {
    "*::-webkit-scrollbar": {
      width: "0px",
    },
    "*::-webkit-scrollbar-track": {
      "-webkit-box-shadow": "none",
    },
    "*::-webkit-scrollbar-thumb": {
      backgroundColor: "none",
      outline: "none",
      borderRadius: "0px",
    },
  },
}));
