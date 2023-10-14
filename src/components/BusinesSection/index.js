import React from 'react'
import { Grid } from '@material-ui/core'
import serviceLogoFirst from "../../images/serviceLogoFirst.svg";
import serviceLogoSec from "../../images/serviceLogoSec.svg";
import serviceLogoThird from "../../images/serviceLogothird.svg";
import serviceLogoFourth from "../../images/serviceLogofourth.svg";
import serviceLogoFifth from "../../images/serviceLogoFifth.svg";

import { useStyles } from './styles';

const BusinessContent = () => {
    const classes= useStyles()
  return (
    <Grid container item xs={12}>
        <Grid xs={6} className={classes.imageContainer}>
            <img className={classes.imgService} src={serviceLogoFirst} alt="servMob1"/>
        </Grid>
        <Grid xs={6} className={classes.imageContainer}>
            <img className={classes.imgService} src={serviceLogoSec} alt="servMob2"/>
        </Grid>
        <Grid xs={6} className={classes.imageContainer}>
            <img className={classes.imgService} src={serviceLogoThird} alt="servMob3"/>
        </Grid>
        <Grid xs={6} className={classes.imageContainer}>
            <img className={classes.imgService} src={serviceLogoFourth} alt="servMob4"/>
        </Grid>
        <Grid xs={12} className={classes.imageContainer}>
            <img className={classes.imgServiceLast} src={serviceLogoFifth} alt="servMob5"/>
        </Grid>
    </Grid>
  )
}

export default BusinessContent