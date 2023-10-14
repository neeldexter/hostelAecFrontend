import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles( ( theme ) => ( {
	root: {
		padding: ".5em",
		background: "#065a62",
		// display: "flex",
		// justifyContent: "space-between",
		alignItems: "center",
		borderBottom: "1px solid #CECECE",
	},
	headerTitle:{
		display:"flex",
		justifyContent:"center",
		color:"white",
		marginBottom:".5em"
	},
	titleText :{
		fontWeight:"bold",
		fontSize:"2em",
	},
	navItems : {
		display:"flex",
		justifyContent:"center",
		background:"#ffffff",
		maxWidth:"70%",
		margin:"auto",
		// borderTopRightRadius:"10px",
		// borderTopLeftRadius:"10px",
		borderRadius:"15px",
		
		padding:".1em 0",
	},
	heading:{
		color: '#FFFFFF',
		textAlign: 'center'	
	},
	midNavItem: {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		padding: '0.4em 0',
		borderRadius: '0.625em 0.625em 0 0',
		background: '#014279'
	},
	menuButton: {
		marginRight: theme.spacing( 2 ),
	},
	title: {
		padding: "0 3em",
		cursor: "pointer",
		color: "#686868",
		fontSize: ".9em",
		fontWeight: "600",
		"&:hover": {
			color: "#FF9800",
		},
	},
	logo: {
		width: "6em",
		cursor: "pointer",
	},
	flag: {
		width: "10em",
		cursor: "pointer",
		paddingLeft: "3em",
	},
	link: {
		textDecoration: "none",
		color: "#065a62",
		fontSize:"1.2em",
		"&:hover": {
			color: "#FF9800",
		},
	}
} ) );
