"use client";

import Link from "next/link";
import { useState } from "react";
import { AutoComplete } from "antd";
import { IoSearch } from "react-icons/io5";
import { FaArrowLeft } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import { IoInformationCircle } from "react-icons/io5";

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
      <div className="flex items-center justify-between text-2xl font-bold">
        <span className="flex items-center w-1/2">
          <Link href="/upcoming-events">
            <FaArrowLeft className="cursor-pointer" />
          </Link>
          <span className="ml-10">MCD Run for Democracy 2.0</span>
        </span>
        <span className="flex items-center">
          <FaCalendarAlt className="mr-3" />
          02 Feb 2025
        </span>
      </div>

      <div className="flex items-center mt-5 text-primary-color">
        <IoInformationCircle className="text-2xl mr-3" />
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
    </div>
  );
};

export default CheckYourBib;
