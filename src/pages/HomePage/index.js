import React, { useRef, useEffect } from "react";
import ChatBot from "../../components/ChatBot.js";
import { Grid, Typography } from "@material-ui/core";
import serviceLogoFirst from "../../images/serviceLogoFirst.svg";
import partner1 from "../../images/aau/partner1.png";
import partner2 from "../../images/aau/partner2.svg";
import Footer from "../../components/Footer/index.js";
import { useStyles } from "./styles.js";
import videoAd from "../../images/aec/videoAd.mp4"
import hostelPic from "../../images/aec/hostelpicThumbnail.png"
import pic1 from "../../images/aec/pic1.jpg"
import pic2 from "../../images/aec/pic2.jpeg"
import pic3 from "../../images/aec/pic3.jpeg"
import pic4 from "../../images/aec/pic4.jpeg"
import pic5 from "../../images/aec/pic5.jpeg"
import testimonial1 from "../../images/aec/testimonial1.jpeg"
import testimonial2 from "../../images/aec/testimonial2.jpeg"
import testimonial3 from "../../images/aec/testimonial3.jpeg"
import testimonial4 from "../../images/aec/testimonial4.jpg"
import testimonial5 from "../../images/aec/testimonial5.jpeg"
import testimonial6 from "../../images/aec/testimonial6.jpeg"


const contents = [
  {
    img: testimonial1,
    title: "Bulon Chandra Borgohain",
    span: "1956-1961",
    content: "— As second batch CE student in AEC. I stayed at hostel 1 for almost 3 years till I passed out in March 1961 passed out as a graduate civil engineer in March 1961. Memories and emotions flooded my mind when I attended Golden Jubilee Celebrations of Hostel 1 a few years back. I feel proud as my 2 sons also laterwere boarders of Hostel 1. AEC and Hostel 1 made me a confident person besides making me a graduate engineer. Congratulations to all you present boarders of Hostel 1 for being able to celebrate Diamond Jubilee of AEC Hostel 1. I wish a grand success for the proposed Diamond Jubilee celebrations of Hostel 1."
  },
  {
    img: testimonial2,
    title: "Pulak Goswami",
    span: "1973-1978",
    content: "— AEC Hostel 1 - The first instance of independence and self-sufficiency in my life. Hostel life taught me the importance of discipline. কিবা এটা যে কৰিব পাৰিম , সেই বিশ্বাসটো পালো । Infact, 2nd yearত যেতিয়া পৰীক্ষা বেয়া কৰিছিলো, কলেজ যাব নালাগিছিল যদিও হোষ্টেলতে আছিলো আৰু তেতিয়াই the idea of Green Valley Travels started. সেই ১বছৰৰ হোষ্টেলত থকা সময়খিনি , that was the turning point of my life. Hostel life taught me to solve problems and difficulties and not get overwhelmed by them. Also, taught me how to be self-sufficient and do everything on my own. I owe a lot of personal and professional success of my life to H1."
  },
  {
    img: testimonial6,
    title: "Subhas Chandra Goswami",
    span: "1958-1963",
    content: "— Sixty years back I left Hostel No1, but fragrance of those days are still in my heart. In fact, I was in the first batch to enter Hostel No3, but in the first opportunity I shifted to Hostel No1. The attraction was the playground in front of it. This playground and the atmosphere of the hostel helped me to attain some amount of success in football and cricket. In fact, I was selected to represent Assam in cricket."
  },
  {
    img: testimonial3,
    title: "Nava Jyoti Medhi",
    span: "1989-1993",
    content: "— No words can articulate the contribution and importance of Hostel no. 1 in our lives. I was fortunate to be in the company of a supremely talented bunch of guys in this hostel. Together we laughed and cried, sang and danced, splashed life along the corridors and on the walls. Here we strived to excel and learnt to care. The life we spent here gave shape to our present, and our future. So, a BIG THANK YOU to Hostel no. 1 of Assam Engineering College, and wish all its past and present boarders a bright future."
  },
  {
    img: testimonial4,
    title: "Anupam Konwar ",
    span: "2003- 2007",
    content: "— I look back at my life in AEC Hostel#1 with profound gratitude and a deep sense of nostalgia. Those years spent in Hostel#1 were truly transformative, shaping not only my academic journey but also molding me into the person I am today. It taught me how to become independent, self-sufficient and resilient, skills that continue to serve me well in various aspects of my life. My life in Hostel#1 was an incredibly transformative period that taught me valuable life lessons and forged lifelong friendships. It provided me with a nurturing environment to grow personally, academically, and culturally. I will forever cherish the memories, the laughter, the late-night conversations, and the bonds formed during those years. My hostel experience not only prepared me for the challenges of the world beyond college but also gifted me with friends for life."
  },
  {
    img: testimonial5,
    title: "Eashan Saikia",
    span: "2011-2015",
    content: "— I had a fantastic time at Hostel 1, during the four years of my undergraduate studies. My time at AEC has been enriched by the hostel community, which gave me an opportunity to develop academically, as well as expanded my cultural experiences through participation in the college week events like Qawali, Jikir, and Chorus. I also represented the hostel in the Tennis tournament, where we bagged the 2nd position consecutively. Importantly, I picked up a valuable life skill to cook delicious meals, where I learnt several non veg dishes from my fellow brothers during our frequent potluck dinners."
  }
]


