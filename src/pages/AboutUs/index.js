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
    // <Grid container className={classes.mainContainer}>
    //   {/* <Grid item xs={12} lg={12} xl={12} className={classes.backgroundImage} /> */}
    //   <Grid item xs={12} lg={12} xl={12}>
    //     <div className={classes.firstContainer}>
    //       <Typography variant="h5" className={classes.title}>
    //         About The Conference
    //       </Typography>
    //       <Typography variant="h6" className={classes.firstParagraph}>
    //         Food security is a global challenge for researchers and policymakers to feed the ever-growing
    //         population across the world. Despite many breakthroughs and technological advances agriculture in
    //         recent times needs more preparedness considering the environmental sustainability with the changed
    //         climate. The international conference on Next-gen preparedness for food security and environmental
    //         sustainability aims at creating a platform for researchers across the globe to the issues and challenges, and
    //         recent progress and discuss new ideas and concepts for achieving the goal of a Sustainable Environment. Moreover,
    //         thisforumwill enlighten young minds and encourage them to develop new ideas.
    //       </Typography>
    //     </div>

    //     <div className={classes.secondContainer}>
    //       {/* <img src={top} alt="" className={classes.top} /> */}

    //       <Typography variant="h5" className={classes.containerTitle}>
    //         {" "}
    //         About Assam
    //       </Typography>
    //       <Typography variant="h6" className={classes.secondParagraph}>
    //         Assam is situated in the North-eastern part of India, which is one of the richest biodiversity zones in
    //         the world, consisting of tropical rainforests, deciduous forests, riverine grasslands, bamboo orchards
    //         and numerous wetland ecosystems. Kaziranga National Park and Manas National Park are World
    //         Heritage sites located in Assam. Assam has conserved the one-horned Indian rhinoceros from near
    //         extinction. Assam is also known worldwide for its tea and silk, and remarkably rich in Orchid
    //         diversity, the Foxtail orchid being the state flower. The conference place Jorhat, the second largest city
    //         and cultural capital of Assam is also an educational hub of the state of Assam.
    //       </Typography>

    //       {/* <Typography variant="h6" className={classes.secondParagraph}>
    //         You can now differentiate yourself with the quality of service and
    //         engaged patient experience that builds sustainable competitive
    //         advantage and contribute greater value to the communities you serve.
    //       </Typography> */}

    //       {/* <Grid container item xs={12} className={classes.firstInfo}>
    //         {firstInfo.map((items, key) => {
    //           return <Card items={items} key={key} index={key} />;
    //         })}
    //       </Grid>
    //       <img src={end} alt="" className={classes.end} /> */}
    //       {/* <div className={classes.end}></div> */}
    //     </div>

    //     <Grid container item xs={12} className={classes.secondInfo}>
    //       <SwipeableTextMobileStepper />
    //     </Grid>
    //   </Grid>

    //   <Grid container item xs={12} lg={12} xl={12}  className={classes.thiredContanier}>
    //     {firstInfo.map((items, key) => {
    //       return <Card items={items} key={key} index={key} />;
    //     })}
    //   </Grid>

    //   <div style={{textAlign:"center",width:"100%"}}>
    //   <Typography variant="h5" className={classes.title}>
    //   Thematic Areas
    //       </Typography>
    //     </div>
    //   <Grid container spacing={2} item className={classes.thematicAreasContainer}>
    //     {thematicDetails.map((items, key) => {
    //       return(
    //         <Grid item xs={12} lg={4} xl={4}>
    //           <ThematicCard items={items} key={key} index={key} />
    //         </Grid>
    //       )
    //     })}
    //   </Grid>

    //   <div className={classes.firstContainer}>
    //       <Typography variant="h5" className={classes.title}>
    //         Travel Information
    //       </Typography>
    //       <Typography variant="h5" className={classes.secondTitleHowToReach}>
    //         How to reach Jorhat
    //       </Typography>
    //       <Typography variant="h6" className={classes.firstParagraph}>
    //         Jorhat is well connected and approachable by air, rail and road. The University is at a distance of 4 km
    //         from Jorhat Airport, 6 km from Jorhat Railway station and 5 km from the Inter-State Bus Terminus.
    //         For participants starting their journey from New Delhi, a number of superfast direct trains to Mariani
    //         Railway Junction (17 Km from Jorhat) are available. Taxi service can be availed from Mariani to
    //         reach respective Hotels/Guest houses. Help desks service will be available at Jorhat, Dibrugarh and
    //         Dimapur airports as well as in Jorhat and Mariani Railway stations for convenience of the participants.
    //       </Typography>
    //       <Grid container spacing={2} style={{
    //             background: "white",
    //             padding: "2em",
    //             borderRadius: "10px",
    //             boxShadow: "4px 6px 10px 0px #504a4a",
            
    //       }}>
    //       <Grid item sm={12} lg={7} xl={7}>
    //         <div style={{display:"flex", justifyContent:"center", flexDirection:"column", height:"100%"}}>
    //           <div style={{alignSelf:'center'}}>
    //             <Typography variant="h5" className={classes.secondTitleHowToReach}>
    //               Accomodation
    //             </Typography>
    //           </div>
    //           <div style={{alignSelf:'center'}}>
    //             <Typography variant="h6" className={classes.firstParagraph}>
    //               A Limited nos. Of registered delegates would be accomodated
    //               in the AAU Guest House on Firsr-Come-First-Serve basis at official
    //               rates. Other delegates would be accomodated in nearest hotels/
    //               guest houses and transportation would be arranged by the comittee.
    //             </Typography>
    //           </div>
    //         </div>
    //       </Grid>
    //       <Grid item sm={12} lg={5} xl={5} 
    //       >
            
    //         <img src={map} alt="AAU map" style={{maxWidth:"100%", maxHeight:"400px"}}/>
            
    //       </Grid>
    //       </Grid>
    //   </div>

    //   <div className={classes.firstContainer}>
    //       <Typography variant="h5" className={classes.title}>
    //         Tourists attractions nearby
    //       </Typography>
    //       <Grid container spacing={2} item className={classes.thematicAreasContainer}>
    //         {touritPlaces.map((items, key) => {
    //           return(
    //           <Grid item xs={12} lg={4} xl={4}>
    //             <TouristPlacesCard items={items} key={key} index={key} />
    //           </Grid>
    //         )
    //     })}
    //   </Grid>
    //   </div>

    //   <Grid item sm={12} lg={7} xl={7} className={classes.registrationFeesContainer}>
    //     <Typography variant="h6" style={{textAlign:"center"}}>
    //       Registration Fees
    //     </Typography>
        
    //     <Typography variant="subtitle1">
    //       The conference will be open for registered delegates. The details of the registration fee are given below.
    //     </Typography>
    //     <div style={{margin:"3em auto"}}>
    //     <FeeStructureTable />
    //     </div>
    //   </Grid>
    //   <Grid item sm={12} lg={5} xl={5} className={classes.bankDetailsContainer}>
    //     <Typography variant="h6" style={{textAlign:"center"}}>
    //       Bank Details For Payment
    //     </Typography>
    //     <div className={classes.bankDetails}>
    //     {/* <table>
    //       <tr>
    //         <td>Account Number</td>
    //         <td>&nbsp;: 41675033089</td>
    //       </tr>
    //       <tr>
    //         <td>Account Holder Name</td>
    //         <td>&nbsp;: AAU General Fund –ARRI, Titabar</td>
    //       </tr>
    //       <tr>
    //         <td>Name of the Bank</td>
    //         <td>&nbsp;: State Bank of India</td>
    //       </tr>
    //       <tr>
    //         <td>RTGS/NEFT/IFS Code</td>
    //         <td>&nbsp;: SBIN0004378</td>
    //       </tr>
    //       <tr>
    //         <td>MICR Code</td>
    //         <td>&nbsp;: 785002518</td>
    //       </tr>
    //       <tr>
    //         <td>Branch Name</td>
    //         <td>&nbsp;: Titabar branch</td>
    //       </tr>
    //     </table> */}
    //     <div className={classes.my_table}>
    //       <div className={classes.my_row}>
    //         <div className={classes.my_cell}>Account Number</div>
    //         <div className={classes.my_cell}>: 41675033089</div>
    //       </div>
    //       <div className={classes.my_row}>
    //         <div className={classes.my_cell}>Account Holder Name</div>
    //         <div className={classes.my_cell}>: AAU General Fund –ARRI, Titabar</div>
    //       </div>
    //       <div className={classes.my_row}>
    //         <div className={classes.my_cell}>Name of the Bank</div>
    //         <div className={classes.my_cell}>: State Bank of India</div>
    //       </div>
    //       <div className={classes.my_row}>
    //         <div className={classes.my_cell}>RTGS/NEFT/IFS Code</div>
    //         <div className={classes.my_cell}>: SBIN0004378</div>
    //       </div>
    //       <div className={classes.my_row}>
    //         <div className={classes.my_cell}>MICR Code</div>
    //         <div className={classes.my_cell}>: 785002518</div>
    //       </div>
    //       <div className={classes.my_row}>
    //         <div className={classes.my_cell}>Branch Name</div>
    //         <div className={classes.my_cell}>: Titabar branch</div>
    //       </div>
    //     </div>
    //     </div>
    //   </Grid>

    //   <Grid item xs={12} className={classes.footer}>
    //     <Footer />
    //   </Grid>
    // </Grid>
    <div>TO BE DESIGNED....</div>
  );
}
