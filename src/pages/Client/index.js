import React, { useState, useEffect } from "react";
import clientPageImg from "../../images/clientPageImg.jpg";
import { Grid, Button, Typography } from "@material-ui/core";
import Footer from "../../components/Footer/index.js";
import DialogForm from "../../components/Dialog";
import { icons } from "./contents";
import { useStyles } from "./styles";

function Client() {
  const [open, setOpen] = useState(false);
  const classes = useStyles();

  const handleClick = () => {
    setOpen(true);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    // <Grid>
    //   <Grid xs={12}>
    //     <div className={classes.clientPageImage}>
    //       <img src={clientPageImg} width="100%" alt="image"></img>
    //     </div>
    //   </Grid>

    //   <Grid xs={12} className={classes.secondTitle}>
    //     {" "}
    //     <Typography variant="h6" className={classes.tagLine}>
    //       <b>
    //         We are here to bring your vision into action <br /> through best
    //         practices acquired over 100+ healthcare facilities.
    //       </b>
    //     </Typography>
    //   </Grid>

    //   <Grid xs={12} className={classes.btnGrid}>
    //     <Button
    //       variant="contained"
    //       className={classes.btn}
    //       onClick={handleClick}
    //     >
    //       Lets get started
    //     </Button>
    //   </Grid>

    //   <Grid container xs={12} className={classes.iconGrid}>
    //     {icons.map((item, key) => (
    //       <Grid xs={12} sm={6} md={4} lg={4} xl={4} sp>
    //         <div className={classes.imgDiv}>
    //           <img
    //             src={item}
    //             alt="clientLogo"
    //             className={classes.imgStyles}
    //           ></img>
    //         </div>
    //       </Grid>
    //     ))}
    //   </Grid>

    //   <Grid container item xs={12} className={classes.footer}>
    //     <Footer />
    //   </Grid>
    //   <DialogForm open={open} setOpen={setOpen} formType="PROSPECT" role="" />
    // </Grid>
    <div>TO BE DESIGNED....</div>
  );
}

export default Client;
