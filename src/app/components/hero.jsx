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
      <div className={`text-white h-screen py-16 relative`}>
        <h1 className="text-bold text-5xl text-center text-wrap max-w-xl mx-auto font-figtree">
          Discover the world on wheels with our car rental service{" "}
        </h1>
        <div>
          <div className="relative">
            <Image
              src={carFull}
              alt=""
              className="-inset-[7.5rem] absolute mx-auto"
            />
          </div>
        </div>
        <p
          className="font-figtree text-center text-wrap text-md font-extralight text-white/50 max-w-xl mx-auto
          my-8 mt-[16rem]"
        >
          Choose from a wide range of cars that fit your style and budget.
          Experience the freedom of the open road with our reliable and
          efficient rental service.
        </p>
        {/* bar horizon */}
        <div className="w-[90%] text-black h-fit mx-auto bg-white/95 border rounded-lg py-4 px-6 flex gap-6 items-center">
          <div className="flex gap-2 justify-between">
            {/* inner div */}
            <div>
              <h4 className="font-light my-1 text-[12px]">Pick up location</h4>
              <div className="flex bg-white w-[15rem] rounded-lg px-2">
                <Image src={location} alt="" className="w-3 my-auto h-3" />
                <input
                  type="text"
                  className="p-2 w-full text-[12px]"
                  placeholder="search your location"
                />
              </div>
            </div>
            {/* inner div */}
            <div>
              <h4 className="font-light my-1 text-[12px]">Pick up Date</h4>
              <div className="flex bg-white w-[15rem] rounded-lg px-2">
                <input
                  type="text"
                  className="p-2 w-full text-[12px]"
                  placeholder="12/6/25"
                />
                <Image src={Calendar} alt="" className="w-3 my-auto h-3" />
              </div>
            </div>{" "}
            {/* inner div */}
            <div>
              <h4 className="font-light my-1 text-[12px]">Drop-off location</h4>
              <div className="flex bg-white w-[15rem] rounded-lg px-2">
                <Image src={location} alt="" className="w-3 my-auto h-3" />
                <input
                  type="text"
                  className="p-2 w-full text-[12px]"
                  placeholder="search your location"
                />
              </div>
            </div>{" "}
            {/* inner div */}
            <div>
              <h4 className="font-light my-1 text-[12px]">Drop-off Date</h4>
              <div className="flex bg-white w-[15rem] rounded-lg px-2">
                <input
                  type="text"
                  className="p-2 w-full text-[12px]"
                  placeholder="12/6/25"
                />
                <Image src={Calendar} alt="" className="w-3 my-auto h-3" />
              </div>
            </div>
          </div>
          <Link href={""} className="mt-5">
            <button className="bg-black flex justify-center items-center gap-2 text-white rounded-full p-3">
              Find Vehicle <Image src={arrowRight} alt="" className="w-4 h-4" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
{
  /* <div className="relative w-full h-screen">
      <div className="relative w-full h-full">
        <Image
          src={carHalf} // Replace with your image path or URL
          alt="Car rental"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="z-0"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-20">
          <h1 className="text-4xl md:text-5 Независимостьxl font-bold mb-4">
            Discover the world on wheels
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            with our car rental service
          </p>
          <button className="px-6 py-3 text-lg bg-blue-500 hover:bg-blue-600 text-white rounded-md transition duration-300">
            Login / Register
          </button>
        </div>
      </div>
    </div> */
}
{
  /* <div className="flex flex-col">
<div className={`bg-black bg-${carHalf} text-white h-screen py-16`}></div>
    <h1 className="text-bold text-5xl text-center text-wrap max-w-xl mx-auto font-figtree">
      Discover the world on wheels with our car rental service{" "}
    </h1>
    <div>
      <div className="relative grid-2/1">
        <Image
          src={carHalf}
          alt=""
          className="right-[25%] top-[-7rem]  mx-auto"
        />
      </div>
    </div>
    <p
      className="font-figtree text-center text-wrap text-md font-extralight text-white/50 max-w-xl mx-auto
     my-8 mt-[15rem]"
    >
      Choose from a wide range of cars that fit your style and budget.
      Experience the freedom of the open road with our reliable and
      efficient rental service.
    </p>
  </div> */
}
