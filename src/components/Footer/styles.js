import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles( ( theme ) => ( {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    [ "@media (max-width:780px)" ]: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
    },
  },
  textPortion: {
    color: "#FFFFFF",
    fontSize: "1em",
    [ "@media (max-width:780px)" ]: {
      fontSize: ".9em",
    },
  },
  socialIcons: {
    display: "flex",
    justifyContent: "space-between",
    padding: "1em 5em",
    [ "@media (max-width:780px)" ]: {
      padding: "1em 1em",

    },
  },
  box: {
    marginLeft: ".5em",
    cursor: "pointer",
  },
} ) );
