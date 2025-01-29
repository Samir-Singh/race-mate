"use client";

import Link from "next/link";
import { useState } from "react";
import InputBox from "@/components/InputBox";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex justify-center items-center md:p-10 p-5">
      <div
        style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}
        className="bg-white rounded p-8 md:w-96 w-full"
      >
        <p className="text-2xl text-center font-semibold">Log in to Racemate</p>
        <div className="w-full">
          <InputBox
            type="email"
            placeholder="Email"
            className="mt-5 border-slate-500 w-full"
            width="w-full"
          />
        </div>

        <div className="w-full relative">
          <InputBox
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="mt-5 border-slate-500 w-full"
            width="w-full"
          />
          <div
            onClick={() => setShowPassword((prev) => !prev)}
            className={`text-2xl cursor-pointer text-primary-color absolute right-3 bottom-[40%]`}
          >
            {showPassword ? <IoMdEye /> : <IoMdEyeOff />}
          </div>
          <p className="flex justify-end mt-2">
            <span className="text-sm text-primary-color cursor-pointer font-medium hover:underline">
              Forget Password
            </span>
          </p>
        </div>

        <button className="w-full bg-primary-color text-white rounded p-2 text-xl mt-5">
          Login
        </button>

        <div className="w-full text-center border-gray-500 border-b leading-[0.1em] mt-5">
          <span className="bg-white py-0 px-2">Or</span>
        </div>

        <p className="mt-5 text-center text-sm flex items-center justify-center gap-3 font-medium">
          <span>New to Racemate?</span>
          <Link href="/signup">
            <span className="text-primary-color hover:underline">
              Create Account
            </span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
