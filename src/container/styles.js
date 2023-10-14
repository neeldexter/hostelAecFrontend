import { makeStyles, createStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  rootContainer: {
   // padding: "10px 10px",
  // position:"relative"
  },
  footer: {
    marginTop: "6em",
    padding: "1em 10em",
    background: "#065a62",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    ["@media (max-width:780px)"]: {
        padding: "1em",
        marginTop: "2em",
    },
},
}));
