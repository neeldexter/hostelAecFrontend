import * as Yup from 'yup';

  export const validationSchema = Yup.object().shape({
   firstName: Yup.string().required('First Name is required'),
   middleName: Yup.string(),
   lastName: Yup.string().required('Last Name is required'),
   phone: Yup.string()
     .required('Phone is required')
     .matches(/^\d{10}$/, 'Invalid phone number'),
   email: Yup.string()
     .required('Email is required')
     .email('Invalid email address'),
   currentAddress: Yup.object().shape({
     state: Yup.string().required('State is required'),
     city: Yup.string().required('City is required'),
     pin: Yup.string().required('PIN is required'),
     postOffice: Yup.string().required('Post Office is required'),
     country: Yup.string().required('Country is required'),
   }),
   permanentAddress: Yup.object().shape({
     state: Yup.string().required('State is required'),
     city: Yup.string().required('City is required'),
     pin: Yup.string().required('PIN is required'),
     postOffice: Yup.string().required('Post Office is required'),
     country: Yup.string().required('Country is required'),
   }),
   batchYear: Yup.string()
   .required('Batch Year is required')
   .matches(/^[0-9]{4}$/, 'Invalid Batch Year (e.g., 2023)'),
   department: Yup.string().required('Department is required'),
   workInfo: Yup.object().shape({
    orgName: Yup.string(),
    designation: Yup.string(),
    joinedYear: Yup.string(),
    location: Yup.string()
  }),
   password: Yup.string()
     .required('Password is required')
     .min(8, 'Password must be at least 8 characters'),
   confirmPassword: Yup.string()
     .required('Confirm Password is required')
     .oneOf([Yup.ref('password'), null], 'Passwords must match'),
 });
 
  
  export const initialValues = {
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
      country: '',
    },
    permanentAddress: {
      state: '',
      city: '',
      pin: '',
      postOffice: '',
      country: '',
    },
    batchYear: '',
    password: '',
    confirmPassword: '',
  };
  