import * as Yup from "yup";

const userValidation = Yup.object().shape({
  username: Yup.string().min(2).required(),
  password: Yup.string()
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
      "Password must contain at least one letter, one number, and be at least 8 characters long"
    )
    .required(),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
//   src: Yup.mixed() 
//   .test({
//     message: `File too big, can't exceed ${5000000}`,
//     test: (file) => {
//       const isValid = file?.size < 5000000;
//       return isValid;
//     }
//   })
//   .test({
//     message: 'Please provide a supported file type',
//     test: (file, context) => {
//       const isValid =file?.type.includes("image/");
//       if (!isValid) context?.createError();
//       return isValid;
//     }
//   })
//  ,
  email: Yup.string().email("Must be a valid email").required("Email is required"),
  role: Yup.string().oneOf(["client"]),
});

export default userValidation;