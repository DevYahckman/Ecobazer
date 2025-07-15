"use client";
import React from "react";
import CustomInput from "../components/customInputs/CustomInput";
import CustomBtn from "../components/button/CustomBtn";
import { Checkbox, Divider } from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaSquareInstagram } from "react-icons/fa6";
import { useFormik } from "formik";
import { validateUserLogin } from "../validation/user";
import http from "../services/httpSetvice";
import config from "../../config.json";
import Swal from "sweetalert2";
import { useUserStore } from "../store/userStore";

const Login = () => {
  const router = useRouter();
  const setUser = useUserStore((state: any) => state.setUser);
  const isLoggedIn = useUserStore((state: any) => state.isLoggedIn);

  console.log(isLoggedIn, 'logged in');

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validateUserLogin(),
    onSubmit: async (values) => {
      try {
        const { data: jwt } = await http.post(`${config.apiUrl}/auth`, values);
        setUser(jwt);
        console.log(jwt);
        localStorage.setItem("token", jwt);

        window.location.href = "/";
      } catch (error: any) {
        console.log(error, "error");
        const errorMessage =
          error?.response?.data?.message || "An unexpected error occurred.";

        formik.errors.email = errorMessage;
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: errorMessage,
        });
      }
    },
  });

  return (
    <div className="flex justify-center items-center min-h-[70vh] py-5 p-5">
      <div className="md:w-[40%] w-full shadow-xl space-y-5 rounded-xl p-5 md:p-10">
        <p className="header"> Sign In </p>
        <form action="" onSubmit={formik.handleSubmit}>
          <CustomInput
            placeholder="Email "
            type="email"
            name="email"
            value={formik.values.email}
            error={formik.errors.email}
            touched={formik.touched.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />

          <CustomInput
            placeholder="Email "
            type="password"
            name="password"
            value={formik.values.password}
            error={formik.errors.password}
            touched={formik.touched.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <div className="flex text-sm justify-between text-gray-600 items-center">
            <Checkbox className="text-gray-600">Remember Me </Checkbox>
            <Link href={"#"}>Forget password</Link>
          </div>
          <CustomBtn label="Login" type="submit" />

          <Divider>Or </Divider>
          <div className="flex justify-center items-center space-x-5">
            <FcGoogle
              size={30}
              onClick={() => router.push("/api/auth/signin")}
              className=" cursor-pointer"
            />
            <FaFacebook size={30} color={"blue"} className=" cursor-pointer" />
            <FaSquareInstagram size={30} className=" cursor-pointer" />
          </div>

          <p className="text-center text-gray-600 text-sm">
            Don &apos;t have an account?{" "}
            <Link className="text-deepGray font-semibold" href={"/register"}>
              Register
            </Link>{" "}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
