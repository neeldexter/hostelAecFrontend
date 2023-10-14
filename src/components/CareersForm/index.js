import React, {useState, useEffect} from "react";
import {useFormik} from "formik";
import {
  InputAdornment,
  Button,
  TextField,
  Typography,
} from "@material-ui/core";
import {validationSchema} from "./yup";
import {useStyles} from "./styles";
import axios from "axios";
import toFormData from "../../util/toFormData";
import moment from "moment";
import {useSnackbar} from "notistack";
import {API_URL} from "../../config";

function CareersFormPage({role}) {
  const classes = useStyles();
  const {enqueueSnackbar} = useSnackbar();

  useEffect(() => {}, []);

  const formik = useFormik({
    initialValues: {
      full_name: "",
      designation: role,
      email: "",
      mobile_no: "",
      grad_university: "",
      degree_subject: "",
      grad_year: "",
      ugrad_university: "",
      details: "",
      resume: "",
    },
    validationSchema: validationSchema,
    onSubmit: values => {
      submitForm(values);
    },
  });

  const handleImgChange = e => {
    formik.values.resume = e.target.files[0];
  };

  const submitForm = async values => {
    console.log({values});
    let formdata = {...values};
    formdata.grad_year = moment().format("YYYY");
    formdata.mobile_no = "+" + formdata.mobile_no;

    try {
      let finalData = toFormData(formdata);
      const response = await axios.post(API_URL, finalData);
      console.log(response);
      if (response) {
        enqueueSnackbar("Successfully Submitted", {
          variant: "success",
          anchorOrigin: {
            vertical: "bottom",
            horizontal: "center",
          },
          autoHideDuration: 2500,
        });
        formik.resetForm();
      }
    } catch (error) {
      console.error(error?.response?.data?.errors?.[0]?.[1]);
      if (error?.response?.data?.errors) {
        for (const errors of error.response.data.errors) {
          enqueueSnackbar(errors[1], {
            variant: "error",
            anchorOrigin: {
              vertical: "bottom",
              horizontal: "center",
            },
            autoHideDuration: 1500,
          });
        }
      } else {
        enqueueSnackbar(error?.message, {
          variant: "error",
          anchorOrigin: {
            vertical: "bottom",
            horizontal: "center",
          },
          autoHideDuration: 1500,
        });
      }
    }
  };
  return (
    <div className={classes.formContainer}>
      <form onSubmit={formik.handleSubmit} className={classes.form}>
        <TextField
          name="full_name"
          label="Full Name"
          variant="outlined"
          required
          value={formik.values.full_name}
          onChange={formik.handleChange}
          error={formik.touched.full_name || Boolean(formik.errors.full_name)}
          helperText={formik.touched.full_name || formik.errors.full_name}
        />
        <TextField
          name="designation"
          label="Position you are applying for"
          variant="outlined"
          value={formik.values.designation}
          onChange={formik.handleChange}
          error={
            formik.touched.designation || Boolean(formik.errors.designation)
          }
          helperText={formik.touched.designation || formik.errors.designation}
          disabled={role != ""}
        />
        <TextField
          name="email"
          label="Email"
          variant="outlined"
          required
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email || Boolean(formik.errors.email)}
          helperText={formik.touched.email || formik.errors.email}
        />
        <TextField
          name="mobile_no"
          label="Mobile Number"
          variant="outlined"
          required
          InputProps={{
            startAdornment: <InputAdornment position="start">+</InputAdornment>,
          }}
          value={formik.values.mobile_no}
          onChange={formik.handleChange}
          error={formik.touched.mobile_no || Boolean(formik.errors.mobile_no)}
          helperText={formik.touched.mobile_no || formik.errors.mobile_no}
        />
        <TextField
          name="grad_university"
          label="Graduate University"
          variant="outlined"
          value={formik.values.grad_university}
          onChange={formik.handleChange}
          error={
            formik.touched.grad_university ||
            Boolean(formik.errors.grad_university)
          }
          helperText={
            formik.touched.grad_university || formik.errors.grad_university
          }
        />
        <TextField
          name="degree_subject"
          label="Degree Subject"
          variant="outlined"
          required
          value={formik.values.degree_subject}
          onChange={formik.handleChange}
          error={
            formik.touched.degree_subject ||
            Boolean(formik.errors.degree_subject)
          }
          helperText={
            formik.touched.degree_subject || formik.errors.degree_subject
          }
        />
        <TextField
          name="grad_year"
          label="Date of graduation"
          variant="outlined"
          type="date"
          InputLabelProps={{shrink: true}}
          value={formik.values.grad_year}
          onChange={formik.handleChange}
          error={formik.touched.grad_year || Boolean(formik.errors.grad_year)}
          helperText={formik.touched.grad_year || formik.errors.grad_year}
        />
        <TextField
          name="ugrad_university"
          label="Undergraduate University"
          variant="outlined"
          value={formik.values.ugrad_university}
          onChange={formik.handleChange}
          error={
            formik.touched.ugrad_university ||
            Boolean(formik.errors.ugrad_university)
          }
          helperText={
            formik.touched.ugrad_university || formik.errors.ugrad_university
          }
        />
        <Typography className={classes.paragraph}>
          If you've graduated, what have you been up to since? Please provide a
          short description of jobs, internships or other activity since you
          graduated.
        </Typography>
        <TextField
          name="details"
          label=""
          variant="outlined"
          value={formik.values.details}
          onChange={formik.handleChange}
          multiline
          rows={6}
        />
        <div className={classes.uploadContainer}>
          <span className={classes.cvText}>CV or resume </span>
          <input
            type="file"
            name="resume"
            className={classes.upload}
            onChange={handleImgChange}
          />
        </div>
        <Button
          color="primary"
          variant="contained"
          type="submit"
          className={classes.sumbitButton}
        >
          Submit
        </Button>
      </form>
    </div>
  );
}

export default CareersFormPage;
