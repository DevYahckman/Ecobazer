"use client";
import React, { useEffect } from "react";
import CustomInput from "../components/customInputs/CustomInput";
import CustomBtn from "../components/button/CustomBtn";
import { Checkbox } from "antd";
import Link from "next/link";
import CustomTextArea from "../components/customInputs/CustomTextArea";
import * as Yup from "yup";
import { useFormik } from "formik";
import { supabase } from "@/supabase-client";
// import { useSession } from "next-auth/react";

const Register = () => {
  const validateUser = () => {
    return Yup.object({
      username: Yup.string().required("Name is Required"),
      fullname: Yup.string().required("Lastname is required"),
      phone: Yup.string().required("Phone Number is required"),
      email: Yup.string()
        .email("enter valid email")
        .required("Email is required"),
      address: Yup.string().required("Address is required"),
      password: Yup.string().required("Password is required"),
      user_image: Yup.mixed()
        .required()
        .test("fileType", "Unsupported File Format", (value) => {
          return value && value instanceof File;
        }),
    });
  };

  const formik = useFormik({
    initialValues: {
      username: "",
      fullname: "",
      phone: "",
      email: "",
      address: "",
      password: "",
      user_image: "",
    },

    validationSchema: validateUser(),
    onSubmit: async (values) => {
      console.log(values);

      const { email, password, user_image, ...rest } = values;

      let imageUrl: string | null = null;

      // create a new user
      const { data, error: signupErr } = await supabase.auth.signUp({
        email,
        password,
      });

      console.log("Auth Data:", data);

      if (signupErr) {
        console.error("Signup error:", signupErr);
        return;
      }

      if (user_image && data?.user) {
        // @ts-ignore
        const file: File = user_image as File;
        console.log(file, "file object");

        const fileExt = file.name.split(".").pop();
        const fileName = `${Date.now()}.${fileExt}`;
        const filePath = `user_image/${fileName}`;

        // Getting public URL
        const { data: publicUrlData } = supabase.storage
          .from("userimage")
          .getPublicUrl(filePath);
        const publicImageUrl = publicUrlData.publicUrl;

        console.log(publicImageUrl, "public url" );
        

        // Saving file
        const { data: uploadData, error: uploadError } = await supabase.storage
          .from("userimage")
          .upload(filePath, file);

        if (uploadError) {
          console.error("Image upload error:", uploadError);
          return;
        }



        imageUrl = publicImageUrl; // Store the file path in the database
    
      }

      
   
      

      if (data?.user) {
        const { error: insertError } = await supabase
          .from("userProfiles")
          .insert({ userId: data.user.id, ...rest, user_image: imageUrl });

        if (insertError) {
          console.error("Insert error:", insertError);
          return;
        } else {
          console.log("Registration successful");
        }
      }
    },
  });

  return (
    <div className="flex justify-center items-center min-h-[70vh] py-5 p-5">
      <div className="md:w-[40%] w-full shadow-xl space-y-5 rounded-xl p-5 md:p-10">
        <p className="header">Create Account </p>
        <form action="" onSubmit={formik.handleSubmit} className="space-y-6">
          <CustomInput
            label="username"
            name="username"
            value={formik.values.username}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.errors.username}
            touched={formik.touched.username}
            placeholder="Username "
          />
          <CustomInput
            label="fullname"
            name="fullname"
            value={formik.values.fullname}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.errors.fullname}
            touched={formik.touched.fullname}
            placeholder="Fullname"
          />
          <CustomInput
            label="phone"
            name="phone"
            value={formik.values.phone}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.errors.phone}
            touched={formik.touched.phone}
            placeholder="phone number"
            type="number"
          />
          <CustomInput
            label="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.errors.email}
            touched={formik.touched.email}
            placeholder="Email "
            type="email"
          />
          <CustomInput
            label="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.errors.password}
            touched={formik.touched.password}
            placeholder="Email "
            type="password"
          />
          <CustomTextArea
            label="address"
            name="address"
            value={formik.values.address}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.errors.address}
            touched={formik.touched.address}
            placeholder="Adress"
          />

          <input
            type="file"
            name="user_image"
            // onChange={handlefileChange}
            // onChange={(e) => {
            //   formik.setFieldValue("user_image", e.currentTarget.files?.[0]);
            // }}

            onChange={(e) => {
              const file = e.currentTarget.files?.[0];
              if (file) {
                formik.setFieldValue("user_image", file); // must be a File object, not string
              }
            }}
            onBlur={formik.handleBlur}
            className="border border-gray-300 rounded-md p-2 w-full"
            accept="image/*"
            placeholder="Upload Profile Image (optional)"
          />

          <div className="flex text-sm justify-between text-gray-600 items-center">
            {/* <Checkbox className="text-gray-600">
              Accept Terms and Conditions{" "}
            </Checkbox> */}
          </div>
          <CustomBtn label="Register" />
        </form>

        <p className="text-center text-gray-600 text-sm">
          Already Have an Account?{" "}
          <Link className="text-deepGray font-semibold" href={"/login"}>
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
