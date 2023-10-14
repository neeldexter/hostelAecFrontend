import React from "react";
import Dialog from "@material-ui/core/Dialog";
import { Typography } from "@material-ui/core";
import { useStyles } from "./styles";
import CloseIcon from "../../images/close.svg";
import Logo from "../../images/formLogo.svg";
import CareersFormPage from "../CareersForm";
import PartnersFormPage from "../PartnersForm";

export default function DialogForm({ open, setOpen, role, formType }) {
  const classes = useStyles();
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        open={open}
        scroll="body"
        PaperProps={{
          style: {
            borderRadius: 20,
            width: "100%",
          },
        }}
      >
        <div className={classes.paper}>
          <div className={classes.topBar}>
            <span className={classes.close} onClick={handleClose}>
              <img src={CloseIcon} alt="X" />
            </span>
          </div>
          <div className={classes.container}>
            <div className={classes.logoContainer}>
              <img src={Logo} alt="logo" className={classes.logo} />
            </div>
          </div>
          <div className={classes.form}>
            <Typography className={classes.heading}>
              Fill out the details and we'll get in touch within 24 hours.
            </Typography>
          </div>
          {formType == "careerForm" ? (
            <CareersFormPage role={role} />
          ) : (
            <PartnersFormPage formType={formType} />
          )}
        </div>
      </Dialog>
    </div>
  );
}
