import * as yup from "yup";

export const SignupSchema = yup.object({
  firstName: yup.string().required("First Name is required"),
  lastName: yup.string().required("Last Name is required"),
  email: yup
    .string()
    .required("Email is required")
    .email("Email format not valid"),
  role: yup.string().required("Role is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters long"),
  cnfPassword: yup
    .string()
    .oneOf([yup.ref("password"), undefined], "Password must match")
    .required("Confirm Password is required"),
  image: yup.mixed(),
});
