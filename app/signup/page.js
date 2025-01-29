"use client";

import { Modal } from "antd";
import Link from "next/link";
import { useState } from "react";
import InputBox from "@/components/InputBox";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";

const SignUp = () => {
  const [open, setOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const modalStyles = {
    content: {
      boxShadow: "0 0 30px #999",
      padding: 0,
    },
  };

  return (
    <div className="flex justify-center items-center md:p-10 p-5">
      <div
        style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}
        className="bg-white rounded p-8 md:w-96 w-full"
      >
        <p className="text-2xl text-center font-semibold">Join Racemate</p>
        <hr className="mt-5" />

        <div className="w-full">
          <InputBox
            type="text"
            placeholder="Name"
            className="mt-5 border-slate-500 w-full"
          />
        </div>

        <div className="w-full">
          <InputBox
            type="email"
            placeholder="Email"
            className="mt-5 border-slate-500 w-full"
          />
        </div>

        <div className="w-full">
          <InputBox
            type="number"
            placeholder="Mobile Number"
            className="mt-5 border-slate-500 w-full"
          />
        </div>

        <div className="w-full relative">
          <InputBox
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="mt-5 border-slate-500 w-full"
          />
          <div
            onClick={() => setShowPassword((prev) => !prev)}
            className={`text-2xl cursor-pointer text-primary-color absolute right-3 bottom-[20%]`}
          >
            {showPassword ? <IoMdEye /> : <IoMdEyeOff />}
          </div>
        </div>

        <p className="text-xs mt-5 flex items-center font-medium">
          <input type="checkbox" className="mr-3 accent-primary-color" />I agree
          to the{" "}
          <span
            onClick={() => setOpen(true)}
            className="ml-1 text-primary-color cursor-pointer hover:underline"
          >
            Terms of Service & Privacy Policy.
          </span>
        </p>

        <button className="w-full bg-primary-color text-white rounded p-2 text-xl mt-5">
          SignUp
        </button>

        <p className="text-center mt-5 text-sm font-medium">
          Already have an account?{" "}
          <Link href="/signin">
            <span className="text-primary-color hover:underline">Login!</span>
          </Link>
        </p>
      </div>

      <Modal
        open={open}
        styles={modalStyles}
        footer={null}
        width={800}
        closable={true}
        onCancel={() => setOpen(false)}
      >
        <div className="bg-white outline-none rounded p-8">
          <h1 className="text-xl font-medium">
            Racemate Terms & Privacy Policy
          </h1>

          <hr className="mt-5" />

          <div className="mt-5 text-gray-500">
            Racemate India Pvt. Ltd., doing business as Racemate, Racemate India
            (collectively, “Racemate”, “us”, “we”, or “our”) operates
            racemateindia.com or through a mobile application or other
            cloud-based platform which we may make available for your use
            (collectively, the “Site”). This Privacy Policy informs you of our
            policies regarding the collection, use and disclosure of information
            we receive from users of the Site. Your use of the Site will
            constitute your acknowledgement of your consent to abide and be
            bound by the Privacy Policy.
          </div>

          <h1 className="text-xl font-medium mt-5">Commitment to Privacy</h1>
          <div className="mt-2 text-gray-500">
            Thank you for using Racemate. Racemate is pleased to provide
            registration and related services for your endurance event or
            membership services for your running or other such club (our
            “Services” provided via our Site for your “Race”). Your privacy is
            important to us. Because of this, we prefer to take a minimalistic
            approach to collecting information from you. We do not save any
            credit card information on our servers, and we do not sell your
            information or share it with anyone other than: (a) the sponsoring
            organization (sometimes referred to as the Race Owner) and the Event
            Director (collectively, the “Event Organization”) for the Races that
            you register for through Racemate, and (b) as otherwise expressly
            described in this Privacy Policy. We also do not send any mass
            emails and we never share credit card information with the Event
            Organization. Please note that the Event Organization administers
            and oversees the Race and can seek additional information and
            Content (defined in the “Information We Collect” section below) from
            you through the use of our Site or through a separate data
            collection method. The Event Organization also can control who may
            access the information and Content collected for their Race and
            posted or maintained on our Site and, in this regard, may provide
            certain individuals and third parties (such as the timer for your
            Race), and the public, with access to such information and Content.
            We do not control, and are not responsible for, the policies and
            practices of the Event Organization, or the conduct of other users
            or participants which the Event Organization gives access to our
            Site, with respect to their handling of your information and
            Content. For information about the Event Organization’s practices
            and policies, please contact them.
          </div>

          <h1 className="text-xl font-medium mt-5">
            The Information We Collect
          </h1>
          <div className="mt-2 text-gray-500">
            On Racemate, you can register yourself or someone else as a user of
            our website, and/or signup for a Race. On those Site pages, we will
            collect information about you including but not limited to: Name,
            Address, E-mail Address, Phone Number, Date of Birth (used for race
            categories only), and Gender (also used for race categories)
            (Collectively “Profile Information”) for those people who register
            as a user or sign up for an event on our Site. Your Profile
            Information is stored on a permanent profile on our Site that can be
            used by you to register for future races on Racemate. When
            completing your profile on Racemate you can select a box, which will
            allow you to be shown as “anonymous” in public participant and race
            results published by Racemate. We will also store: (a) information
            collected by the Event Organization, which may include some or all
            of your Profile Information and/or additional information which the
            Event Organization chooses, in their discretion, to collect; and (b)
            the lists and reports of participants for Races, which may include
            (at the election of the Event Organization) some or all of the
            information described in (a) above (collectively, the “Race Data”).
            In addition, we will store your ID and password (“login
            credentials”) that permits you to access your account on our Site.
            You should not share your login credentials with third parties. We
            will collect credit card information from you at the time of the
            transaction for the purpose of completing transactions to register
            for events. We will not store that credit card information on our
            servers or on the Site. The credit card information is sent
            directly, via secure means, to a trusted third party-operated
            payment service to complete a registration transaction. You can
            request to have your credit card information stored and only then do
            we store your credit card information with a trusted third
            party-operated online credit card vault storage company and not on
            our servers or on the Site. We confirm that these third parties have
            been certified as meeting high-level security standards as published
            by the Payment Card Industry Security Standards Council. The Race
            that you participate in may collect and store on our Site your name,
            voice and images of you (also sometimes referred to as your
            likeness) in photographs, motion pictures, results, publications or
            any other print, videographic or electronic recording of the Race
            (collectively, “Content”). You agree and consent that: (x) we may
            store, use and display the Content on our Site in connection with
            the provision of our Services in support, and the accompanying
            promotion, of your Race; and (y) the Content may be used by the
            Event Organization for the sale of those images to participants in
            their Races and for the marketing and promotion of such Races and
            other events which they may sponsor.
          </div>

          <h1 className="text-xl font-medium mt-5">
            Information We Automatically Collect
          </h1>
          <div className="mt-2 text-gray-500">
            Like many site operators, we collect information that your browser
            sends whenever you visit our Site (“Log Data”). This Log Data may
            include information such as your device’s Internet (“IP”) address,
            browser type, browser version, the pages of our Site that you visit,
            the time and date of your visit, the time spent on those pages and
            other statistics. Your devices may also transmit information about
            the type of device, information regarding your location and
            operating system, and identifiers associated with the device, and we
            collect this information. We will use Log Data and the
            above-described device-generated information to manage, operate and
            improve the Site and will not share or distribute such information
            to any third party other than the Event Organization, except as
            otherwise expressly described in this Privacy Policy. In addition,
            we may use third party services such as Google Analytics or develop
            our own tools that collect, monitor and analyze the collected
            information. For example, Google Analytics may be used to measure
            traffic or track visitor activity on the Site. We use this
            information to analyze and improve the usage of our Services and the
            type of information displayed to Site users so that we can better
            serve those interested in our Services. Google Analytics and other
            third party analytics services do not reveal to us your name or
            other personally identifying information. If you enable a “do not
            track” signal or similar mechanism relating to the tracking of
            browsing activities, we do not have practices or protocols to honor
            or respond to such request. However, we only collect the types of
            information otherwise described in this Privacy Policy.
          </div>

          <h1 className="text-xl font-medium mt-5">Cookies</h1>
          <div className="mt-2 text-gray-500">
            Cookies are files with small amounts of data, which may include an
            anonymous unique identifier. Cookies are sent to your browser from a
            web site and stored on your computer’s hard drive. Like many sites,
            we use cookies to collect information to enable us to more
            efficiently interact with you, and to operate and improve the Site
            and our Services. For example, cookies help us with things like
            remembering your user name for your next visit, understanding how
            you are using our Services, and improving our Site and Services
            based on that information. You can instruct your browser to refuse
            all cookies or to indicate when a cookie is being sent. However, if
            you do not accept cookies, you may not be able to use some portions
            of our Site.
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default SignUp;
