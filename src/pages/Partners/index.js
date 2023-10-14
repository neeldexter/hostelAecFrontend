import { Typography, Grid, Button, TextField, MenuItem, FormControl, InputLabel,Select } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { useStyles } from "./styles";
import Footer from "../../components/Footer/index.js";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { validationSchema } from "../../schemas";
import CustomizedSnackbars from "../../components/Toast";
import axios from "axios";

function Registration() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const departments = [
    'Computer Science',
    'Electrical',
    'Civil Engineering',
    'Instrumentation',
    'Mechanical',
  ];

  const initialValues = {
    firstName: '',
    middleName: '',
    lastName: '',
    phone: '',
    email: '',
    currentAddress: {
      state: '',
      city: '',
      pin: '',
      postOffice: '',
      country: ''
    },
    permanentAddress: {
      state: '',
      city: '',
      pin: '',
      postOffice: '',
      country: ''
    },
    batchYear: '',
    department:'',
    workInfo:{
      orgName:'',
      designation:'',
      joinedYear:'',
      location:''
    },
    password: '',
    confirmPassword: ''
  };



  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const formik = useFormik({
    initialValues,
     validationSchema,
    onSubmit: (values, { resetForm }) => {
      // Handle form submission here
      console.log(values);
      // setOpen(true)
      submitReg(values)
      resetForm();
    },
  });

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const submitReg = async(values) => {
    let dataVal = await axios.post("http://localhost:5001/api/alumni",values)
    if(dataVal) {
      setOpen(true)
    }
    console.log({dataVal})

  }


  useEffect(()=>{

  },[])

  return (
    <Grid container  style={{padding:"1em 5em"}}>
      <Grid item xs={12}  >
        <CustomizedSnackbars open={open} setOpen={setOpen} handleClose={handleClose}/>
        <Typography variant="h5" className={classes.regTitle}> Register Your Information</Typography>
      </Grid>
      <Grid item xs={12} style={{padding:"1.5em" ,boxShadow:"0px 2px 8px 0px #2a85aa",borderRadius:"10px" }}>
        <form onSubmit={formik.handleSubmit}>
          <Grid container>
            <Grid item xs={12} md={12} lg={4} xl={4} className={classes.fieldDes} >
              <TextField
                fullWidth
                variant="outlined"
                label="First Name"
                name="firstName"
                onChange={formik.handleChange}
                value={formik.values.firstName}
                error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                helperText={formik.touched.firstName && formik.errors.firstName}
              />
            </Grid>
            <Grid item xs={12} md={12} lg={4} xl={4} className={classes.fieldDes}>
              <TextField
                fullWidth
                variant="outlined"
                label="Middle Name (Optional)"
                name="middleName"
                onChange={formik.handleChange}
                value={formik.values.middleName}
              />
            </Grid>
            <Grid item xs={12} md={12} lg={4} xl={4} className={classes.fieldDes} >
              <TextField
                fullWidth
                variant="outlined"
                label="Last Name"
                name="lastName"
                onChange={formik.handleChange}
                value={formik.values.lastName}
                error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                helperText={formik.touched.lastName && formik.errors.lastName}
              />
            </Grid>

            <Grid item xs={12} md={12} lg={4} xl={4} className={classes.fieldDes}>
              <TextField
                fullWidth
                variant="outlined"
                label="Phone"
                name="phone"
                onChange={formik.handleChange}
                value={formik.values.phone}
                error={formik.touched.phone && Boolean(formik.errors.phone)}
                helperText={formik.touched.phone && formik.errors.phone}
              />
            </Grid>
            <Grid item xs={12} md={12} lg={4} xl={4} className={classes.fieldDes} >
              <TextField
                fullWidth
                variant="outlined"
                label="Email"
                name="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
            </Grid>
            <Grid item xs={12} md={12} lg={4} xl={4} className={classes.fieldDes} >
              <TextField
                fullWidth
                variant="outlined"
                label="Batch Year"
                name="batchYear"
                onChange={formik.handleChange}
                value={formik.values.batchYear}
                error={formik.touched.batchYear && Boolean(formik.errors.batchYear)}
                helperText={formik.touched.batchYear && formik.errors.batchYear}
              />
            </Grid>
            <Grid item xs={12} md={12} lg={4} xl={4} className={classes.fieldDes} >
          <FormControl fullWidth>
            <InputLabel id="department-label">Department</InputLabel>
            <Select
              labelId="department-label"
              variant="outlined"
              id="department"
              name="department"
              value={formik.values.department}
              onChange={formik.handleChange}
              error={
                formik.touched.department &&
                Boolean(formik.errors.department)
              }
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {departments.map((department) => (
                <MenuItem key={department} value={department}>
                  {department}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        
            <Grid container item xs={12} className={classes.curAdd}>
              <Grid item xs={12} className={classes.currHead}>
                <Typography variant="body1" className={classes.currDiv}>
                  Current Address
                </Typography>
              </Grid>
              <Grid item xs={12} md={12} lg={4} xl={4} className={classes.fieldDes} >
                <TextField
                  fullWidth
                  variant="outlined"
                  label="State"
                  name="currentAddress.state"
                  onChange={formik.handleChange}
                  value={formik.values.currentAddress.state}
                  error={
                    formik.touched.currentAddress?.state &&
                    Boolean(formik.errors.currentAddress?.state)
                  }
                  helperText={
                    formik.touched.currentAddress?.state &&
                    formik.errors.currentAddress?.state
                  }
                />
              </Grid>
              <Grid item xs={12} md={12} lg={4} xl={4} className={classes.fieldDes} >
                <TextField
                  fullWidth
                  variant="outlined"
                  label="City"
                  name="currentAddress.city" // Use dot notation to access nested field
                  onChange={formik.handleChange}
                  value={formik.values.currentAddress.city}
                  error={
                    formik.touched.currentAddress?.city &&
                    Boolean(formik.errors.currentAddress?.city)
                  }
                  helperText={
                    formik.touched.currentAddress?.city &&
                    formik.errors.currentAddress?.city
                  }
                />
              </Grid>

              <Grid item xs={12} md={12} lg={4} xl={4} className={classes.fieldDes} >
                <TextField
                  fullWidth
                  variant="outlined"
                  label="Pin"
                  name="currentAddress.pin" // Use dot notation to access nested field
                  onChange={formik.handleChange}
                  value={formik.values.currentAddress.pin}
                  error={
                    formik.touched.currentAddress?.pin &&
                    Boolean(formik.errors.currentAddress?.pin)
                  }
                  helperText={
                    formik.touched.currentAddress?.pin &&
                    formik.errors.currentAddress?.pin
                  }
                />

              </Grid>
              <Grid item xs={12} md={12} lg={4} xl={4} className={classes.fieldDes} >
                <TextField
                  fullWidth
                  variant="outlined"
                  label="Post Office"
                  name="currentAddress.postOffice" // Use dot notation to access nested field
                  onChange={formik.handleChange}
                  value={formik.values.currentAddress.postOffice}
                  error={
                    formik.touched.currentAddress?.postOffice &&
                    Boolean(formik.errors.currentAddress?.postOffice)
                  }
                  helperText={
                    formik.touched.currentAddress?.postOffice &&
                    formik.errors.currentAddress?.postOffice
                  }
                />
              </Grid>
              <Grid item xs={12} md={12} lg={4} xl={4} className={classes.fieldDes} >
                <TextField
                  fullWidth
                  variant="outlined"
                  label="Country"
                  name="currentAddress.country" // Use dot notation to access nested field
                  onChange={formik.handleChange}
                  value={formik.values.currentAddress.country}
                  error={
                    formik.touched.currentAddress?.country &&
                    Boolean(formik.errors.currentAddress?.country)
                  }
                  helperText={
                    formik.touched.currentAddress?.country &&
                    formik.errors.currentAddress?.country
                  }
                />
              </Grid>
            </Grid>
            <Grid container item xs={12} className={classes.curAdd}>
              <Grid item xs={12} className={classes.currHead}>
                <Typography variant="body1" className={classes.currDiv}>
                  Permanent Address
                </Typography>
              </Grid>
              <Grid item xs={12} md={12} lg={4} xl={4} className={classes.fieldDes} >
                <TextField
                  fullWidth
                  variant="outlined"
                  label="State"
                  name="permanentAddress.state"
                  onChange={formik.handleChange}
                  value={formik.values.permanentAddress.state}
                  error={
                    formik.touched.permanentAddress?.state &&
                    Boolean(formik.errors.permanentAddress?.state)
                  }
                  helperText={
                    formik.touched.permanentAddress?.state &&
                    formik.errors.permanentAddress?.state
                  }
                />
              </Grid>
              <Grid item xs={12} md={12} lg={4} xl={4} className={classes.fieldDes} >
                <TextField
                  fullWidth
                  variant="outlined"
                  label="City"
                  name="permanentAddress.city" // Use dot notation to access nested field
                  onChange={formik.handleChange}
                  value={formik.values.permanentAddress.city}
                  error={
                    formik.touched.permanentAddress?.city &&
                    Boolean(formik.errors.permanentAddress?.city)
                  }
                  helperText={
                    formik.touched.permanentAddress?.city &&
                    formik.errors.permanentAddress?.city
                  }
                />
              </Grid>

              <Grid item xs={12} md={12} lg={4} xl={4} className={classes.fieldDes} >
                <TextField
                  fullWidth
                  variant="outlined"
                  label="Pin"
                  name="permanentAddress.pin" // Use dot notation to access nested field
                  onChange={formik.handleChange}
                  value={formik.values.permanentAddress.pin}
                  error={
                    formik.touched.permanentAddress?.pin &&
                    Boolean(formik.errors.permanentAddress?.pin)
                  }
                  helperText={
                    formik.touched.permanentAddress?.pin &&
                    formik.errors.permanentAddress?.pin
                  }
                />

              </Grid>
              <Grid item xs={12} md={12} lg={4} xl={4} className={classes.fieldDes} >
                <TextField
                  fullWidth
                  variant="outlined"
                  label="Post Office"
                  name="permanentAddress.postOffice" // Use dot notation to access nested field
                  onChange={formik.handleChange}
                  value={formik.values.permanentAddress.postOffice}
                  error={
                    formik.touched.permanentAddress?.postOffice &&
                    Boolean(formik.errors.permanentAddress?.postOffice)
                  }
                  helperText={
                    formik.touched.permanentAddress?.postOffice &&
                    formik.errors.permanentAddress?.postOffice
                  }
                />
              </Grid>
              <Grid item xs={12} md={12} lg={4} xl={4} className={classes.fieldDes} >
                <TextField
                  fullWidth
                  variant="outlined"
                  label="Country"
                  name="permanentAddress.country" // Use dot notation to access nested field
                  onChange={formik.handleChange}
                  value={formik.values.permanentAddress.country}
                  error={
                    formik.touched.permanentAddress?.country &&
                    Boolean(formik.errors.permanentAddress?.country)
                  }
                  helperText={
                    formik.touched.permanentAddress?.country &&
                    formik.errors.permanentAddress?.country
                  }
                />
              </Grid>
            </Grid>




            <Grid container item xs={12} className={classes.curAdd}>
              <Grid item xs={12} className={classes.currHead}>
                <Typography variant="body1" className={classes.currDiv}>
                  Work Information (optional)
                </Typography>
              </Grid>
              <Grid item xs={12} md={12} lg={4} xl={4} className={classes.fieldDes} >
                <TextField
                  fullWidth
                  variant="outlined"
                  label="Organisation"
                  name="workInfo.orgName"
                  onChange={formik.handleChange}
                  value={formik.values.workInfo.orgName}
                  error={
                    formik.touched.workInfo?.orgName &&
                    Boolean(formik.errors.workInfo?.orgName)
                  }
                  helperText={
                    formik.touched.workInfo?.orgName &&
                    formik.errors.workInfo?.orgName
                  }
                />
              </Grid>
              <Grid item xs={12} md={12} lg={4} xl={4} className={classes.fieldDes} >
                <TextField
                  fullWidth
                  variant="outlined"
                  label="Designation"
                  name="workInfo.designation" // Use dot notation to access nested field
                  onChange={formik.handleChange}
                  value={formik.values.workInfo.designation}
                  error={
                    formik.touched.workInfo?.designation &&
                    Boolean(formik.errors.workInfo?.designation)
                  }
                  helperText={
                    formik.touched.workInfo?.designation &&
                    formik.errors.workInfo?.designation
                  }
                />
              </Grid>

              <Grid item xs={12} md={12} lg={4} xl={4} className={classes.fieldDes} >
                <TextField
                  fullWidth
                  variant="outlined"
                  label="Joined Year"
                  name="workInfo.joinedYear" // Use dot notation to access nested field
                  onChange={formik.handleChange}
                  value={formik.values.workInfo.joinedYear}
                  error={
                    formik.touched.workInfo?.joinedYear &&
                    Boolean(formik.errors.workInfo?.joinedYear)
                  }
                  helperText={
                    formik.touched.workInfo?.joinedYear &&
                    formik.errors.workInfo?.joinedYear
                  }
                />

              </Grid>
              <Grid item xs={12} md={12} lg={4} xl={4} className={classes.fieldDes} >
                <TextField
                  fullWidth
                  variant="outlined"
                  label="Location"
                  name="workInfo.location" // Use dot notation to access nested field
                  onChange={formik.handleChange}
                  value={formik.values.workInfo.location}
                  error={
                    formik.touched.workInfo?.location &&
                    Boolean(formik.errors.workInfo?.location)
                  }
                  helperText={
                    formik.touched.workInfo?.location &&
                    formik.errors.workInfo?.location
                  }
                />
              </Grid>
            </Grid>




            <Grid item xs={12} md={12} lg={4} xl={4} className={classes.fieldDes} >
              <TextField
                fullWidth
                variant="outlined"
                label="Password"
                name="password"
                type="password"
                onChange={formik.handleChange}
                value={formik.values.password}
                error={formik.touched.password && Boolean(formik.errors.password)}
                helperText={formik.touched.password && formik.errors.password}
              />
            </Grid>
            <Grid item xs={12} md={12} lg={4} xl={4} className={classes.fieldDes}>
              <TextField
                fullWidth
                variant="outlined"
                label="Confirm Password"
                name="confirmPassword"
                type="password"
                onChange={formik.handleChange}
                value={formik.values.confirmPassword}
                error={
                  formik.touched.confirmPassword &&
                  Boolean(formik.errors.confirmPassword)
                }
                helperText={
                  formik.touched.confirmPassword && formik.errors.confirmPassword
                }
              />
            </Grid>

            <Grid item xs={12}>
              <Button variant="contained" color="primary" type="submit" fullWidth className={classes.subBut}>REGISTER</Button>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Grid>

  );
}

export default Registration;
