import Image from "next/image";
import Slide from "./collectionSlide";
import arrowRight from "../../assets/right-arrow-black.png";

const Collection = () => {
  return (
    <div className="px-16 font-figtree py-20 my-10 bg-gray-50">
      <h1 className="text-center text-3xl md:text-4xl font-bold">
        Our Impressive Collection Of Cars
      </h1>
      <p className="text-center font-sm md:font-xl text-wrap max-w-xl my-6 mx-auto">
        Ranging from elegant sedans to powerful sports cars, all carefully
        selected to provide our customers with the ultimate driving experience.
      </p>

      <div className="flex flex-wrap w-fit mx-auto md:gap-4 gap-1 my-3">
        <button className="bg-black text-white text-xs md:text-sm rounded-full p-2 md:p-3">
          Popular Car
        </button>
        <button className="bg-white text-xs md:text-sm rounded-full p-2 md:p-3">
          Luxury Car
        </button>
        <button className="bg-white text-xs md:text-sm rounded-full p-2 md:p-3">
          Vinteage Car
        </button>
        <button className="bg-white text-xs md:text-sm rounded-full p-2 md:p-3">
          Family Car
        </button>
        <button className="bg-white text-xs md:text-sm rounded-full p-2 md:p-3">
          Off-Road Car
        </button>
      </div>

      <div>
        <Slide />
      </div>

      <div className="mt-20 justify-center flex">
        <button className="bg-transparent p-3 border-[2px] border-black flex items-center gap-2 rounded-full">
          See More Cars <Image src={arrowRight} alt="" className="w-3 h-3 " />
        </button>
      </div>
    </div>
  );
};

export default Collection;
