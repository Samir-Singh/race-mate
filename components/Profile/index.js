"use client";

import { Input, DatePicker, Select } from "antd";
const { TextArea } = Input;

const Profile = () => {
  return (
    <div className="bg-white p-5 rounded shadow-md profile">
      <div className="flex justify-between flex-wrap items-center">
        <div className="md:w-[31%] w-[100%]">
          <p className="font-semibold">
            Name<span className="text-red-500">*</span>
          </p>
          <Input placeholder="Enter Name" className="p-2" />
        </div>
        <div className="md:w-[31%] w-[100%] mt-5 md:mt-0">
          <p className="font-semibold">
            Email<span className="text-red-500">*</span>
          </p>
          <Input placeholder="Enter Email" className="p-2" />
        </div>
        <div className="md:w-[31%] w-[100%] mt-5 md:mt-0">
          <p className="font-semibold">
            Mobile<span className="text-red-500">*</span>
          </p>
          <Input placeholder="Enter Mobile" className="p-2" />
        </div>
      </div>

      <div className="flex justify-between flex-wrap md:mt-5 mt-0">
        <div className="md:w-[31%] w-1/2 mt-5 md:mt-0">
          <p className="font-semibold">
            Gender<span className="text-red-500">*</span>
          </p>
          <div className="flex gap-5">
            <label className="flex items-center gap-1 cursor-pointer">
              <input
                type="radio"
                value="Male"
                className="accent-primary-color"
                name="gender"
              />
              Male
            </label>

            <label className="flex items-center gap-1 cursor-pointer">
              <input
                type="radio"
                value="Female"
                className="accent-primary-color"
                name="gender"
              />
              Female
            </label>
          </div>
        </div>

        <div className="md:w-[31%] w-full mt-5 md:mt-0">
          <p className="font-semibold">
            Date of birth<span className="text-red-500">*</span>
          </p>
          <DatePicker className="w-full p-2" />
        </div>

        <div className="md:w-[31%] w-full mt-5 md:mt-0">
          <p className="font-semibold">
            T-shirt Size<span className="text-red-500">*</span>
          </p>
          <Select placeholder="Select Size" className="w-full" />
        </div>
      </div>

      <div className="flex justify-between flex-wrap items-center md:mt-5 mt-0">
        <div className="w-full mt-5 md:mt-0">
          <p className="font-semibold">
            Address<span className="text-red-500">*</span>
            <TextArea rows={4} />
          </p>
        </div>
      </div>

      <div className="flex justify-between flex-wrap items-center md:mt-5 mt-0">
        <div className="md:w-[31%] w-full mt-5 md:mt-0">
          <p className="font-semibold">
            City<span className="text-red-500">*</span>
          </p>
          <Input placeholder="Enter City" className="p-2" />
        </div>
        <div className="md:w-[31%] w-full mt-5 md:mt-0">
          <p className="font-semibold">
            Pin<span className="text-red-500">*</span>
          </p>
          <Input placeholder="Enter Pin-Code" className="p-2" />
        </div>
        <div className="md:w-[31%] w-full mt-5 md:mt-0">
          <p className="font-semibold">
            State<span className="text-red-500">*</span> (India)
          </p>
          <Select placeholder="Select State" className="w-full" />
        </div>
      </div>

      <div className="flex justify-end items-center mt-5">
        <button className="bg-primary-color text-white py-2 px-6 rounded font-medium">
          Save
        </button>
      </div>
    </div>
  );
};

export default Profile;
