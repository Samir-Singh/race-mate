import Image from "next/image";
import { FaLocationDot } from "react-icons/fa6";
import { IoMail, IoCall } from "react-icons/io5";
import {
  FaFacebook,
  FaYoutube,
  FaTwitter,
  FaChevronRight,
} from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  return (
    <div className="bg-[#343a40] text-white md:p-10 mt-10 pb-0 p-5">
      <div className="flex flex-wrap justify-between">
        <div className="md:w-1/2 w-full">
          <Image
            src="https://s3.ap-south-1.amazonaws.com/racemate.in/assets/Website+Logo+Header-190x40+%E2%80%93+White+Text.svg"
            width={200}
            height={200}
            alt="Racemate India"
            className="cursor-pointer"
          />
          <p className="mt-5 text-sm">
            Racemate is a SportsTech startup offering a complete solution for
            Race events in one place to create the best possible experience for
            your athletes from Start to Finish.
          </p>

          <div className="flex items-center mt-5">
            <FaFacebook
              className="mr-5 text-3xl cursor-pointer"
              title="Facebook"
            />
            <RiInstagramFill
              className="mr-5 text-3xl cursor-pointer"
              title="Instagram"
            />
            <FaYoutube
              className="mr-5 text-3xl cursor-pointer"
              title="Youtube"
            />
            <FaTwitter className="text-3xl cursor-pointer" title="Twitter" />
          </div>

          <div className="mt-10">
            <span className="cursor-pointer hover:underline inline-flex items-center">
              <FaChevronRight className="mr-3" />
              Terms & Conditions
            </span>
          </div>
          <div className="mt-2">
            <span className="cursor-pointer hover:underline inline-flex items-center">
              <FaChevronRight className="mr-3" />
              Privacy Policy
            </span>
          </div>
        </div>
        <div className="md:w-[25%] w-full mt-10">
          <p className="text-2xl font-medium">Contact Us</p>
          <div className="flex items-center mt-5 border-b border-dotted border-white pb-5">
            <FaLocationDot className="mr-5" />
            RZ-140 Kailash Puri Ext. New Delhi, ND 110045, India
          </div>

          <div className="flex items-center mt-5 border-b border-dotted border-white pb-5">
            <IoMail className="mr-5" />
            help@racemateindia.com
          </div>

          <div className="flex items-center mt-5 border-b border-dotted border-white pb-5">
            <IoCall className="mr-5" />+ 91-8810323907
          </div>
        </div>
      </div>

      <div className="mt-10 text-center pb-3">
        Copyright © {new Date()?.getFullYear()} Racemate India Pvt. Ltd.
      </div>
    </div>
  );
};

export default Footer;
