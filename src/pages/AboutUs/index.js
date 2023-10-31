import React, { useEffect } from "react";
import { Typography, Grid } from "@material-ui/core";
import { useStyles } from "./styles";
import { firstInfo, thematicDetails, touritPlaces } from "./contents";
import aboutVideo from "../../images/aboutVideo.mp4";
import Footer from "../../components/Footer/index.js";
import map from "../../images/aau/map.jpg";
import end from "../../assets/end.png";
import Card from "../AboutUs/Card";
import thumbNail from "../../images/ictThumbnail.jpg";
import SwipeableTextMobileStepper from "../../components/Carousel";
import ThematicCard from "./ThematicCard";
import TouristPlacesCard from "./TouristPlacesCard";
import FeeStructureTable from "./FeeStructureTable";

export default function About() {
  const classes = useStyles();

  const contentStyle = {
    height: '100px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Grid container className={classes.mainContainer}>
      {/* <Grid item xs={12} lg={12} xl={12} className={classes.backgroundImage} /> */}
      <Grid item xs={12} lg={12} xl={12}>


        <div className={classes.secondContainer}>
          {/* <img src={top} alt="" className={classes.top} /> */}

          <Typography variant="h5" className={classes.containerTitle}>
            {" "}
            About Hostel #1
          </Typography>
          <Typography variant="h6" className={classes.secondParagraph}>
            AEC Hostel #1 is situated in the North-eastern part of India, which is one of the richest biodiversity zones in
            the world, consisting of tropical rainforests, deciduous forests, riverine grasslands, bamboo orchards
            and numerous wetland ecosystems.
          </Typography>
        </div>

        <Grid container item xs={12} className={classes.secondInfo}>
          <SwipeableTextMobileStepper />
        </Grid>
      </Grid>


    </Grid>
   
  );
}
