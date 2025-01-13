import * as Yup from "yup";

export const validateUserLogin = () => {
  return Yup.object({
    email: Yup.string()
      .email("enter valid email")
      .required("Email is required"),
    password: Yup.string().required("pwd Number is required"),
  });
};
