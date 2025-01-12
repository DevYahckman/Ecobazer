"use client";
import React from "react";
import CustomInput from "../components/customInputs/CustomInput";
import CustomBtn from "../components/button/CustomBtn";
import { Checkbox, Divider } from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaSquareInstagram } from "react-icons/fa6";

const Login = () => {
  const router = useRouter();

  return (
    <div className="flex justify-center items-center min-h-[70vh] py-5 p-5">
      <div className="md:w-[40%] w-full shadow-xl space-y-5 rounded-xl p-5 md:p-10">
        <p className="header"> Sign In </p>

        <CustomInput placeholder="Email " type="email" />
        <CustomInput placeholder="Email " type="password" />
        <div className="flex text-sm justify-between text-gray-600 items-center">
          <Checkbox className="text-gray-600">Remember Me </Checkbox>
          <Link href={"#"}>Forget password</Link>
        </div>
        <CustomBtn label="Login" />
        <Divider>Or </Divider>
        <div className="flex justify-center items-center space-x-5">
          <FcGoogle
            size={30}
            onClick={() => router.push("/api/auth/signin")}
            className=" cursor-pointer"
          />
          <FaFacebook size={30} color={'blue'} className=" cursor-pointer" />
          <FaSquareInstagram size={30} className=" cursor-pointer" />
        </div>

        <p className="text-center text-gray-600 text-sm">
          Don &apos;t have an account?{" "}
          <Link className="text-deepGray font-semibold" href={"/register"}>
            Register
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default Login;
