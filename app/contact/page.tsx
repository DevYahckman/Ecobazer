import React from "react";
import BreadCrumb from "../components/breadCrumbs/BreadCrumb";
import { CiLocationOn } from "react-icons/ci";
import { AiOutlineMail } from "react-icons/ai";
import { PiPhoneCallLight } from "react-icons/pi";
import { Divider } from "antd";
import CustomInput from "../components/customInputs/CustomInput";
import CustomTextArea from "../components/customInputs/CustomTextArea";
import CustomBtn from "../components/button/CustomBtn";

const ContactUs = () => {
  return (
    <div>
      <BreadCrumb />
      <div className="grid grid-cols-4 gap-4 px-10 py-10">
        <div className="shadow-xl p-10 rounded-md">
          <div className="flex justify-center items-center flex-col">
            <CiLocationOn className="text-success" size={50} />
            <p className="text-center text-base text-gray-800">
              2715 Ash Dr. San Jose, South Dakota 83475
            </p>
          </div>
          <Divider />
          <div className="flex justify-center items-center flex-col">
            <AiOutlineMail className="text-success" size={50} />
            <p className="text-center text-base text-gray-800">
              ecobazer@gmail.com
            </p>
            <p className="text-center text-base text-gray-800">
              yourdrinksvendor@gmail.com
            </p>
          </div>
          <Divider />
          <div className="flex justify-center items-center flex-col">
            <PiPhoneCallLight className="text-success" size={50} />
            <p className="text-center text-base text-gray-800">09126457835</p>
            <p className="text-center text-base text-gray-800">09126457835</p>
          </div>
        </div>

        <div className="col-span-3 shadow-xl p-10 rounded-md">
          <p className="text-deepGray font-semibold text-2xl">Just Say Hello</p>
          <p className="w-[50%] leading-8 py-2 pb-5">
            Do you fancy saying hi to me or you want to get started with your
            project and you need my help? Feel free to contact me.
          </p>

          <section className="space-y-6">
            <div className="grid gap-5 grid-cols-2">
              <CustomInput placeholder="Template Cookies" />
              <CustomInput placeholder="jones@gmail.com" type="email" />
            </div>
            <CustomInput placeholder=" " value="Hello" />
            <CustomTextArea label=" " placeholder="Write your comment here " />

            <div className="w-56 my-5">
              <CustomBtn label="Send Message" />
            </div>
          </section>
        </div>
      </div>
      <div className="my-10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.2508744244287!2d3.8917257142699344!3d7.547598212505562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1039f1cdb2ed5e7b%3A0x133fbb82df2b6282!2sOdo%20Oba%20Rd%2C%20200136%2C%20Mawniya%2C%20Oyo!5e0!3m2!1sen!2sng!4v1680284579983!5m2!1sen!2sng"
          width="100%"
          height="420"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUs;
