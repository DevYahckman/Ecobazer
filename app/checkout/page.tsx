"use client";
import React, { useState } from "react";
import BreadCrumb from "../components/breadCrumbs/BreadCrumb";
import CustomInput from "../components/customInputs/CustomInput";
import { Checkbox } from "antd";
import { Divider } from "antd";
import CustomSelects from "../components/customInputs/CustomSelects";
import { useFormik } from "formik";
import { validateBillingInfo } from "../validation/validate";
import Image from "next/image";
import product from "@/app/assets/images/productFour.png";
import CustomBtn from "../components/button/CustomBtn";
// import { useRouter } from "next/navigation";

const Checkout = () => {
  // const route = useRouter();
  const [showAdditionalInfo, setShowAdditionalInfo] = useState(false);
  const verdictOption = [
    { label: "Approved", value: "approved" },
    { label: "Pending", value: "pending" },
  ];

  const orderSummaryData = [
    {
      img: product,
      units: 5,
      name: "Green Capsicum",
    },
    {
      img: product,
      units: 1,
      name: "Green Capsicum",
    },
  ];

  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      companyName: "",
      address: "",
      country: "",
      state: "",
      zipCode: "",
      email: "",
      phone: "",
      additionalInfo: "",
    },
    validationSchema: validateBillingInfo(),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div>
      <BreadCrumb />
      <form className="py-24" onSubmit={formik.handleSubmit}>
        <div className="grid grid-cols-1 p-5 md:grid-cols-3 gap-9 md:px-16 py-5">
          <div className="md:col-span-2">
            <p className="text-deepGray text-xl font-medium pb-10">
              Billing Information
            </p>

            <div className="grid md:grid-cols-3 gap-3">
              <CustomInput
                placeholder="firstname"
                label="firstname"
                name="firstname"
                value={formik.values.firstname}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.errors.firstname}
                touched={formik.touched.firstname}
              />
              <CustomInput
                placeholder="Last name"
                label="lastname"
                name="lastname"
                value={formik.values.lastname}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.errors.lastname}
                touched={formik.touched.lastname}
              />
              <CustomInput
                placeholder="Company Name"
                label="companyname(optional)"
                name="companyName"
                value={formik.values.companyName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.errors.companyName}
                touched={formik.touched.companyName}
              />
            </div>

            <div className="">
              <CustomInput
                placeholder="Street Address"
                label="Street Address"
                name="address"
                value={formik.values.address}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.errors.address}
                touched={formik.touched.address}
              />
            </div>

            <div className="grid md:grid-cols-3 gap-3">
              <div className="-mt-6">
                <CustomSelects
                  options={verdictOption}
                  placholder="Country"
                  size="large"
                  label="Country"
                  className="w-full  "
                  value={formik.values.country}
                  onChange={(value) => formik.setFieldValue("country", value)}
                  onBlur={formik.handleBlur}
                  error={formik.errors.country}
                  touched={formik.touched.country}
                />
              </div>
              <div className="-mt-6">
                <CustomSelects
                  options={verdictOption}
                  placholder="State"
                  label="State"
                  size="large"
                  className="w-full "
                  value={formik.values.state}
                  onChange={(value) => formik.setFieldValue("state", value)}
                  onBlur={formik.handleBlur}
                  error={formik.errors.state}
                  touched={formik.touched.state}
                />
              </div>
              <CustomInput
                placeholder="Zip code"
                label="Zip code"
                name="zipCode"
                type="number"
                value={formik.values.zipCode}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.errors.zipCode}
                touched={formik.touched.zipCode}
              />
            </div>
            <div className="grid md:grid-cols-2 gap-3">
              <CustomInput
                placeholder="Email"
                label="Email"
                name="email"
                type="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.errors.email}
                touched={formik.touched.email}
              />
              <CustomInput
                placeholder="Phone Number"
                label="Phone Number"
                name="phone"
                value={formik.values.phone}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.errors.phone}
                touched={formik.touched.phone}
              />
            </div>

            <div>
              <Checkbox
                onChange={(e) => setShowAdditionalInfo(e.target.checked)}
                className="text-deepGray font-normal text-sm py-5"
              >
                Ship to a diffrent Address
              </Checkbox>
            </div>
            <Divider />
            {showAdditionalInfo && (
              <div className="transition-all duration-500 ease-in-out transfor">
                <p className="text-deepGray text-xl font-medium">
                  Additional Info
                </p>

                <CustomInput
                  placeholder="Notes about your order, e.g. special notes for delivery"
                  label="Order Notes (Optional)"
                  name="additionalInfo"
                  value={formik.values.additionalInfo}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.errors.additionalInfo}
                  touched={formik.touched.additionalInfo}
                />
              </div>
            )}
          </div>
          <div className="">
            <div className="border border-gray-200 rounded-lg p-5 min-h-7">
              <p className="text-deepGray text-xl font-medium">Order Summary</p>
              {orderSummaryData.map((item, i: number) => (
                <div className="flex justify-between items-center" key={i}>
                  <div className="flex space-x-2 items-center">
                    <Image src={item.img} alt="" className="w-14" />
                    <p className="text-deepGray text-sm font-medium">
                      Green Capsicum X{item.units}
                    </p>
                  </div>
                  <div className="font-medium">$70</div>
                </div>
              ))}

              <p className="flex items-center justify-between mt-14">
                <span>Subtotal</span>
                <span className="font-medium">$84.00</span>
              </p>
              <Divider />
              <p className="flex items-center justify-between">
                <span>Shipping</span>
                <span className="font-medium">Free</span>
              </p>
              <Divider />
              <p className="flex items-center justify-between">
                <span>Total</span>
                <span className="font-semibold">$84.00</span>
              </p>

              <div className="py-5">
                <CustomBtn type="submit" label="Place Order " />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
