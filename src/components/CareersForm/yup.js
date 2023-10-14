import * as yup from "yup";

export const validationSchema = yup.object({
  full_name: yup
    .string("Enter your full name")
    .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for Full Name "),
  email: yup
    .string("Enter your email")
    .email("Enter a valid email"),
  mobile_no: yup
    .string()
    .matches(
      /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i,
      "Phone number is not valid"
    )
    .min(10, "should not be less than 10 digits")
    .max(15, "should not be more than 10 digits"),
  designation: yup
    .string("Enter The position you are applying for")
    .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),
  degree_subject: yup
    .string("Enter your degree subject"),
});
