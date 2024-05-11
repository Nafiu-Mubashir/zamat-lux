import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import AuthLayout from "~/layout/authLayout";

import { Button, Checkbox, PasswordInput, TextInput } from "@mantine/core";

const SignUp = () => {
  return (
    <div className="w-[90%] md:w-[43.75rem] mx-auto text-black space-y-5 mt-6">
      <h1 className="text-center font-[600] md:text-[1.708rem]">
        Welcome Back
      </h1>
      <div className="grid grid-cols-2 gap-3">
        <TextInput
          label="Last Name"
          type="text"
          size="md"
          classNames={{
            input:
              "focus:!ring-zamat-main focus:!border-zamat-main !bg-zamat-background-light !h-[2.775rem] !border-[#FB5B3959]",
          }}
          // value={value}
          // onChange={(event) => setValue(event.currentTarget.value)}
        />
        <TextInput
          label="First Name"
          type="text"
          size="md"
          classNames={{
            input:
              "focus:!ring-zamat-main focus:!border-zamat-main !bg-zamat-background-light !h-[2.775rem] !border-[#FB5B3959]",
          }}
          // value={value}
          // onChange={(event) => setValue(event.currentTarget.value)}
        />
      </div>

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

      <PasswordInput
        label="Confirm Password"
        size="md"
        classNames={{
          input:
            "focus:!ring-zamat-main focus:!border-zamat-main !bg-zamat-background-light !h-[2.775rem] !border-[#FB5B3959]",
        }}
        // value={value}
        // onChange={(event) => setValue(event.currentTarget.value)}
      />

      <div>
        <Checkbox
          label={
            <p>
              Yes, I understand and I agree to Zamat’s Lux
              <Link
                href={"/login"}
                className="text-zamat-main  mx-1">
                Terms of Service
              </Link>
            </p>
          }
        />
      </div>

      <Button
        size="md"
        className="!w-full !bg-zamat-main !h-[2.775rem]">
        Create Account
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
        Already have an account?
        <Link
          href={"/login"}
          className="text-zamat-main  mx-1">
          Log In
        </Link>
      </p>
    </div>
  );
};

export default SignUp;

SignUp.getLayout = function (page: React.ReactElement) {
  // const event = '/courses/courses-banner.webp';
  return <AuthLayout>{page}</AuthLayout>;
};
