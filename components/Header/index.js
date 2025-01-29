import Link from "next/link";
import Image from "next/image";
import { IoCall } from "react-icons/io5";
import { FaUserAlt, FaQuestion } from "react-icons/fa";
import { MdOutlineMiscellaneousServices } from "react-icons/md";

const Header = () => {
  return (
    <div className="flex sticky top-0 left-0 right-0 bg-[#343a40] p-5 md:px-10 px-5 items-center justify-between z-10">
      <Link href="/">
        <Image
          src="https://s3.ap-south-1.amazonaws.com/racemate.in/assets/Website+Logo+Header-190x40+%E2%80%93+White+Text.svg"
          width={200}
          height={200}
          alt="Racemate India"
        />
      </Link>

      <div className="md:flex gap-5 hidden">
        <span className="flex items-center text-lg text-gray-400 cursor-pointer hover:text-white gap-1">
          <MdOutlineMiscellaneousServices />
          Services
        </span>
        <span className="flex items-center text-lg text-gray-400 cursor-pointer hover:text-white gap-1">
          <FaQuestion />
          FAQ
        </span>
        <span className="flex items-center text-lg text-gray-400 cursor-pointer hover:text-white gap-1">
          <IoCall />
          Contact
        </span>
      </div>

      <Link href="/signin">
        <span className="flex items-center text-lg text-gray-400 hover:text-white gap-2">
          <FaUserAlt />
          Sign in
        </span>
      </Link>
    </div>
  );
};

export default Header;
