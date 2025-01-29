"use client";

import Link from "next/link";
import Image from "next/image";
import { FaHome } from "react-icons/fa";
import InputBox from "@/components/InputBox";
import SelectInput from "@/components/Select";
import { FaCalendarAlt } from "react-icons/fa";
import { GoChevronRight } from "react-icons/go";
import { FaLocationDot } from "react-icons/fa6";

const EventResults = () => {
  return (
    <div className="md:p-10 p-5">
      <div className="flex items-center">
        <Link href="/">
          <FaHome className="text-xl text-primary-color" />
        </Link>
        <GoChevronRight className="mx-3 text-xl" />
        <span>Event Results</span>
      </div>

      <div className="flex items-center justify-end gap-5">
        <SelectInput options={[]} placeholder="Select Event Year" />
        <SelectInput options={[]} placeholder="Select Event Cities" />
        <InputBox placeholder="Enter Event Name" className="p-[6px]" />
      </div>

      <div className="flex flex-wrap justify-between gap-y-[3rem]">
        <div
          style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}
          className="w-[20%] rounded-xl overflow-hidden relative"
        >
          <Image
            src="/faq2.jpg"
            width={1000}
            height={1000}
            alt="event_img"
            className="w-full"
          />
          <div className="w-full bg-[#343a40] p-5 text-white">
            <p className="text-lg">Spectrum Dehradun 10K Run 2025</p>
            <p className="flex mt-3 items-center">
              <FaCalendarAlt className="mr-3" />
              <span>Friday, 24 Jan 2025</span>
            </p>

            <p className="flex mt-3 items-center">
              <FaLocationDot className="mr-3" />
              <span>Dehradun</span>
            </p>

            <p className="flex items-center justify-end mt-5">
              <button className="bg-white text-[#343a40] py-2 px-5 rounded font-medium">
                Result
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventResults;
