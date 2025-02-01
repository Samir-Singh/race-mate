"use client";

import "swiper/css";
import Link from "next/link";
import "swiper/css/scrollbar";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Home() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 2500,
        }}
        modules={[Autoplay]}
      >
        {[
          {
            id: 1,
            img: "/slider_image_1.jpg",
          },
          {
            id: 2,
            img: "/slider_image_2.jpg",
          },
          {
            id: 3,
            img: "/slider_image_3.jpg",
          },
          {
            id: 4,
            img: "/slider_image_4.jpg",
          },
          {
            id: 5,
            img: "/slider_image_5.jpg",
          },
          {
            id: 6,
            img: "/slider_image_6.jpg",
          },
          {
            id: 7,
            img: "/slider_image_7.jpg",
          },
          {
            id: 8,
            img: "/slider_image_8.jpg",
          },
          {
            id: 9,
            img: "/slider_image_9.jpg",
          },
        ]?.map((item) => (
          <SwiperSlide key={item?.id}>
            <Image
              src={item?.img}
              width={1000}
              height={400}
              alt={`slider_img${item?.id}`}
              className="w-full h-[400px]"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="md:p-10 p-5 flex flex-wrap justify-between gap-y-[3rem] gap-1">
        <Link
          href="/event-results"
          className="md:w-[300px] w-full shadow-md rounded p-5 border-b-4 border-t-4 border-b-primary-color border-t-primary-color"
        >
          <h2 className="text-center text-3xl">Race Results</h2>
          <p className="text-center mt-5 text-gray-500">
            Timing & Certificates
          </p>
        </Link>

        <Link
          href="/upcoming-events"
          className="cursor-pointer md:w-[300px] w-full shadow-md rounded p-5 border-b-4 border-t-4 border-b-primary-color border-t-primary-color"
        >
          <h2 className="text-center text-3xl">Upcoming Events</h2>
          <p className="text-center mt-5 text-gray-500">
            Check your bib & Mark the date
          </p>
        </Link>

        <div className="cursor-pointer md:w-[300px] md:max-w-[300px] w-full shadow-md rounded p-5 border-b-4 border-t-4 border-b-primary-color border-t-primary-color">
          <h2 className="text-center text-3xl">Event Registration</h2>
          <p className="text-center mt-5 text-gray-500">Let's start running</p>
        </div>

        <div className="cursor-pointer md:w-[300px] md:max-w-[300px] w-full shadow-md rounded p-5 border-b-4 border-t-4 border-b-primary-color border-t-primary-color">
          <h2 className="text-center text-3xl">Raceday Guide</h2>
          <p className="text-center mt-5 text-gray-500">
            A guide for every runner
          </p>
        </div>
      </div>

      <div className="flex items-center flex-col">
        <div className="md:text-3xl text-xl md:w-[70%] w-[90%] text-center bg-primary-color rounded-md text-white p-2">
          Frequently Asked Questions
        </div>

        <div
          style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}
          className="md:w-[70%] w-[90%] mt-5 p-3 rounded flex flex-wrap"
        >
          <div className="md:w-[50%] rounded overflow-hidden w-full">
            <Image src="/faq1.jpg" width={1000} height={1000} alt="faq1" />
          </div>
          <div className="md:w-[50%] md:pl-10 md:mt-0 mt-5 pl-0 w-full">
            <h2 className="text-3xl">What is a BIB?</h2>
            <p className="mt-5 text-gray-600 text-xl">
              In runners world a bib is a sheet of paper with an e-tag attached
              to it. This tag is used to record the runners accurate timing over
              the course of the marathon. The bib also has a unique bib number,
              printed in big fonts, along with the runner's name.
            </p>
          </div>
        </div>

        <div
          style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}
          className="md:w-[70%] w-[90%] mt-5 p-3 rounded flex flex-wrap"
        >
          <div className="md:w-[50%] w-full">
            <h2 className="text-3xl">How to put on a Race Bib?</h2>
            <p className="mt-5 text-gray-600 text-xl">
              With the help of safety pins carefully pin it in all four corners
              as shown in image. Always pull the shirt away from your body
              before piercing the Tshirt with a safety pin!
            </p>
          </div>
          <div className="md:w-[50%] w-full rounded overflow-hidden md:mt-0 mt-5">
            <Image src="/faq2.jpg" width={1000} height={1000} alt="faq1" />
          </div>
        </div>

        <div
          style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}
          className="md:w-[70%] w-[90%] mt-5 p-3 rounded flex flex-wrap"
        >
          <div className="md:w-[50%] rounded overflow-hidden w-full">
            <Image src="/faq3.jpg" width={1000} height={1000} alt="faq1" />
          </div>
          <div className="md:w-[50%] md:pl-10 md:mt-0 mt-5 pl-0 w-full">
            <h2 className="text-3xl">Do and don'ts with Race Bib</h2>
            <p className="mt-5 text-gray-600 text-xl">
              In order to receive an accurate time please confirm your bib is:
            </p>
            <ul className="list-disc ml-10 text-gray-600 my-5">
              <li>Clearly visible on the front of torso, not the back</li>
              <li>Unaltered and unmodified</li>
              <li>Do not remove e-tag or Foam</li>
              <li>Do not fold or wrinkle</li>
              <li>Not covered by: Jacket, Runner belt etc</li>
            </ul>
            <p className="text-gray-600 text-xl">
              That's all You’re ready to race!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
