"use client";

import Link from "next/link";
import { useState } from "react";
import InputBox from "@/components/InputBox";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex justify-center items-center md:p-10 p-5">
      <div
        style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}
        className="bg-white rounded p-8 md:w-96 w-full"
      >
        <p className="text-2xl text-center font-semibold">Join Racemate</p>
        <hr className="mt-5" />

        <div className="w-full">
          <InputBox
            type="text"
            placeholder="Name"
            className="mt-5 border-slate-500 w-full"
          />
        </div>

        <div className="w-full">
          <InputBox
            type="email"
            placeholder="Email"
            className="mt-5 border-slate-500 w-full"
          />
        </div>

        <div className="w-full">
          <InputBox
            type="number"
            placeholder="Mobile Number"
            className="mt-5 border-slate-500 w-full"
          />
        </div>

        <div className="w-full relative">
          <InputBox
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="mt-5 border-slate-500 w-full"
          />
          <div
            onClick={() => setShowPassword((prev) => !prev)}
            className={`text-2xl cursor-pointer text-primary-color absolute right-3 bottom-[20%]`}
          >
            {showPassword ? <IoMdEye /> : <IoMdEyeOff />}
          </div>
        </div>

        <p className="text-xs mt-5 flex items-center font-medium">
          <input type="checkbox" className="mr-3 accent-primary-color" />I agree
          to the{" "}
          <span className="ml-1 text-primary-color cursor-pointer hover:underline">
            Terms of Service & Privacy Policy.
          </span>
        </p>

        <button className="w-full bg-primary-color text-white rounded p-2 text-xl mt-5">
          SignUp
        </button>

        <p className="text-center mt-5 text-sm font-medium">
          Already have an account?{" "}
          <Link href="/signin">
            <span className="text-primary-color hover:underline">Login!</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
