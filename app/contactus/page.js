"use client";

import { Input } from "antd";
const TextArea = Input.TextArea;
import { MdMail } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebook, FaYoutube, FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const ContactUs = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('/contact-banner.jpg')",
        }}
        className="w-full h-[400px] bg-cover bg-[center_top] flex justify-center items-center flex-col text-white"
      >
        <p className="text-4xl font-semibold">Got a question?</p>
        <p className="text-3xl font-semibold">We'd love to hear from you!</p>
      </div>

      <div className="flex justify-center items-center mt-10 flex-wrap px-5">
        <div className="md:w-2/5 w-full">
          <div className="flex justify-between flex-wrap">
            <div className="md:w-[45%] w-full">
              <p className="text-sm font-semibold">First name</p>
              <Input placeholder="Enter Name" className="p-2 mt-1" />
            </div>

            <div className="md:w-[45%] w-full md:mt-0 mt-5">
              <p className="text-sm font-semibold">Last name</p>
              <Input placeholder="Last Name" className="p-2 mt-1" />
            </div>
          </div>

          <div className="w-full mt-5">
            <p className="text-sm font-semibold">Email</p>
            <Input placeholder="Enter your email here" className="p-2 mt-1" />
          </div>

          <div className="w-full mt-5">
            <p className="text-sm font-semibold">Phone number</p>
            <Input placeholder="+91-xxx" className="p-2 mt-1" />
          </div>

          <div className="w-full mt-5">
            <p className="text-sm font-semibold">Subject</p>
            <Input placeholder="Enter your subject" className="p-2 mt-1" />
          </div>

          <div className="w-full mt-5">
            <p className="text-sm font-semibold">Message</p>
            <TextArea
              rows={4}
              className="mt-1 p-2"
              placeholder="Enter you message"
            />
          </div>
        </div>
        <div className="md:w-2/5 w-full flex flex-col justify-start items-start md:pl-20 pl-0">
          <p className="text-xl font-semibold mt-14 md:mt-0">Call / WhatsApp</p>
          <p className="text-sm text-gray-400 font-medium mt-1">
            Call or WhatsApp our team Mon-Fri from 9am to 6pm.
          </p>
          <span className="mt-3 text-base text items-center gap-2 inline-flex cursor-pointer font-semibold">
            <FiPhoneCall />
            <span className="underline">+ 91-8810323907</span>
          </span>

          <div className="mt-14">
            <p className="text-xl font-semibold">Email us</p>
            <span className="text-gray-400 text-base font-medium mt-1 inline-flex items-center gap-2 cursor-pointer">
              <MdMail />
              <span>help@racemateindia.com</span>
            </span>
          </div>

          <div className="mt-14">
            <p className="text-xl font-semibold">Visit us</p>
            <span className="text-gray-400 text-base font-medium mt-1 inline-flex items-center gap-2 cursor-pointer">
              <FaLocationDot />
              <span>RZ-140 Kailash Puri Ext. New Delhi-110045 India</span>
            </span>
          </div>

          <div className="mt-14 flex items-center">
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
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
