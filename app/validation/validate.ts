import * as Yup from "yup";

export const validateBillingInfo = () => {
  return Yup.object({
    firstname: Yup.string().required("Name is Required"),
    lastname: Yup.string().required("Lastname is required"),
    companyName: Yup.string(),
    address: Yup.string().required("Address is required"),
    country: Yup.string().required("Country is required"),
    state: Yup.string().required("State is required"),
    zipCode: Yup.number().required("Lastname is required"),
    email: Yup.string().email('enter valid email').required("Email is required"),
    phone: Yup.string().required("Phone Number is required"),
    additionalInfo: Yup.string(),
  });
};
