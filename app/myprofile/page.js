"use client";

import { Tabs } from "antd";
import Image from "next/image";
import { MdVerified, MdEventAvailable, MdHistory } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import Profile from "@/components/Profile";

const MyProfile = () => {
  return (
    <div className="flex flex-wrap justify-center md:p-10 md:px-20 p-5 gap-10 items-start">
      <div className="md:w-1/4 w-full border-slate-400 border p-5 flex flex-col items-center">
        <div className="w-[150px] h-[150px] border border-primary-color rounded-full relative cursor-pointer overflow-hidden">
          <Image
            src="/favicon.svg"
            width={150}
            height={150}
            alt="profile-image"
          />
        </div>

        <p className="mt-5 text-3xl font-semibold">Samir Singh</p>
        <p className="mt-2 flex items-center">
          samirsingh2000.ss@gmail.com{" "}
          <MdVerified className="ml-2 text-green-700" />
        </p>
      </div>

      <div className="md:w-3/5 w-full">
        <Tabs
          defaultActiveKey="1"
          tabBarStyle={{
            margin: "0",
          }}
          items={[
            {
              key: 1,
              label: "My Events",
              children: "My Events",
              icon: <MdEventAvailable className="text-xl" />,
            },

            {
              key: 2,
              label: "My Transactions",
              children: "My Transactions",
              icon: <MdHistory className="text-xl" />,
            },

            {
              key: 3,
              label: "My Profile",
              children: <Profile />,
              icon: <FaRegUser className="text-xl" />,
            },
          ]}
        />
      </div>
    </div>
  );
};

export default MyProfile;
