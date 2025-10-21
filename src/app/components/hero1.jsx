import Image from "next/image";
import carHalf from "../../assets/car-half.png";
import arrow from "../../assets/icon.png";

import Link from "next/link";

const Hero = () => {
  return (
    <>
      <div className="bg-black text-white flex justify-center">
        <div className="flex w-full relative h-screen justify-between">
          <div className="max-w-2xl ml-16 py-10">
            <h1 className="text-bold text-6xl font-figtree">
              Discover the world on wheels with our car rental service{" "}
            </h1>
            <p className="font-figtree text-wrap text-xl my-8">
              Choose from a wide range of cars that fit your style and budget.
              Experience the freedom of the open road with our reliable and
              efficient rental service.
            </p>
            <hr className="w-full border-1" />
            <Link href="#" className="flex gap-3 my-3">
              <button className="bg-white p-2 w-7 h-8 flex justify-center border rounded-full">
                <Image src={arrow} alt="" className="w-full h-full" />
              </button>
              <button className="font-figtree">Contact</button>
            </Link>
          </div>
          <div>
            <Image
              src={carHalf}
              alt=""
              className="absolute right-[0%] top-[-150px] w-[700px]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
