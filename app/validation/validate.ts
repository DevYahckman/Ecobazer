import * as Yup from "yup";

export const validateBillingInfo = () => {
  return Yup.object({
    firstname: Yup.string().required("Name is Required"),
    lastname: Yup.string().required("Lastname is required"),
    companyName: Yup.string(),
    address: Yup.string().required("Lastname is required"),
    country: Yup.string().required("Lastname is required"),
    state: Yup.string().required("Lastname is required"),
    zipCode: Yup.number().required("Lastname is required"),
    email: Yup.string().required("Lastname is required"),
    phone: Yup.string().required("Lastname is required"),
    additionalInfo: Yup.string(),
  });
};
