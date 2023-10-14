import React, {useState} from "react";
import {useFormik} from "formik";
import {Button, TextField, InputAdornment} from "@material-ui/core";
import {validationSchema} from "./yup";
import {useStyles} from "./styles";
import axios from "axios";
import toFormData from "../../util/toFormData";
import {useSnackbar} from "notistack";
import {ORG_REG_URL} from "../../config";
// import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';

function PartnersFormPage({formType}) {
  const classes = useStyles();
  const {enqueueSnackbar} = useSnackbar();

  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      designation: "",
      org_type: formType,
      email: "",
      ph_no: "",
      country: "",
      org_name: "",
      details: "",
    },
    validationSchema: validationSchema,
    onSubmit: values => {
      submitForm(values);
    },
  });

  const submitForm = async values => {
    console.log({values});
    let formdata = {...values};
    formdata.ph_no = "+" + formdata.ph_no;

    try {
      let finalData = toFormData(formdata);

      const response = await axios.post(`${ORG_REG_URL}`, finalData);
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
          name="first_name"
          label="First Name"
          variant="outlined"
          required
          value={formik.values.first_name}
          onChange={formik.handleChange}
          error={formik.touched.first_name || Boolean(formik.errors.first_name)}
          helperText={formik.touched.first_name || formik.errors.first_name}
        />
        <TextField
          name="last_name"
          label="Last Name"
          variant="outlined"
          required
          value={formik.values.last_name}
          onChange={formik.handleChange}
          error={formik.touched.last_name || Boolean(formik.errors.last_name)}
          helperText={formik.touched.last_name || formik.errors.last_name}
        />
        <TextField
          name="designation"
          label="Designation"
          variant="outlined"
          required
          value={formik.values.designation}
          onChange={formik.handleChange}
          error={
            formik.touched.designation || Boolean(formik.errors.designation)
          }
          helperText={formik.touched.designation || formik.errors.designation}
        />
        <TextField
          name="org_name"
          label="Organisation Name"
          variant="outlined"
          required
          value={formik.values.org_name}
          onChange={formik.handleChange}
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
          name="ph_no"
          label="Business Phone"
          variant="outlined"
          //  type="number"
          InputProps={{
            startAdornment: <InputAdornment position="start">+</InputAdornment>,
          }}
          value={formik.values.ph_no}
          onChange={formik.handleChange}
          required
          error={formik.touched.ph_no || Boolean(formik.errors.ph_no)}
          helperText={formik.touched.ph_no || formik.errors.ph_no}
        />
        <TextField
          name="country"
          label="Country"
          variant="outlined"
          required
          value={formik.values.country}
          onChange={formik.handleChange}
          error={formik.touched.country || Boolean(formik.errors.country)}
          helperText={formik.touched.country || formik.errors.country}
        />
        <TextField
          name="details"
          label="Please provide us more details"
          variant="outlined"
          value={formik.values.details}
          onChange={formik.handleChange}
          multiline
          rows={6}
        />
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

export default PartnersFormPage;