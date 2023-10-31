import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import carouselImg1 from "../../images/aau/carousel-5.jpg"
import carouselImg2 from "../../images/aau/carousel-6.jpg"
import carouselImg3 from "../../images/aau/carousel-1.jpg"
import carouselImg4 from "../../images/aau/carousel-7.jpg"
import pic1 from "../../images/aec/pic1.jpg"
import pic2 from "../../images/aec/pic2.jpeg"
import pic3 from "../../images/aec/hostelpic.png"
import pic4 from "../../images/aec/pic4.jpeg"
import pic5 from "../../images/aec/pic5.jpeg"
import pic6 from "../../images/aec/pic6.jpeg"

import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: 'Games and laughter on our vibrant playground – where friendships are born.',
    // imgPath:
      // 'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
      imgPath: pic1
  },
  {
    label: 'Elevate Your Stay, Create Memories: Prestigious Hostel #1 - Your Next Destination.',
    // imgPath:
    //   'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
    imgPath: pic5
  },
  {
    label: 'Prestigious Hostel #1: Where Every Corner Beckons with Warmth and Comfort.',
    // imgPath:
    //   'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250',
    imgPath: pic3
  },
  {
    label: 'Your Home Away from Home: Discover the Prestigious Hostel Experience',
    // imgPath:
    //   'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
    imgPath: pic6
  },
];

function SwipeableTextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ maxWidth: 1000, flexGrow: 1, border:"10px solid white",          border:" 6px solid #065a62",
    padding: "1em",
    background: "#ffffff",
    boxShadow: "5px 5px 2px -2px #5f5f5f",
    borderRadius: "10px", }}>
      <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: 30,
          pl: 2,
          bgcolor: 'background.default',
        }}
      >
        <Typography style={{fontSize:"1.5em", fontWeight:"bold", color:"#065a62",textShadow:"3px 3px #d8cccc"}}>{images[activeStep].label}</Typography>
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label} style={{marginTop:"1em"}}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: 500,
                  display: 'block',
                //   maxWidth: 400,
                  overflow: 'hidden',
                  width: 1000,
                  borderRadius:"10px",
                  boxShadow: "5px 5px 2px -2px #5f5f5f",
                  // border:" 6px solid #065a62",
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
    </Box>
  );
}

export default SwipeableTextMobileStepper;