import CustomInput from "@/app/components/customInputs/CustomInput";
import React from "react";
import team from "@/app/assets/images/team2.png";
import Image from "next/image";
import CustomBtn from "@/app/components/button/CustomBtn";
import CustomTextArea from "@/app/components/customInputs/CustomTextArea";
import CustomSelects from "@/app/components/customInputs/CustomSelects";

const Setting = () => {
  const verdictOption = [
    { label: "Approved", value: "approved" },
    { label: "Pending", value: "pending" },
  ];

  return (
    <div className="space-y-7">
      <div className="shadow-sm border rounded-lg ">
        <p className="border-b p-5 font-semibold text-deepGray ">
          Account Setting
        </p>

        <div className="p-5 grid md:grid-cols-2 items-center space-x-4 ">
          <div className="space-y-5">
            <CustomInput placeholder="Diane" label="Firstname" />
            <CustomInput placeholder="Diane" label="Lastname" />
            <CustomInput placeholder="Email" label="Email" />
            <CustomInput placeholder="phone" label="Phone number" />
          </div>
          <div className="items-center justify-center flex order-first md:order-none">
            <div>
              <Image
                src={team}
                alt="user"
                className="h-[200px] w-[200px] rounded-full"
              />
              <div className="flex justify-center">
                <CustomBtn
                  label="Choose Image"
                  className="my-4 btn  rounded-full border hover:border-success border-success text-success"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Account Settimgs */}
      <div className="shadow-sm border rounded-lg ">
        <p className="border-b p-5 font-semibold text-deepGray">
          Account Setting
        </p>
        <div className="p-5  items-center  ">
          <div className="md:grid grid-cols-3 gap-4">
            <CustomInput placeholder="Diane" label="Firstname" />
            <CustomInput placeholder="Diane" label="Lastname" />
            <CustomInput
              placeholder="Comaany Name"
              label="Comapany Name(Optional)"
            />
          </div>
          <CustomTextArea label="Street Address " />

          <div className="md:grid grid-cols-3 gap-4 md:mt-4">
            <div className="-mt-5">
              <CustomSelects
                options={verdictOption}
                placholder="Nigeria"
                size="large"
                label="Country"
                className="w-full"
              />
            </div>
            <div className="-mt-5">
              <CustomSelects
                options={verdictOption}
                placholder="CountOyoy"
                size="large"
                label="State"
                className="w-full"
              />
            </div>
            <CustomInput placeholder="212343" label="Zip code" />
          </div>

          <div className="md:grid grid-cols-2 gap-4">
            <CustomInput placeholder="user@gmail.com" label="Email" />
            <CustomInput
              placeholder="09134529229"
              label="Phone number"
              type="number"
            />
          </div>
          <div className="md:w-2/6 w-full">
            <CustomBtn label="Save Changes" />
          </div>
        </div>
      </div>

      {/* Password Change  */}
      <div className="shadow-sm border rounded-lg ">
        <p className="border-b p-5 font-semibold text-deepGray">
          Change Password
        </p>
        <div className="p-5 grid items-center  ">
          <CustomInput
            type="password"
            label="Current Password"
            placeholder=""
          />
          <div className="md:grid grid-cols-2 gap-4">
            <CustomInput type="password" label="New Password" placeholder="" />
            <CustomInput
              type="password"
              label="Comfirm Password"
              placeholder=""
            />
          </div>
          <div className="md:w-2/6 w-full">
            <CustomBtn label="Save Changes"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setting;
