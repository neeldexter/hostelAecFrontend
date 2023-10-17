import { makeStyles } from "@material-ui/core";
import partnerImage from "../../images/partnerImage.png";

export const useStyles = makeStyles(() => ({
	rootContainer: {
		padding: "2em",
	},
	regContainer:{ 
		padding: "1em 5em",
		["@media(max-width:767px)"]: {
			padding: "1em",
			marginTop:"5em"
          },
	 },
	mainContainer: {
		justifyContent: "center",
		maxWidth: "87%",
		margin: "auto",
		marginBottom: "10em",
	},

	container: {
		boxSizing: "border-box",
		background: "#FFFFFF",
		border: "1px solid rgba(0, 0, 0, 0.15);",
		borderRadius: "10px",
		minHeight: "100%",
		// minHeight: "535px",
		position: "relative",
	},
	regTitle :{
		textAlign:"center",
		fontWeight:"bold",
		color:"#07606f",
		marginBottom:".5em"
	},


	fieldDes :{
		padding:".5em"
	},
	curAdd :{
		padding: ".5em",
    borderRadius: "5px",
    boxShadow: "0px 0px 5px 1px #80a0a4",
    margin: ".5em",
	},
	currHead:{
		display:"flex",
		justifyContent:"left",
		marginLeft:".5em",
	},
	currDiv:{
fontWeight:"bold",
fontSize:"1.2em",
color: "#065a62",
textDecoration:"undeline"
	},

	subBut:{
		marginTop:"1em"
	},


















	// image: {
	// 	background: `url(${partnerImage})`,
	// 	height: "28.25em",
	// 	backgroundRepeat: "no-repeat",
	// 	backgroundSize: "cover",
	// 	backgroundPosition: "center",
	// 	margin: "4em 4em 0em 4em",
	// 	["@media (max-width:767px)"]: {
	// 		margin: "7em 1em 1em 1em",
	// 		height: "6.4em",
	// 	},
	// 	["@media (min-width:768px) and (max-width:1023px)"]: {
	// 		margin: "7em 2em 2em 2em",
	// 		height: "15em",
	// 	},
	// },

	// logoContainer: {
	// 	display: "flex",
	// 	justifyContent: "center",
	// 	alignItems: "center",
	// 	height: "4em",
	// 	width: "100%",
	// 	padding: "4em 0",
	// },

	// title: {
	// 	fontFamily: "IBM Plex Sans",
	// 	fontStyle: "normal",
	// 	fontWeight: "600",
	// 	fontSize: "1.2rem",
	// 	lineHeight: "31px",
	// 	color: "#000000",
	// 	marginBottom: "1em",
	// 	textAlign: "center",
	// },

	// descriptions: {
	// 	fontFamily: "IBM Plex Sans",
	// 	marginTop: "1em",
	// 	marginBottom: "2em",
	// 	color: "rgba(0, 0, 0, 0.5)",
	// 	paddingBottom: "2em",
	// 	fontSize: ".8em",
	// 	textAlign: "center",
	// 	padding: "2em",
	// },

	// contentBox: {
	// 	padding: ".5em",
	// 	["@media (max-width:780px)"]: {
	// 		padding: "1em",
	// 	},
	// },

	// startButn: {
	// 	marginTop: "50px",
	// 	position: "absolute",
	// 	bottom: "2rem",
	// },

	// headline: {
	// 	marginTop: 0,
	// 	background: "-webkit-linear-gradient(40deg, #428F9C 20%, #FF9800 80%)",
	// 	WebkitTextFillColor: "transparent",
	// 	WebkitBackgroundClip: "text",
	// 	fontSize: "2.8em",
	// 	fontWeight: "600",
	// 	padding: "2em 4em .5em 4em",
	// 	textAlign: "center",
	// 	["@media (max-width:780px)"]: {
	// 		padding: "2em",
	// 		fontSize: "1.5em",
	// 	},
	// 	["@media (min-width:780px) and (max-width:1024px)"]: {
	// 		padding: "2em",
	// 		fontSize: "2em",
	// 	},
	// },

	// paragraph: {
	// 	fontFamily: "IBM Plex Sans",
	// 	fontSize: "1.2em",
	// 	textAlign: "center",
	// 	width: "75%",
	// 	margin: "0 auto",
	// 	["@media (max-width:780px)"]: {
	// 		width: "90%",
	// 		fontSize: ".8em",
	// 	},
	// 	marginBottom: "1rem",
	// },

	// btnContainer: {
	// 	display: "flex",
	// 	justifyContent: "center",
	// 	alignItems: "center",
	// 	marginTop: "2em",
	// 	marginBottom: "4em",
	// },

	// getStartedBtn: {
	// 	padding: "2em,7em",
	// 	margin: "auto",
	// 	width: "151px",
	// 	height: "42px",
	// },

	// description: {
	// 	textAlign: "center",
	// 	marginBottom: "3em",
	// 	paddingLeft: "3em",
	// 	paddingRight: "3em",
	// 	fontSize: "1rem",
	// 	["@media (max-width:780px)"]: {
	// 		fontSize: ".8em",
	// 	},
	// },

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
