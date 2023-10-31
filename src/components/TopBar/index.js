import React, { useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import NIBIO_LOGO from "../../images/aau/NIBIO-logo.png";
import AAU_LOGO from "../../images/aau/AAU-logo.png";
import { Link } from "react-router-dom";
import { userNameState } from "../../recoil/index"
import { useRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';


import { useStyles } from "./styles";

function TopBar() {
  const classes = useStyles();
  const navigate = useNavigate();
  const [index, setIndex] = React.useState(0)
  const [userName, setUserName] = useRecoilState(userNameState );
  // const handleClick = (navVal) => {
  //   setIndex(navVal)
  // }

  const handleLogout = () => {
    console.log("loooo",localStorage.getItem("isLogin"))
    localStorage.removeItem("isLogin")
    setUserName("Login")
    navigate("/login")
  }

  useEffect(()=>{
    setUserName(localStorage.getItem("isLogin") || localStorage.getItem("isLogin"))
  },[userName])
  console.log({userName})
  return (
    <div className={classes.root}>
      {/* <Link to="/" className={classes.link}>
        <img className={classes.logo} src={AAU_LOGO} alt="AAU LOGO" />
      </Link> */}
      <div className={classes.headerTitle}>
        <Typography variant="h5" className={classes.titleText} >HOSTEL 1 ALUMNI CONNECT</Typography>
      </div>
      <div className={classes.navItems}>
        <Typography className={classes.title} variant="h6" >
          <Link to="/" className={classes.link}>
            Home
          </Link>
        </Typography>
        <Typography className={classes.title} variant="h6" >
          <Link to="/about-us" className={classes.link}>
            About
          </Link>
        </Typography>
        <Typography className={classes.title} variant="h6" >
          <Link to="/registration" className={classes.link}>
            Registration
          </Link>
        </Typography>
        <Typography className={classes.title} variant="h6" >
          <Link to="/contact-us" className={classes.link}>
            Contact Us
          </Link>
        </Typography>
        <Typography className={classes.title} variant="h6" >
          <Link to="/alumni-list" className={classes.link}>
            Alumni
          </Link>
        </Typography>
        <Typography className={classes.title} variant="h6" >
          {localStorage.getItem("isLogin") =="Login" ? <Typography variant="h6" className={classes.link} onClick ={handleLogout}>
            Logout </Typography> : <Link to="/login" className={classes.link}>
            Login
          </Link>}
        </Typography>
      </div>
    </div>
  );
}
export default TopBar;
