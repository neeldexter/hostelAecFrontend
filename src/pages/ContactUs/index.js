import React, { useEffect } from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import ContactImage from "../../images/ContactUs.jpg";
import { TemplateContents, Countries, tagLine } from "./contents";
import phoneIcon from "../../images/phone.jpg";
import emailIcon from "../../images/email.jpg";
import { useStyles } from "./styles";
import alumniPic from "../../images/KOLicon.jpg"
import contact1 from "../../images/aec/testimonial2.jpeg"
import vivek from "../../images/aec/vivek.jpg"
import pranab from "../../images/aec/pranab.jpg"
import chiman from "../../images/aec/chiman.jpg"
import shashanka from "../../images/aec/shasanka.jpg"
import sanidhya from "../../images/aec/sanidhya.jpg"
import shubham from "../../images/aec/shubham.jpg"
import deep from "../../images/aec/deepjyoti.jpg"
import abinash from "../../images/aec/abinash.jpg"

function ContactUs() {
  const contactInfo = [
    {
      photo: contact1,
      name: "PULAK GOSWAMI",
      position: "PRESIDENT OF DIAMOND JUBILEE COMMITTEE",
      email: "pulakgoswami1956@gmail.com",
      phone: "9864028093"
    },
    {
      photo: pranab,
      name: "PRANAB MILAN GOGOI",
      position: "GENERAL SECRETARY OF DIAMOND JUBILEE COMMITTEE",
      email: "pranabmilan@gmail.com",
      phone: "7002808115"
    },
    {
      photo: shashanka,
      name: "DR. SASANKA  BORAH",
      position: "WORKING PRESIDENT OF DIAMOND JUBILEE COMMITTEE",
      email: "sasankaborah06@gmail.com",
      phone: "8876144276"
    },
    {
      photo: deep,
      name: "DEEPJYOTI KALITA",
      position: "TREASURER OF DIAMOND JUBILEE COMMITTEE",
      email: "Deepjyotik1@gmail.com",
      phone: "8011265257"
    },
    {
      photo: abinash,
      name: "DR. ABINASH MAHANTA",
      position: "CURRENT SUPERINTENDENT OF HOSTEL-1",
      email: "abinashmahanta.am@gmail.com",
      phone: "9864027439"
    },
    {
      photo: chiman,
      name: "CHIMAN DEKA",
      position: "TECHNICAL SUPPORT",
      email: "dekaonbest1323@gmaiil.com",
      phone: "8638039865"
    },
    {
      photo: vivek,
      name: "VIVEK DAS",
      position: "HOSTEL MONITOR (2023-24)",
      email: "vivekdas2002@gmail.com",
      phone: "8134094448"
    },
    {
      photo: sanidhya,
      name: "SANIDHYA PRITAM SHARMA",
      position: "TECHNICAL SUPPORT",
      email: "sanidhyasharma321@gmail.com",
      phone: "9401069035"
    },
    {
      photo: shubham,
      name: "SUBHAM DAS",
      position: "HOSTEL WELFARE MONITOR (2023-24)",
      email: "dassubham42490@gmail.com",
      phone: "9365657145"
    }
  ]
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const classes = useStyles();
  return (
    <Grid container>
      <Grid item xs={12} style={{ padding: "2em 1em" }}>
        <Typography variant="h6" className={classes.title}> Please contact us for any queries . We are ready to hear from you ...</Typography>
      </Grid>
      <Grid container className={classes.mainContain}>
        {contactInfo.map((item, key) => 
          <Grid item xs={12} md={6} lg={3} xl={3} className={classes.parentGrid}>
            <div className={classes.parentCard}>
              <div className={classes.parentContactImg}>
                <img className={classes.contactImg} src={item.photo} alt="alumniPic" />
              </div>
              <div>
              <Typography className={classes.textInside}>Name : <span>{item.name}</span>  </Typography>
              <Typography className={classes.textInside}>Position : {item.position}   </Typography>
              <Typography className={classes.textInside}>Email : {item.email}   </Typography>
              <Typography className={classes.textInside}>Contact No. : {item.phone}  </Typography>
              </div>
            </div>
          </Grid>
        )}
      </Grid>

    </Grid>
  );
}

export default ContactUs;
