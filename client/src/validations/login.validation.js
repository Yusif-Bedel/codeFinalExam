import * as Yup from "yup";

const loginValidation = Yup.object().shape({
  password: Yup.string().required(),
  email: Yup.string().email("Must be a valid email").required("Email is required")
});

export default loginValidation;