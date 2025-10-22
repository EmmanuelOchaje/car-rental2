import Image from "next/image";
import React from "react";
import carFull from "../../assets/car-full.png";
import location from "../../assets/location.png";
import Calendar from "../../assets/Calendar.png";
import arrowRight from "../../assets/arrow-right.png";

import Link from "next/link";

const Hero = (props) => {
  return (
    <div className="flex flex-col bg-black font-figtree">
      <div className={`text-white h-full pt-16 relative`}>
        <h1 className="text-bold md:text-5xl px-5 text-3xl text-center text-wrap max-w-xl mx-auto font-figtree">
          Discover the world on wheels with our car rental service{" "}
        </h1>
        <div>
          <div className="relative">
            <Image
              src={carFull}
              alt=""
              className="-inset-[7.5rem] mt-[5rem] md:mt-0 absolute mx-auto"
            />
          </div>
        </div>
        <p
          className="font-figtree text-center text-wrap text-md font-extralight text-white/50 max-w-xl mx-auto
          my-8 mt-[15rem] p-5 md:mt-[16rem]"
        >
          Choose from a wide range of cars that fit your style and budget.
          Experience the freedom of the open road with our reliable and
          efficient rental service.
        </p>
        {/* bar horizon */}
        <div className="w-fit hidden text-black h-fit mx-auto bg-white py-4 px-6 xl:flex gap-6 items-center">
          <div className="flex gap-2 justify-between">
            {/* inner div */}
            <div>
              <h4 className="font-light my-1 text-[12px]">Pick up location</h4>
              <div className="flex bg-gray-50 w-[15rem] rounded-lg px-2">
                <Image src={location} alt="" className="w-3 my-auto h-3" />
                <input
                  type="text"
                  className="p-2 w-full bg-gray-50 text-[12px]"
                  placeholder="search your location"
                />
              </div>
            </div>
            {/* inner div */}
            <div>
              <h4 className="font-light my-1 text-[12px]">Pick up Date</h4>
              <div className="flex bg-gray-50 w-[15rem] rounded-lg px-2">
                <input
                  type="text"
                  className="p-2 w-full bg-gray-50 text-[12px]"
                  placeholder="12/6/25"
                />
                <Image src={Calendar} alt="" className="w-3 my-auto h-3" />
              </div>
            </div>{" "}
            {/* inner div */}
            <div>
              <h4 className="font-light my-1 text-[12px]">Drop-off location</h4>
              <div className="flex bg-gray-50 w-[15rem] rounded-lg px-2">
                <Image src={location} alt="" className="w-3 my-auto h-3" />
                <input
                  type="text"
                  className="p-2 w-full bg-gray-50 text-[12px]"
                  placeholder="search your location"
                />
              </div>
            </div>{" "}
            {/* inner div */}
            <div>
              <h4 className="font-light my-1 text-[12px]">Drop-off Date</h4>
              <div className="flex bg-gray-50 w-[15rem] rounded-lg px-2">
                <input
                  type="text"
                  className="p-2 w-full bg-gray-50 text-[12px]"
                  placeholder="12/6/25"
                />
                <Image src={Calendar} alt="" className="w-3 my-auto h-3" />
              </div>
            </div>
          </div>
          <Link href={""} className="mt-5">
            <button className="bg-black text-sm flex justify-center items-center gap-2 text-white rounded-lg p-2">
              Find Vehicle <Image src={arrowRight} alt="" className="w-4 h-4" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
