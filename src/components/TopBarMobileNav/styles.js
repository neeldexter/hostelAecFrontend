import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles( ( theme ) => ( {
  roofTop: {
    position: "fixed",
    width: "100%",
    background: "blue",
    zIndex:"1000"
  },
  fixedContent: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "#FFFFFF",
    padding: "1em",
    border: " 1px solid rgba(66, 143, 156, 0.25)",
    boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.15)",
  },
  collapse: {
    width: "1.5em",
    height: "1.2em",
    cursor: "pointer",
  },
  mobileLogo: {
    width: "2.5em",
  },
  drawerDiv: {
    display: "flex",
    justifyContent: "space-between",
    padding: "2em",
    alignItems: "center",
  },
  crossIconDes: {
    width: "1.25em",
    height: "1.2em",
    cursor: "pointer",
  },
  contentDiv: {
    padding: "3em",
    height: "100vh"
  },
  lineItem: {
    color: "#808080",
    marginBottom: "2.5em",
    fontWeight: "600",
    cursor: 'pointer',
  },
  paper: {
    overflowY: 'unset',
  }
} ) );
