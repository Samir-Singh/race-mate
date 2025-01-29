"use client";

import Link from "next/link";
import Image from "next/image";
import { Pagination } from "antd";
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

      <div className="flex items-center justify-end gap-5 flex-wrap">
        <SelectInput
          options={[]}
          placeholder="Select Event Year"
          className="w-full"
        />
        <SelectInput
          options={[]}
          placeholder="Select Event Cities"
          className="w-full"
        />
        <InputBox placeholder="Enter Event Name" className="p-[6px] w-full" />
      </div>

      <div className="flex flex-wrap justify-center items-center gap-10 gap-y-[3rem] mt-5">
        {[
          {
            id: 1,
            name: "Spectrum Dehradun 10K Run 2025",
            date: "Friday, 24 Jan 2025",
            location: "Dehradun",
          },
          {
            id: 2,
            name: "Dainik Jagran - inext Healthon Patna 2025",
            date: "Sunday, 19 Jan 2025s",
            location: "Patna",
          },
          {
            id: 3,
            name: "Dainik Jagran - inext Healthon Gorakhpur 2025",
            date: "Sunday 05 Jan 2025",
            location: "Gorakhpur",
          },
          {
            id: 4,
            name: "Karma Lakelands Half Marathon",
            date: "Sunday 29 Dec 2024",
            location: "Gurgaon",
          },
        ]?.map((item) => (
          <div
            style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}
            className="rounded-xl overflow-hidden relative sm:w-80 w-full"
          >
            <Image
              src="/faq2.jpg"
              width={1000}
              height={1000}
              alt="event_img"
              className="w-full"
            />
            <div className="w-full bg-[#343a40] p-5 text-white">
              <p className="text-lg min-h-16">{item?.name}</p>
              <p className="flex mt-3 items-center">
                <FaCalendarAlt className="mr-3" />
                <span>{item?.date}</span>
              </p>

              <p className="flex mt-3 items-center">
                <FaLocationDot className="mr-3" />
                <span>{item?.location}</span>
              </p>

              <p className="flex items-center justify-end mt-5">
                <button className="bg-white text-[#343a40] py-2 px-5 rounded font-medium">
                  Race Result
                </button>
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <Pagination defaultCurrent={1} total={50} />
      </div>
    </div>
  );
};

export default EventResults;
