"use client";

import Link from "next/link";
import { useState } from "react";
import { AutoComplete } from "antd";
import { IoSearch } from "react-icons/io5";
import { FaArrowLeft } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import { IoInformationCircle } from "react-icons/io5";
import Image from "next/image";

const mockVal = (str, repeat = 1) => ({
  value: str.repeat(repeat),
});

const CheckYourBib = () => {
  const [options, setOptions] = useState([]);
  const onSelect = (data) => {
    console.log("onSelect", data);
  };
  const getPanelValue = (searchText) =>
    !searchText
      ? []
      : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)];
  return (
    <div className="md:p-10 p-5 checkyourbib">
      <div className="flex flex-wrap items-center justify-between text-sm md:text-2xl font-bold">
        <span className="flex items-center md:w-1/2 w-full">
          <Link href="/upcoming-events">
            <FaArrowLeft className="cursor-pointer" />
          </Link>
          <span className="md:ml-10 ml-3">MCD Run for Democracy 2.0</span>
        </span>
        <span className="flex items-center md:mt-0 mt-5">
          <FaCalendarAlt className="mr-3" />
          02 Feb 2025
        </span>
      </div>

      <div className="flex items-center mt-5 text-primary-color text-xs md:text-base">
        <IoInformationCircle className="text-2xl mr-3 md:block hidden" />
        Dear Participants, To verify your information, kindly search using your
        BIB Number, Name, Mobile number, or Registration ID.
      </div>

      <div className="relative mt-5">
        <IoSearch className="absolute top-1/2 -translate-y-1/2 left-3 z-50 text-2xl" />
        <AutoComplete
          style={{
            height: "50px",
          }}
          options={options}
          onSelect={onSelect}
          onSearch={(text) => setOptions(getPanelValue(text))}
          placeholder="Search data by filter"
          className="w-full"
        />
      </div>

      <div className="mt-5 p-5 bg-white rounded">
        <div className="flex flex-wrap justify-around">
          <div className="md:w-2/5 w-full">
            <p className="text-center py-2 md:text-2xl font-medium bg-primary-color text-white rounded">
              Runner's Detail
            </p>
            <div className="mt-5">
              <div className="flex justify-between bg-gray-200 hover:bg-gray-300 px-5 py-3 rounded font-semibold">
                <span>Name</span>
                <span>Sandeep Kumar</span>
              </div>

              <div className="flex justify-between hover:bg-gray-300 px-5 py-3 rounded font-semibold">
                <span>Mobile</span>
                <span>845905****</span>
              </div>

              <div className="flex justify-between bg-gray-200 hover:bg-gray-300 px-5 py-3 rounded font-semibold">
                <span>Gender</span>
                <span>Male</span>
              </div>

              <div className="flex justify-between hover:bg-gray-300 px-5 py-3 rounded font-semibold">
                <span>Race Category</span>
                <span>5.00 KM Run</span>
              </div>

              <div className="flex justify-between bg-gray-200 hover:bg-gray-300 px-5 py-3 rounded font-semibold">
                <span>Age Category</span>
                <span>N/A</span>
              </div>

              <div className="flex justify-between hover:bg-gray-300 px-5 py-3 rounded font-semibold">
                <span>T-Shirt Size</span>
                <span>XL</span>
              </div>
            </div>
          </div>
          <div className="md:w-2/5 w-full mt-5 md:mt-0">
            <p className="text-center py-2 md:text-2xl font-medium bg-primary-color text-white rounded">
              BIB
            </p>
            <div className="flex mt-5 relative justify-center">
              <Image
                src="/bib_template.png"
                width={400}
                height={250}
                alt="bib_template"
              />
              <h2 className="absolute text-6xl font-bold top-2/3 -translate-y-2/3">
                50175
              </h2>
            </div>
          </div>
        </div>
        <div className="font-xl text-primary-color font-semibold mt-5 text-center">
          Note: In case of any changes required please write us on email{" "}
        </div>
      </div>
    </div>
  );
};

export default CheckYourBib;
