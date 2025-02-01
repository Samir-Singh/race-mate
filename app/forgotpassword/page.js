import InputBox from "@/components/InputBox";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";

const ForgotPassword = () => {
  return (
    <div className="flex justify-center items-center md:p-10 p-5">
      <div
        style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}
        className="bg-white rounded p-8 md:w-96 w-full"
      >
        <p className="text-2xl text-start font-semibold">Forget Password?</p>
        <p className="text-sm font-medium text-gray-400 text-start">
          No worries, we'll send you reset instructions
        </p>

        <InputBox className="!w-full mt-5" placeholder="Enter your email" />
        <button className="w-full bg-primary-color text-white rounded p-2 text-xl mt-5">
          Reset Password
        </button>

        <p className="text-center mt-5 text-primary-color">
          <Link href="signin">
            <span className="cursor-pointer hover:underline inline-flex items-center">
              <FaArrowLeft className="mr-3" />
              Back to log in
            </span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
