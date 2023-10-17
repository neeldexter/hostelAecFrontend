import React, { useState, useEffect } from "react";
import { Drawer, Button, Typography } from "@material-ui/core";
import { useStyles } from "./styles";
import logo from "../../images/logo.svg";
import collapseIcon from "../../images/collapseIcon.png";
import crossIcon from "../../images/cross.png";
import flag from "../../images/flag.svg";
import { Link, useNavigate } from "react-router-dom";
import AAU_LOGO from "../../images/aec/logo.jpg";

function TopBarMobile() {
  const classes = useStyles();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };
  const navigateTo = routePath => {
    setIsOpen(!isOpen);
    navigate(routePath);
  };

  return (
    <div className={classes.roofTop}>
      <div className={classes.fixedContent}>
        <Link to="/" className={classes.link}>
          <img src={AAU_LOGO} className={classes.mobileLogo} style={{borderRadius:"50%"}} alt="logoMobile" />
        </Link>
        <img
          src={collapseIcon}
          className={classes.collapse}
          alt="collapseIcon"
          onClick={toggleDrawer}
        />
      </div>
      <Drawer anchor={"top"} open={isOpen} onClose={toggleDrawer}>
        <div role="presentation" className={classes.drawerDiv}>
          <img src={AAU_LOGO} alt="cross" style={{width:"45px",borderRadius:"50%"}} />
          <img
            className={classes.crossIconDes}
            src={crossIcon}
            alt="cross"
            onClick={toggleDrawer}
          />
        </div>
        <div className={classes.contentDiv}>
          <Typography
            className={classes.lineItem}
            variant="h5"
            align="left"
            onClick={() => navigateTo("/")}
          >
            Home
          </Typography>
          <Typography
            className={classes.lineItem}
            variant="h5"
            align="left"
            onClick={() => navigateTo("#")}
          >
           About us
          </Typography>
          <Typography
            className={classes.lineItem}
            variant="h5"
            align="left"
            onClick={() => navigateTo("/registration")}
          >
            Registration
          </Typography>
          <Typography
            className={classes.lineItem}
            variant="h5"
            align="left"
            onClick={() => navigateTo("/alumni-list")}
          >
               Alumni
          </Typography>
          <Typography
            className={classes.lineItem}
            variant="h5"
            align="left"
            onClick={() => navigateTo("/careers")}
          >
               Contact us
          </Typography>
          <Typography
            className={classes.lineItem}
            variant="h5"
            align="left"
            onClick={() => navigateTo("/login")}
          >
            Login
          </Typography>
        </div>
      </Drawer>
    </div>
  );
}

export default TopBarMobile;
