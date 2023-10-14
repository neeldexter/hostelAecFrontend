import * as yup from "yup";

export const validationSchema = yup.object({
  ph_no: yup
    .string()
    .matches(
      /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i,
      "Phone number is not valid"
    )
    .min(10, "should not be less than 10 digits")
    .max(15, "should not be more than 10 digits"),
  email: yup
    .string("Enter your email")
    .email("Enter a valid email"),
  first_name: yup
    .string("Enter your first name")
    .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for First Name "),
  last_name: yup
    .string("Enter your last name")
    .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for Last Name"),
  country: yup
    .string("Enter your last name")
    .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for country"),

  designation: yup
    .string("Enter the designation")
    .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),
});
