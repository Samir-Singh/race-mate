import Image from "next/image";
import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { GoChevronRight } from "react-icons/go";
import { FaCalendarAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const UpcomingEvents = () => {
  return (
    <div className="md:p-10 p-5">
      <div className="flex items-center">
        <Link href="/">
          <FaHome className="text-xl text-primary-color" />
        </Link>
        <GoChevronRight className="mx-3 text-xl" />
        <span>Upcoming Events</span>
      </div>

      <div className="flex flex-wrap lg:justify-center md:justify-between mt-5">
        {[
          {
            id: 1,
            name: "Doon Half Marathon",
            dateTime: "Feb 02, 2025 | 05:00 AM",
            city: "Dehradun",
            image:
              "https://ts-production.imgix.net/images/5b01493b-93b6-45c5-b879-1ba9cc731de2.jpg",
          },
          {
            id: 2,
            name: "MCD Run for Democracy 2.0",
            dateTime: "Feb 02, 2025 | 06:00 AM",
            city: "Saket",
            image:
              "https://ts-production.imgix.net/images/dd47f2e9-2ce9-433e-a5e7-fe4e4dcd88c4.jpg",
          },
          {
            id: 3,
            name: "Noida Grand Marathon - 9th Edition 2025",
            dateTime: "Feb 09, 2025 | 05:00 AM",
            city: "Noida",
            image:
              "https://ts-production.imgix.net/images/635d5e94-1b4d-4da4-8c72-9d80d04dea90.jpg",
          },
          {
            id: 4,
            name: "KED-RUN'25",
            dateTime: "Feb 09, 2025 | 05:00 AM",
            city: "Gurugram",
            image:
              "https://ts-production.imgix.net/images/add0ede6-2bc3-402b-8e01-293455960d45.jpg",
          },
          {
            id: 5,
            name: "The Great Bhiwani Run",
            dateTime: "Feb 06, 2025 | 06:00 AM",
            city: "Bhiwani",
            image:
              "https://ts-production.imgix.net/images/cb23f444-6183-4dee-a799-7a64307db820.jpg",
          },
        ]?.map((item) => (
          <div key={item.id} className="lg:w-1/3 md:w-1/2 w-full px-3 mt-5">
            {/* Ensure all cards have the same height */}
            <div
              className="rounded-lg overflow-hidden hover:-translate-y-3 transition-all duration-500 h-full flex flex-col"
              style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}
            >
              <Image
                src={item?.image}
                width={500}
                height={500}
                className="h-48 w-full object-cover"
                alt="race_card_img"
              />
              <div className="p-5 flex-grow flex flex-col">
                <p className="text-2xl font-bold">{item?.name}</p>
                <p className="mt-5 font-semibold flex items-center">
                  <FaCalendarAlt className="mr-2" />
                  {item?.dateTime}
                </p>

                <p className="mt-5 font-semibold flex items-center">
                  <FaLocationDot className="mr-2" />
                  {item?.city}
                </p>

                <div className="flex justify-between items-center mt-auto">
                  <span className="underline text-primary-color cursor-pointer">
                    Visit Race
                  </span>
                  <Link
                    href="/checkyourbib"
                    className="bg-primary-color text-white rounded-md p-3"
                  >
                    Check Your BIB
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingEvents;
