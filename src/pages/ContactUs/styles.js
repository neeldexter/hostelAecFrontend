import { makeStyles } from "@material-ui/core";
import aboutPage from "../../images/aec/cont.jpeg"


export const useStyles = makeStyles(theme => ({
	mainContain:{ 
		marginTop: "2em",
		 padding: "1em",
		//   background: `url(${aboutPage})`,
		  background:"linear-gradient(to right,#065a62,#62b9c1)",
		 backgroundSize:"cover"
	},
	title: {
		textAlign: "center",
		fontSize: "2em",
		color: "#065a62",
		fontWeight: "bold",
		// margin: "1.5em 0"
	},
	containerBox:{
		
		padding:".5em"
	},
	contactCard: {
		border: "5px solid #ffffff",
		padding: "5em 1em 1em 1em",
		background: "#065a62",
		boxShadow: "10px 12px 2px -2px #524444",
		marginTop: "-4em",
		borderRadius: "10px",
		color:"#ffffff",
	},
	parentContactImg: {
        display: "flex",
        justifyContent: "center"
    },
    contactImg: {
        height: "8em",
        width: "8em",
        border: "6px solid #1d6f64",
        borderRadius: "10%",
        boxShadow: "2px 3px 6px 0px #524444"
    },
    textInside: {
        color: "#000000",
        fontSize: ".8em",
		fontWeight:"bold",
		lineHeight:"2em"
    },
	parentGrid: {
        padding: "1em",
		marginBottom:"1em",
    },
	parentCard: {
        border: "6px solid #065a62",
        background: "#ffffff",
        borderRadius: "10px",
        padding: "1em",
         boxShadow: "5px 5px 2px -2px #5f5f5f",
		height:"95%",
    },
    parentContactImg: {
        display: "flex",
        justifyContent: "center",
		paddingBottom:"1em",
		marginBottom:"1em",
		borderBottom:"3px solid #065a62"
    },

	templateCard: {
		border: "2px solid orange",
		width: "100%",
	},

	templateGrid: {
		justifyContent: "center",
		padding: "0 3.5em",
		marginTop: "0.9em",
		rowGap: "1.9em",
		["@media (min-width: 768px) and (max-width:1023px)"]: {
			padding: "0 2em",
		},
		["@media (max-width: 767px)"]: {
			padding: "0 1.2em",
		},
	},

	templateContainer: {
		width: "100%",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		padding: "0 0.5em",
	},

	imgSize: {
		display: "block",
		["@media (min-width: 375px) and (max-width:1024px)"]: {
			maxWidth: "120px",
			maxHeight: "120px",
		},

		["@media (min-width: 200px) and (max-width:368px)"]: {
			maxWidth: "100px",
			maxHeight: "100px",
		},
	},

	countryName: {
		display: "flex",
		minWidth: "7.6em",
		background: "#FFF5E6",
		color: "orange",
		fontWeight: "bold",
		justifyContent: "center",
		paddingTop: "0.3em",
		paddingBottom: "0.3em",
	},

	btn: {
		color: "blue",
	},

	secondTitle: {
		marginTop: "2em",
		marginBottom: "2em",
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

	templateHeading: {
		fontSize: "1.25em",
		fontWeight: "bold",
		marginTop: "1em",
		height: "3.25em",
		padding: "0 1.2em",
	},

	addressDiv: {
		padding: "0 1.5em",
		marginTop: "1.5em",
	},

	templateAddress: {
		fontSize: "0.8em",
		fontWeight: "800",
	},

	tagLine: {
		marginTop: ".2em",
		marginBottom: "1.2em",
		color: "#428F9C",
		fontWeight: "900",
		lineHeight: "1.2em",
		fontSize: "2.1em",
		padding: "0 6em",
		alignItems: "center",
		alignContent: "center",

		["@media (min-width:320px) and (max-width:576px)"]: {
			padding: "0 0",
			fontSize: "2em",
		},

		["@media (min-width:577px) and (max-width:768px)"]: {
			padding: "0 3.5em",
			textAlign: "center",
			marginBottom: "1em",
			fontSize: "1.5em",
		},

		["@media (min-width: 769px) and (max-width:1023px)"]: {
			fontSize: "1.7em",
			padding: "0em 4.4em",
			marginTop: "0em",
			marginBottom: "0em",
		},
	},

	contactImage: {
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

	lastTemplateDiv: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		marginTop: "1em",
		padding: "0 1.5em",
		["@media (max-width:780px)"]: {
			justifyContent: "space-between",
		},
	},

	templateImage: {
		marginBottom: "-2px",
	},

	contactInfo: {
		display: "flex",
		flexDirection: "column",
		alignItems: "left",
		justifyContent: "flex-start",
	},

	contactItem: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "left",
		marginTop: "1em",

		["@media (max-width: 768px)"]: {
			marginTop: "0.7em",
		},
	},

	contactItemText: {
		fontSize: "0.9em",
		fontFamily: "Sans-serif",
		fontWeight: "bold",
		paddingLeft: "0.8em",

		["@media (max-width: 368px)"]: {
			fontSize: "0.75em",
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
