import Image from "next/image";
import React from "react";
import apple from "../../assets/apple.png";
import google from "../../assets/google.png";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <div className="font-figtree text-white bg-black">
      <div className="flex flex-wrap justify-center p-16 items-center ">
        <div name={`download`}>
          <h2 className="font-bold text-center md:text-left text-2xl">
            Download our mobile app⚡
          </h2>
          <p className="text-xs md:text-sm max-w-md my-7 text-center md:text-left leading-6 text-balance font-light">
            Get exclusive access to car rentals with our mobile app. Download
            now and experience convenience on the go.
          </p>
        </div>
        <div className="flex gap-4" name={`buttons`}>
          <div className="max-w-[200px]">
            <Image src={apple} alt="" />
          </div>
          <div className="max-w-[200px]">
            <Image src={google} alt="" />
          </div>
        </div>
      </div>
      {/* <hr className="border-[.1px] my -6" /> */}

      <div className="flex flex-wrap flex-col md:flex-row gap-3 md:gap-0 items-center md:justify-around border-t-[.1px] border-[#FFFFFF1A] p-6 px-10">
        <div className="bg-black max-w-[200px]">
          <Image src={logo} alt="" />
        </div>
        <div
          name={"links"}
          className="flex font-light text-xs md:text-sm gap-10"
        >
          <button>Rent</button>
          <button>Share</button>
          <button>About us</button>
          <button>Contact</button>
        </div>
        <div name={"socials"} className="text-xs md:text-sm flex gap-6">
          <button>Instagram</button>
          <button>Tiwtter</button>
          <button>Youtube</button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
