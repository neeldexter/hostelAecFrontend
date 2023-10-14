import { makeStyles } from "@material-ui/core";
import mapBackground from "../../images/aau/home.png";
import shades from "../../images/shades.png";
import clientMsgBack from "../../images/clientMsgBack.png";
import mobileMsgBack from "../../images/mobileMsgBack.png";
import end from "../../assets/end.png";
import homeBackground from "../../images/homeBackground.png";
import rectangle from "../../images/Rectangle.png";
import mobileBackground from "../../images/mobileBackground.png";
import cutBackHover from "../../images/cutBackHover.jpg";
import beforeBorder from "../../images/beforeBorder.png";
import hoverBorder from "../../images/HoverBorder.png";
import { urls } from "../../components/Footer/contents";
import { clientMsg } from "./contents";

export const useStyles = makeStyles(theme => ({
  // root: {
  // 	// justifyContent: "center",
  // },

  // father:{
  //   background: `url(${mapBackground})`,
  //   backgroundRepeat: "no-repeat",
  //   backgroundSize: "100% 50%",
  //   // Height: "20em",
  //   width: "100%",
  //   backgroundPosition: "bottom",
  //   backgroundColor: "#9DB8CC",
  //   // opacity: "0.7"
  // },
  // homeContainer: {
  //   padding: "2em 10em",
  //   ["@media (max-width:767px)"]: {
  //     padding: "1em",
  //   },
  //   display: "flex",
  //   justifyContent: "space-between",
  //   alignItems: "center",
  // },
  // homeContainerMobile: {
  //   padding: "2em",
  //   // background: `url(${mapBackground})`,
  //   display: "flex",
  //   justifyContent: "space-between",
  //   alignItems: "center",
  //   marginTop: "8em",
  // },
  // title: {
  //   background: "-webkit-linear-gradient(60deg, #0e086c 30%, #2c2cf4 50%)",
  //   WebkitTextFillColor: "transparent",
  //   WebkitBackgroundClip: "text",
  //   textTransform: "capitalize",
  //   fontSize: "1.5em",
  //   ["@media (max-width:767px)"]: {
  //     fontSize: ".8em",
  //   },
  // },
  // publicationPartner:{
  //   border:'0px dotted',
  //   padding: "0 0.2em",
  //   marginLeft: "8em",
  //   ["@media (max-width:1023px)"]: {
  //     padding: "1em",
  //     marginLeft: "0em",
  //   },
  // },
  // pubTitle :{
  //   marginLeft:".6em",
  //   fontWeight:"bold",
  //   color:"#01315A",
  //   fontSize:"3em",
  //   margin: ".5em 2em",
  //   ["@media (max-width:767px)"]: {
  //     fontSize: "1.5em",
  //     margin: "0 1em",
  //   },
  // },
  // publicationPartnerLogos: {
  //   display: 'flex',
  //   alignItems:"center",
  //   textAlign:"center",
  //   marginTop:"1em",
  // },
  // organizerContainer:{
  //   padding: "2em",
  //   alignItems: "center",
  //   marginTop: "4em",
  // },
  // importantDatesContainer:{
  //   margin: "2em 10em",
  //   ["@media (max-width:767px)"]: {
  //     padding: "1em",
  //   },
  //   textTransform:"uppercase",
  //   // marginTop: "-3.75em"
  // },
  // impDates:{
  //   marginTop: "1em",
  //   display:'flex', 
  //   justifyContent:'space-between'
  // },
  // tagLine: {
  //   marginTop: ".2em",
  //   color: "#02345E",
  //   fontWeight: "600",
  //   lineHeight: "1.2em",
  //   fontSize: "3.3em",
  //   ["@media (max-width:767px)"]: {
  //     fontSize: "1.1em",
  //     // textAlign: "justify",
  //   },

  //   // fontSize:"3.5em"
  // },
  // paragraph: {
  //   color: "#428F9C",
  //   fontSize: "1.1em",
  //   // letterSpacing: "1px",
  //   marginTop: "1.1em",
  //   textAlign: "justify",
  //   fontWeight: "500",
  // },
  // humanLogo: {
  //   width: "33.06em",
  //   height: "32em",
  //   ["@media (max-width:767px)"]: {
  //     width: "20em",
  //     height: "23em",
  //     marginTop: "2em",
  //   },
  // },
  // logoDiv: {
  //   display: "flex",
  //   //justifyContent: "end",
  //   marginBottom: "3em",
  // },
  // chatBotDiv: {
  //   padding: "2em 14em",
  //   margin: "auto",

  //   ["@media (max-width:767px)"]: {
  //     padding: "1em",
  //     flexDirection: "column-reverse",
  //   },
  // },
  // botImgDiv: {
  //   display: "flex",
  //   alignItems: "center",
  //   ["@media (max-width:780px)"]: {
  //     display: "none",
  //   },
  // },
  // chatImg: {
  //   width: "21em",
  //   ["@media (max-width:780px)"]: {
  //     width: "18em",
  //   },
  // },
  // startButn: {
  //   marginTop: "2em",
  //   fontWeight: "600",
  //   padding: ".7em 2em",
  // },
  // secondTitle: {
  //   marginTop: "2em",
  //   marginBottom: "2em",
  //   background: "-webkit-linear-gradient(40deg, #428F9C 30%, #FF9800 80%)",
  //   WebkitTextFillColor: "transparent",
  //   WebkitBackgroundClip: "text",
  //   // fontSize: "1.15em",
  //   padding: "2em 2em",
  //   textAlign: "center",
  //   ["@media (max-width:780px)"]: {
  //     padding: "1em 0",
  //     marginBottom: "1em",
  //     marginTop: "1em",
  //     fontSize: ".9em",
  //   },
  // },
  // secTitleContent: {
  //   fontSize: "2.5em",
  //   padding: "0 9em",
  //   ["@media (max-width:780px)"]: {
  //     fontSize: "1.7em",
  //     padding: "1em",
  //   },
  //   ["@media (max-width:1023px)"]: {
  //     padding: "0em 4em",
  //   },
  // },
  // businessLogo: {
  //   padding: "6em 10em",
  //   ["@media (max-width:767px)"]: {
  //     padding: "1em",
  //   },
  // },
  // headerBusiness: {
  //   background: "-webkit-linear-gradient(40deg, #428F9C 20%, #FF9800 80%)",
  //   WebkitTextFillColor: "transparent",
  //   WebkitBackgroundClip: "text",
  //   fontWeight: "600",
  //   fontSize: "2.5em",
  //   ["@media (max-width:767px)"]: {
  //     textAlign: "center",
  //     fontSize: "1.7em",
  //   },
  // },
  // serviceSection: {
  //   display: "flex",
  //   flexDirection: "row",
  //   flexWrap: "wrap",
  //   justifyContent: "end",
  // },
  // serviceLogo: {
  //   padding: " 2em 3.5em 2em 3.5em",
  //   cursor: "pointer",
  //   borderRadius: "10px",
  //   "&:hover": {
  //     boxShadow:
  //       "0px 100px 80px rgba(0, 0, 0, 0.02), 0px 64.8148px 46.8519px rgba(0, 0, 0, 0.0151852), 0px 38.5185px 25.4815px rgba(0, 0, 0, 0.0121481), 0px 20px 13px rgba(0, 0, 0, 0.01), 0px 8.14815px 6.51852px rgba(0, 0, 0, 0.00785185), 0px 1.85185px 3.14815px rgba(0, 0, 0, 0.00481481);",
  //   },
  // },
  // serviceLogoDes: {
  //   border:'0px solid',
  //   maxWidth: "6em",
  //   ["@media (max-width:768px)"]: {
  //     maxWidth: "10em",
  //     marginTop:"1em"
  //   },
  // },

  // clientGrid: {
  //   marginTop: "2em",
  //   background: `url(${clientMsgBack})`,
  //   backgroundRepeat: "no-repeat",
  //   backgroundSize: "100% 100%",
  //   // background: "#FFF5E6",
  //   padding: "15em 0em",
  //   ["@media (max-width: 480px)"]: {
  //     background: `url(${mobileMsgBack})`,
  //     backgroundRepeat: "no-repeat",
  //     backgroundSize: "100% !00%",
  //     padding: "9em 2.5em 9em 2.5em",
  //   },
  // },

  // clientInfo: {
  //   padding: "1em 5em",
  //   justifyContent: "center",

  //   //marginBottom: "10em",
  //   ["@media (max-width:768px)"]: {
  //     padding: "0.5em",
  //   },
  // },
  // shadeBackground: {
  //   height: "11em",
  //   width: "20em",
  //   background: `url(${shades})`,
  //   backgroundRepeat: "no-repeat",
  //   ["@media (max-width:780px)"]: {
  //     width: "18em",
  //   },
  // },
  // clientTextBack: {
  //   position: "relative",
  // },
  // clientBackground: {
  //   position: "absolute",
  //   top: "6.2em",
  //   bottom: "0",
  //   left: "6.5em",
  //   width: "85%",
  //   height: "110%",
  //   backgroundColor: "#FFF5E6",
  //   ["@media (max-width:780px)"]: {
  //     top: "1em",
  //     bottom: "0",
  //     left: "1em",
  //     width: "85%",
  //   },
  // },
  // clientMessage: {
  //   display: "flex",
  //   justifyContent: "space-between",
  //   flexWrap: "wrap",
  // },

  // msgCard: {
  //   background: "#FFFFFF",
  //   display: "flex",
  //   flexDirection: "column",
  //   // minHeight: "22em",
  //   boxShadow: "0px 100px 80px rgba(49, 49, 49, 0.1)",

  //   ["@media (max-width: 480px)"]: {
  //     // width: "270px",
  //   },
  // },
  // contentBox: {
  //   // flex: "1",
  //   padding: "0.5em",
  //   fontWeight: "400",
  //   minHeight: "18em", //"23.4em",
  //   justifyContent: "center",
  // },

  // msgCont: {
  //   fontSize: ".9em",
  //   color: "#858080",
  //   fontWeight: "normal",
  //   padding: "2em 2em",
  //   textAlign: "justify",
  //   height: "22em",
  //   lineHeight: "2em",
  //   ["@media (max-width:480px)"]: {
  //     fontSize: "0.75em",
  //   },
  //   ["@media (min-width:481px) and @media (max-width:996px)"]: {
  //     height: "14em",
  //   },
  // },

  // quoterName: {
  //   fontSize: "0.9em",
  // },

  // quoterDiv: {
  //   marginTop: "auto",
  //   padding: "0em 1.6em 1em 1.6em",
  // },

  // quoterDesig: {
  //   fontSize: ".9em",
  //   fontWeight: "300 !important",
  // },

  // toggleButn: {
  //   display: "flex",
  //   alignItems: "center",
  //   background: "#FFFFFF",
  //   padding: "2em",
  //   borderRadius: "30%",
  //   width: "20%",
  //   margin: "auto",
  // },
  // bottomShade: {
  //   display: "flex",
  //   justifyContent: "end",
  //   marginTop: "-7em",
  //   paddingRight: ".7em",
  // },
  // footer: {
  //   padding: "1em 10em",
  //   background: "#01315A",
  //   display: "flex",
  //   justifyContent: "space-between",
  //   alignItems: "center",
  //   ["@media (max-width:767px)"]: {
  //     padding: "1em",
  //   },
  // },

  // textPortion: {
  //   color: "#FFFFFF",
  //   fontSize: "1em",
  // },
  // socialIcons: {
  //   display: "flex",
  //   justifyContent: "space-between",
  // },
  // box: {
  //   marginLeft: ".5em",
  //   cursor: "pointer",
  // },

  // root: {
  //   display: "grid",
  //   gridtemplatecolumns: "repeat(3, 1fr)",
  //   justifycontent: "center",
  //   gap: "1.25em",
  //   gridautorows: "minmax(6.25em, auto)",
  //   ["@media (max-width:780px)"]: {
  //     fontSize: "0.94em",
  //   },
  // },
  // cardroot: {
  //   display: "flex",
  //   flexDirection: "row",
  //   flexWrap: "wrap",
  //   rowGap: "1.7em",
  //   justifyContent: "center",
  //   padding: "1.25em 9em",
  //   ["@media (max-width:780px)"]: {
  //     padding: "0.63em",
  //     fontSize: "1em",
  //   },
  // },
  // paper: {
  //   border: "1px solid #cac9c7",
  //   borderRadius: "0.9em",
  //   background: "#FFFFFF",
  //   padding: theme.spacing(2),
  //   height: 200,
  //   //width: 300,
  //   textAlign: "left",
  //   fontWeight: "400",
  //   color: "black",
  //   transition: " all ease 250ms",

  //   "&:hover": {
  //     transitionDelay: "1",
  //     boxShadow: "0px 1.88em 1.25em 0em  #d8d8d7",
  //     transform: "scale(1.01)",
  //     background: "#ffffff",
  //     border: "1px solid #f88526",
  //   },
  //   ["@media (max-width:780px)"]: {
  //     padding: "1.25em 0.95em 0em 1.25em",
  //     fontSize: "1em",
  //   },

  //   ["@media (max-width:320px)"]: {
  //     width: 250,
  //   },
  // },

  // head: {
  //   background: "-webkit-linear-gradient(40deg, #428F9C 30%, #FF9800 75%)",
  //   WebkitTextFillColor: "transparent",
  //   WebkitBackgroundClip: "text",
  //   fontWeight: "600",
  //   fontSize: "2.5em",
  //   textAlign: "center",
  //   padding: "0.5em 8em",
  //   fontFamily: "IBM Plex Sans, sans-serif",
  //   // color: "primary",

  //   ["@media (max-width:767px)"]: {
  //     padding: "0.32em  2em",
  //     textAlign: "center",
  //     fontSize: "1.7em",
  //   },

  //   ["@media (min-width:768px) and (max-width:1023px)"]: {
  //     padding: "0.32em  6em",
  //     textAlign: "center",
  //     fontSize: "1.7em",
  //   },

  //   ["@media (min-width:1024px) and (max-width:1199px)"]: {
  //     padding: "0.32em  6em",
  //     textAlign: "center",
  //     fontSize: "2.2em",
  //   },
  // },

  // para: {
  //   background: "#FFFFFF",
  //   color: "grey",
  //   fontWeight: "500",
  //   fontSize: "0.9em",
  //   ["@media (max-width:768px)"]: {
  //     fontSize: "0.9em",
  //   },
  // },

  // h4: {
  //   background: "#FFFFFF",
  // },

  // contentbox: {
  //   padding: ".5em .5em .5em .5em",
  // },

  // top: {
  //   height: "5em",
  //   ["@media (max-width:780px)"]: {
  //     height: "3.8em",
  //   },
  // },

  // end: {
  //   height: "5em",
  //   background: `url(${end})`,
  //   backgroundRepeat: "no-repeat",
  //   backgroundPosition: "right",
  //   backgroundSize: "6em 5em",
  //   ["@media (max-width:768px)"]: {
  //     height: "3.8em",
  //   },
  // },

  // gridBackground: {
  //   background: "#FFF5E6",
  // },

  // iconDiv: {
  //   background: "#FFF5E6",
  //   padding: "0.5em",
  //   height: "2em",
  //   width: "2em",
  //   display: "flex",
  //   alignItems: "center",
  //   justifyContent: "center",
  // },

  // paragraph1: {
  //   marginBottom: "1em",
  //   background: "-webkit-linear-gradient(40deg, #428F9C 40%, #FF9800 60%)",
  //   WebkitTextFillColor: "transparent",
  //   WebkitBackgroundClip: "text",
  //   fontWeight: "600",
  //   textAlign: "center",
  //   ["@media (max-width:780px)"]: {
  //     fontSize: "1.5em",
  //   },
  // },

  // mainContainer1: {
  //   paddingTop: "13em",
  //   paddingBottom: "22em",
  //   padding: "0 5em",
  //   background: `url(${homeBackground})`,
  //   backgroundRepeat: "no-repeat",
  //   backgroundSize: "100% 100%",
  //   Height: "20em",
  //   display: "flex",
  //   justifyContent: "center",
  //   ["@media (max-width:780px)"]: {
  //     padding: "7em 0 12em 0",
  //     background: `url(${mobileBackground})`,
  //     backgroundRepeat: "no-repeat",
  //     backgroundSize: "100% 100%",
  //   },
  // },

  // firstContainer: {
  //   // background: "white",
  //   background: `url(${beforeBorder})`,
  //   backgroundRepeat: "no-repeat",
  //   backgroundSize: "100% 100%",
  //   height: "20em",
  //   textAlign: "center",
  //   padding: "1em 4em",

  //   "&:hover": {
  //     background: `url(${hoverBorder})`,
  //     backgroundRepeat: "no-repeat",
  //     backgroundSize: "100% 100%",
  //     borderRadius: "10px",
  //     boxShadow: "-18px 65.3611px 52.2889px 0px rgba(68, 68, 68, 0.1)",
  //   },
  //   ["@media (max-width:780px)"]: {
  //     padding: "0 1em",
  //   },
  // },

  // firstImage: {
  //   marginTop: "1.5em",
  //   width: "6em",
  //   ["@media (max-width:780px)"]: {
  //     width: "3.8em",
  //   },
  // },

  // firstTitle: {
  //   fontFamily: "IBM Plex Sans",
  //   fontStyle: "normal",
  //   fontWeight: "900",
  //   fontSize: "1em",
  //   lineHeight: "142%",
  //   marginTop: "1.5em",
  //   color: " #2E2E2E",
  //   marginBottom: "0.5em",
  // },

  // firstDescription: {
  //   fontFamily: "IBM Plex Sans",
  //   fontStyle: "normal",
  //   fontWeight: "500",
  //   fontSize: "14px",
  //   lineHeight: "185%",
  //   marginBottom: "3em",
  //   textAlign: "center",
  //   color: " #5F5F5F",
  // },
  // testCard: {
  //   width: " 200px",
  //   height: "250px",
  // },

  // sliderBtn: {
  //   border: "none",
  //   backgroundColor: "transparent",
  // },

  // sliderBtnDiv: {
  //   display: "flex",
  //   justifyContent: "center",
  //   marginTop: "1em",
  // },
  // partnerCard : {
  //   boxShadow:" 0px 6px 12px -1px #5f5f60",
  //   marginTop: "1em",
  //   borderRadius: "10px",
  //   background: "#b9bfc9"
  // }



  homeTitle: {
    textAlign: "center",
    fontWeight: "800",
    fontSize: "2.7em",
    padding: "1em 6em",
    ["@media (max-width:767px)"]: {
      fontSize: "2.1em",
      padding: "2.5em 1em 0em 1em",
    },
  },
  homeSubtitle: {
    textAlign: "-webkit-center",
    fontSize: "1.2em",
    marginTop: "1.5em"
  },
  headerSec: {
    padding: "2em 6em",
    ["@media (max-width:767px)"]: {
      padding: "2em",
      fontSize: ".8em "
    },
  },
  tagline: {
    color: "#065a62",
    fontStyle: "italic",
    fontWeight: "bold"
  },
  videoPart: {
    display: "flex",
    justifyContent: "center",
    padding: "4em"
  },
  videoTag: {
    boxShadow: "5px 5px 4px 1px #065a62",
    border: "2px solid #065a62",
    borderRadius: "5px"
  },
  snap: {
    fontWeight: "bold",
    padding: "1em"
  },
  imgGal: {
    padding: "3em",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  mainCard: {
    padding: "1.2em",
    boxShadow: "5px 5px 4px 1px #065a62",
    border: "2px solid #065a62",
    borderRadius: "5px",
    background: "white",
    height: "95%",
  },
  imgCard: {
    display: "flex",
    // justifyContent:"center",
    // alignItems:"center",
    flexDirection: "column",
    borderBottom: "1px solid #065a62",
    padding: ".5em 0"
  },
  imgCon: {
    width: "10em",
    height: "10em",
    borderRadius: "50%"
  },
  name: {
    textAlign: "left",
    fontSize: "1.2em",
    fontWeight: "800"
  },
  batch: {
    textAlign: "left",
    fontSize: "1.2em"
  },
  titleAuth: {
    padding: ".5em 0"
  },
  cont: {
    fontSize: ".9em",
    textAlign: "justify"
  }
}));
