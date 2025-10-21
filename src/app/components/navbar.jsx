import Image from "next/image";
import React from "react";
import logo from "../../assets/logo.png";
import Link from "next/link";

const Navbar = (props) => {
  return (
    <div className="bg-black w-full h-16 py-2 flex justify-between px-14 py-">
      {/* bars */}
      <div className="flex flex-col justify-between h-10 p-3 my-1">
        <div className="w-10 border-[2px] border-white rounded-full"></div>
        <div className="w-10 border-[2px] border-white rounded-full"></div>
      </div>

      {/* img */}
      <Image src={logo} alt="logo" className="w-[200px] ml-10 h-fit my-4" />
      <Link href={"#"}>
        <button className="border-[1.5px] text-white font-figtree text-[15px] font-normal font-sm rounded-full p-3">
          Login / Register
        </button>
      </Link>
    </div>
  );
};

export default Navbar;
