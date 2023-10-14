import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  container: {
    padding: "1em",
    marginTop:"1em",
    background: "#ECF4F5",
  },
  card: {
    //    / paddingLeft: "1em"
  },
  backgroundBox: {
    background: "#ECF4F5",
   // padding: "1em",
  },
  insideBox: {
    background: "#FFFFFF",
    borderRadius:"8px",
    marginRight: "1em",
    boxShadow:"0px 65.3611px 52.2889px rgba(68, 68, 68, 0.1), 0px 42.3637px 30.6229px rgba(68, 68, 68, 0.0759259), 0px 25.1761px 16.655px rgba(68, 68, 68, 0.0607407), 0px 13.0722px 8.49694px rgba(68, 68, 68, 0.05), 0px 5.32572px 4.26057px rgba(68, 68, 68, 0.0392593), 0px 1.21039px 2.05766px rgba(68, 68, 68, 0.0240741)"
  },
  contentBox: {
    //height: "5em",
    padding:"1em",
    textAlign:"center",
  },
  contents:{
    fontSize:".7em",
    color:"#5F5F5F"
  },
  title:{
    fontSize:".8em",
    paddingTop:"1em"
  },
  bookTab : {
      borderTop:"1px solid  rgba(0, 0, 0, 0.15)",
      color:"#FF9800",
      padding:".7em 0em",
  },
  bookText : {
      fontSize:".8em",
      cursor:"pointer"
  },
  imgBox : {
      paddingTop:"1.5em"
  },
  imgSize : {
      width:"3em"
  }
}));
