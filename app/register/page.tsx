import React from "react";
import CustomInput from "../components/customInputs/CustomInput";
import CustomBtn from "../components/button/CustomBtn";
import { Checkbox } from "antd";
import Link from "next/link";
import CustomTextArea from "../components/customInputs/CustomTextArea";
// import { useSession } from "next-auth/react";

const Register = () => {
  return (
    <div className="flex justify-center items-center min-h-[70vh] py-5 p-5">
      <div className="md:w-[40%] w-full shadow-xl space-y-5 rounded-xl p-5 md:p-10">
        <p className="header">Create Account </p>

        <CustomInput placeholder="Username " />
        <CustomInput placeholder="Fullname" />
        <CustomInput placeholder="phone number" type="number" />
        <CustomInput placeholder="Email " type="password" />
        <CustomTextArea placeholder="Adress" />
        <div className="flex text-sm justify-between text-gray-600 items-center">
          <Checkbox className="text-gray-600">
            Accept Terms and Conditions{" "}
          </Checkbox>
        </div>
        <CustomBtn label="Login" />

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
