import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import AuthLayout from "~/layout/authLayout";

import { Button, PasswordInput, TextInput } from "@mantine/core";

const Login = () => {
  // const [value, setValue] = useState("");
  // console.log(value);
  
  return (
    <div className="w-[90%] md:w-[43.75rem] mx-auto text-black space-y-5 mt-6">
      <h1 className="text-center font-[600] md:text-[1.708rem]">
        Welcome Back
      </h1>
      <TextInput
        label="Email"
        type="email"
        size="md"
        classNames={{
          input:
            "focus:!ring-zamat-main focus:!border-zamat-main !bg-zamat-background-light !h-[2.775rem] !border-[#FB5B3959]",
        }}
        // value={value}
        // onChange={(event) => setValue(event.currentTarget.value)}
      />
      <PasswordInput
        label="Password"
        size="md"
        classNames={{
          input:
            "focus:!ring-zamat-main focus:!border-zamat-main !bg-zamat-background-light !h-[2.775rem] !border-[#FB5B3959]",
        }}
        // value={value}
        // onChange={(event) => setValue(event.currentTarget.value)}
      />

      <div>
        <p>
          Forgot Password?
          <Link
            href={"/"}
            className="text-zamat-main mx-1 !h-[2.775rem]">
            Reset
          </Link>
        </p>
      </div>

      <Button
        size="md"
        className="!w-full !bg-zamat-main">
        Sign In
      </Button>

      <div className="flex justify-between items-center">
        <div className="w-[7.747rem] md:w-[16.285rem] h-0 border-2 border-gray-300 rounded-full"></div>
        <p>Or</p>
        <div className="w-[7.747rem] md:w-[16.285rem] h-0 border-2 border-gray-300 rounded-full"></div>
      </div>

      <Button
        className="!bg-white !w-full !flex justify-center text-[0.996rem] items-center !text-black"
        size="md">
        <Image
          src="/google.png"
          width={29}
          height={30}
          alt="goodle login"
          className="w-[1.779rem] h-[1.779rem]"
        />
        <p className="mx-5"> Continue with Google</p>
      </Button>
      <Button
        className="!bg-white !w-full !flex justify-center text-[0.996rem] items-center !text-black"
        size="md">
        <Image
          src="/facebook.png"
          width={29}
          height={29}
          alt="goodle login"
          className="w-[1.779rem] h-[1.779rem]"
        />
        <p className="mx-5">Continue with Facebook</p>
      </Button>

      <p>
        Don’t have an Account?{" "}
        <Link
          href={"/sign-up"}
          className="text-zamat-main  mx-1">
          Sign Up
        </Link>
      </p>
    </div>
  );
};

export default Login;

Login.getLayout = function (page: React.ReactElement) {
  // const event = '/courses/courses-banner.webp';
  return <AuthLayout>{page}</AuthLayout>;
};
