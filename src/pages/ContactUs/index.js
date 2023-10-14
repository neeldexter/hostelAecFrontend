import React, { useEffect } from "react";
import { Grid, Typography } from "@material-ui/core";
import ContactImage from "../../images/ContactUs.jpg";
import { TemplateContents, Countries, tagLine } from "./contents";
import alternateContactIcon from "../../images/alternateContact.jpg";
import phoneIcon from "../../images/phone.jpg";
import emailIcon from "../../images/email.jpg";
import { useStyles } from "./styles";
import Footer from "../../components/Footer/index.js";

function ContactUs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const classes = useStyles();
  return (
    // <Grid container>
    //   <Grid xs={12}>
    //     <div className={classes.contactImage}>
    //       <img src={ContactImage} width="100%" alt="image"></img>
    //     </div>
    //   </Grid>

    //   <Grid xs={12} className={classes.secondTitle}>
    //     {" "}
    //     <Typography variant="h6" className={classes.tagLine}>
    //       <b>{tagLine}</b>
    //     </Typography>
    //   </Grid>

    //   <Grid container className={classes.templateGrid}>
    //     {TemplateContents.map((item, index) => (
    //       <Grid
    //         item
    //         xs={12}
    //         md={6}
    //         lg={4}
    //         xl={4}
    //         className={classes.templateContainer}
    //       >
    //         <div className={classes.countryName}>{Countries[index]}</div>
    //         <div className={classes.templateCard}>
    //           <div className={classes.templateHeading}>{item.title}</div>
    //           <div className={classes.addressDiv}>
    //             {item.address.map((item, key) => (
    //               <Typography variant="h6" className={classes.templateAddress}>
    //                 {item}
    //               </Typography>
    //             ))}
    //           </div>

    //           <div className={classes.lastTemplateDiv}>
    //             <div className={classes.contactInfo}>
    //               {item.phone && (
    //                 <div className={classes.contactItem}>
    //                   <img src={phoneIcon} alt="icon"></img>
    //                   <Typography className={classes.contactItemText}>
    //                     {item.phone}
    //                   </Typography>
    //                 </div>
    //               )}

    //               {item.alternateNo && (
    //                 <div className={classes.contactItem}>
    //                   <img src={alternateContactIcon} alt="icon"></img>
    //                   <Typography className={classes.contactItemText}>
    //                     {item.alternateNo}
    //                   </Typography>
    //                 </div>
    //               )}
    //               {item.email && (
    //                 <div className={classes.contactItem}>
    //                   <img src={emailIcon} alt="icon"></img>
    //                   <Typography className={classes.contactItemText}>
    //                     {item.email}
    //                   </Typography>
    //                 </div>
    //               )}
    //             </div>
    //             <div className={classes.templateImage}>
    //               <img
    //                 src={item.image}
    //                 alt="country logo"
    //                 className={classes.imgSize}
    //               ></img>
    //             </div>
    //           </div>
    //         </div>
    //       </Grid>
    //     ))}
    //   </Grid>
    //   <Grid container item xs={12} className={classes.footer}>
    //     <Footer />
    //   </Grid>
    // </Grid>
    <div>TO BE DESIGNED....</div>
  );
}

export default ContactUs;
