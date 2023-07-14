"use client";

import * as React from "react";
import CustomTextField from "@components/TextFeilds/CustomTextField";
import CustomButton from "@components/Buttons/NormalBtn";
import CustomIconButton from "@components/Buttons/IconBtn";
import DeleteIcon from "@mui/icons-material/Google";
import { Google, FacebookOutlined, Twitter } from "@mui/icons-material";

export default function SignUp() {
  const handleFirstNameChange = (event: string) => {};
  const handleLastNameChange = (event: string) => {};
  const handleButtonClick = (event: void) => {};
  const handleGoogleLogin = (event: void) => {};

  return (
    <div>
      <header className=" mx-16 my-10 flex flex-col gap-4 items-center">
        <h1 className=" text-4xl font-bold">Sales Agent Sign Up</h1>
        <p className="text-center">
          Dorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
          turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
          fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus
          elit sed risus. Maecenas eget condimentum velit, sit amet feugiat
          lectus. Class aptent taciti sociosqu ad litora torquent perlvinar.
          Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna.
          Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet
          lacinia. Aliquam in elementum tellus.
        </p>
      </header>

      <form className=" flex flex-col gap-5 p-10 rounded-lg sm:w-3/5 md:w-1/2 lg:w-1/2  m-auto mt-5 min-w-sm bg-gray-100 ">
        <div className=" flex gap-5 ">
          <CustomTextField
            id="FirstName"
            label="First Name"
            type="text"
            name="FirstName"
            onChange={(e) => handleFirstNameChange(e.target.value)}
            width="50%"
          />

          <CustomTextField
            id="LastName"
            label="Last Name"
            type="text"
            name="LastName"
            onChange={(e) => handleLastNameChange(e.target.value)}
            width="50%"
          />
        </div>
        <div className=" flex flex-col gap-5 ">
          <CustomTextField
            id="LastName"
            label="Last Name"
            type="text"
            name="LastName"
            onChange={(e) => handleLastNameChange(e.target.value)}
            width="100%"
          />
          <CustomTextField
            id="LastName"
            label="Last Name"
            type="password"
            name="LastName"
            onChange={(e) => handleLastNameChange(e.target.value)}
            width="100%"
          />
          <CustomTextField
            id="LastName"
            label="Last Name"
            type="password"
            name="LastName"
            onChange={(e) => handleLastNameChange(e.target.value)}
            width="100%"
          />
        </div>
        <CustomButton
          onClick={handleButtonClick}
          fullWidth
          variant="contained"
          color="primary"
          backgroundColor="#48D89B"
          textColor="#000"
        >
          Sign Up
        </CustomButton>

        {/* social media section */}
        <hr className="border-b-2 " />

        <div className=" flex flex-col gap-4  justify-between items-center">
          <h2>Or sign up with</h2>

          <div className=" flex justify-between w-full">
            <CustomIconButton
              onClick={handleGoogleLogin}
              size="large"
              startIcon={<Google />}
              backgroundColor="#fff"
              iconColor="#0F62FE"
              textColor="#0F62FE"
            >
              Google
            </CustomIconButton>
            <CustomIconButton
              onClick={handleGoogleLogin}
              size="large"
              startIcon={<FacebookOutlined />}
              backgroundColor="#fff"
              iconColor="#0F62FE"
              textColor="#0F62FE"
            >
              FaceBook
            </CustomIconButton>
            <CustomIconButton
              onClick={handleGoogleLogin}
              size="large"
              startIcon={<Twitter />}
              backgroundColor="#fff"
              iconColor="#0F62FE"
              textColor="#0F62FE"
            >
              Twitter
            </CustomIconButton>
          </div>
        </div>
      </form>
    </div>
  );
}
