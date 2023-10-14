import { makeStyles } from "@material-ui/core";
import partnerImage from "../../images/partnerImage.png";

export const useStyles = makeStyles(() => ({
    // rootContainer: {
    // 	padding: "2em",
    // },
    // mainContainer: {
    // 	justifyContent: "center",
    // 	maxWidth: "87%",
    // 	margin: "auto",
    // 	marginBottom: "10em",
    // },
    parentGrid: {
        padding: "1em"
    },
    parentCard: {
        border: "5px solid #ffffff",
        background: "#065a62",
        marginTop: "-4em",
        borderRadius: "10px",
        padding: "5em 1em 1em 1em",
        boxShadow: "10px 12px 2px -2px #524444"
    },
    parentContactImg: {
        display: "flex",
        justifyContent: "center"
    },
    contactImg: {
        height: "8em",
        width: "8em",
        border: "5px solid #ffffff",
        borderRadius: "50%",
        boxShadow: "2px 3px 6px 0px #524444"
    },
    textInside: {
        color: "#ffffff",
        fontSize: ".8em"
    },
    seeMore: {
        paddingTop: ".8em"
    },
    seeButn: {
        background: "#ffffff",
        color: "#524444",
        fontWeight: "bold",
        "&:hover": {
            background: "#ffffff",
            color: "#524444",
            boxShadow: "0px 6px 5px 2px #383636"
        }
    },
    modalDes: {
        border: "5px solid #ffffff",
        background: "#072e32",
        borderRadius: "5px",
        padding: "1em",
        color: "white"
    },
    modPicSection: {
        display: "flex",
        justifyContent: "space-around",
        marginBottom:"2em"
    },
    contactImgModal: {
        height: "10em",
        width: "10em",
        border: "5px solid #ffffff",
        borderRadius: "5px",
        boxShadow: "2px 3px 6px 0px #100f0f"
    },
    addressBox: {
        background: "aliceblue",
        borderRadius: "5px",
        boxShadow: "2px 3px 6px 0px #131212",
        padding: "1em",
        color: "black",
    },
    addresParent:{
        display:"flex",
        justifyContent:"center",
    },
    addressTitle :{
        background:" #072e32",
        width:" 10em",
        textAlign:" center",
        border:" 2px solid white",
        borderRadius:" 5px",
        padding:" 0.5em",
        color:" white",
        boxShadow: "2px 4px 8px 0px #433d3d",
        marginTop:" -2.2em"
    },
    textAddr: {
        color: "#000000",
        fontSize: "1em",
        lineHeight: "1.5em",
        fontWeight:"bold"
    },
    modHead:{
        fontSize:"1.5em",
        fontWeight:"bold",
        textAlign:"center",
        marginBottom:"2em",
        textDecoration:"underline",
        minWidth:"15em",
        letterSpacing:"1px"
    },
    textInsideMod: {
        color: "#ffffff",
        fontSize: "1em",
        lineHeight: "2em"
    },
    parentCardMod: {
        display: "flex",
        flexDirection: "column",
        // justifyContent: "center"
    },
    workAdd:{
    border:"2px solid white",
    padding:"1.5em 1em",
    borderRadius:" 5px",
    marginTop:"-1.3em"
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