function Home() {
  const classes = useStyles();
  let screenSize = window.innerWidth;
  const myRef = useRef(null);

  // -----||----SCROLL TO CHATBOT DIV----||----- //
  const executeScroll = () => myRef.current.scrollIntoView();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Grid container>
      <Grid item xs={12}>
        <div className={classes.headerSec}>
          <Typography variant="h4" className={classes.homeTitle}>Welcome to Hostel #1, <br />Assam Engineering College</Typography>
          <Typography variant="h6" className={classes.homeSubtitle}>We believe in providing more than just a place to stay. We create an environment that fosters growth, camaraderie, and unforgettable memories. Situated within the prestigious Assam Engineering College campus, our hostel is designed to offer a comfortable and convenient living experience for students pursuing excellence in engineering and beyond...</Typography>
        </div>
      </Grid>
      <Grid item xs={12}>
        <div className={classes.videoPart}>
          <video className={classes.videoTag} width="1000" height="550" poster={hostelPic} preload="metadata" controls>
            <source src={videoAd} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </Grid>
      <Grid item xs={12}>
        <Typography variant='h4' align="center" className={classes.snap}>Snapshots...</Typography>
      </Grid>
      <Grid item xs={12} md={5} lg={6} xl={6} className={classes.imgGal}>
        <Typography variant="h4" className={classes.tagline}>Hostel 1 during the golden hour...</Typography>
      </Grid>
      <Grid item xs={12} md={5} lg={6} xl={6} className={classes.imgGal}>
        <img src={pic1} className={classes.videoTag} width="100%" alt="pic" />
      </Grid>
      <Grid item xs={12} md={5} lg={6} xl={6} className={classes.imgGal}>
        <img src={pic2} className={classes.videoTag} width="100%" alt="pic2" />
      </Grid>
      <Grid item xs={12} md={5} lg={6} xl={6} className={classes.imgGal}>
        <Typography variant="h4" className={classes.tagline}>On a lazy winter day...</Typography>
      </Grid>
      <Grid item xs={12} md={5} lg={6} xl={6} className={classes.imgGal}>
        <Typography variant="h4" className={classes.tagline}>Our very own eden, ANKURAN...</Typography>
      </Grid>
      <Grid item xs={12} md={5} lg={6} xl={6} className={classes.imgGal}>
        <img src={pic3} className={classes.videoTag} width="100%" alt="p  ic3" />
      </Grid>

      <Grid item xs={12} md={5} lg={6} xl={6} className={classes.imgGal}>
        <img src={pic4} className={classes.videoTag} width="100%" alt="pic2" />
      </Grid>
      <Grid item xs={12} md={5} lg={6} xl={6} className={classes.imgGal}>
        <Typography variant="h4" className={classes.tagline}>Hostel decoration during diwali...</Typography>
      </Grid>
      <Grid item xs={12} md={5} lg={6} xl={6} className={classes.imgGal}>
        <Typography variant="h4" className={classes.tagline}>The evergreen Silent Storm...</Typography>
      </Grid>
      <Grid item xs={12} md={5} lg={6} xl={6} className={classes.imgGal}>
        <img src={pic5} className={classes.videoTag} width="100%" alt="p  ic3" />
      </Grid>

      <Grid container  className={classes.article} >
        <Grid item xs={12}>
          <Typography variant="h4" align="center" className={classes.snap} style={{color:"#ffffff"}}>Few words from our ex-boarders....</Typography>
        </Grid>
        {contents.map((item, key) =>
          <Grid item xs={12} md={4} lg={4} xl={4} style={{padding:"2em 1em"}}>
            <div className={classes.mainCard}>
              <div className={classes.imgCard}>
                <img className={classes.imgCon} src={item.img} alt="testimonial1" />
                <Typography variant="body1" className={classes.name} >{item.title}</Typography>
                <Typography variant="body1" className={classes.batch} >{item.span}</Typography>
              </div>
              <div className={classes.titleAuth}>
                <Typography variant="body1" className={classes.cont}>{item.content}</Typography>
              </div>
            </div>
          </Grid>)}
      </Grid>

    </Grid>
  );
}

export default Home;
