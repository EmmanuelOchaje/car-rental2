import Image from "next/image";
import Link from "next/link";
import arrowBlack from "../../assets/right-arrow-black.png";
import compact from "../../assets/compact.png";
import convertible from "../../assets/convertible.png";
import coup from "../../assets/coup.png";
import crossover from "../../assets/crossover.png";
import pickup from "../../assets/pickup.png";
import sedan from "../../assets/sedan.png";
import mpv from "../../assets/mpv.png";
import sport from "../../assets/sport.png";
import suv from "../../assets/suv.png";
import wagon from "../../assets/wagon.png";

const type = [
  {
    type: compact,
    name: "Compact",
  },
  {
    type: convertible,
    name: "Convertible",
  },
  {
    type: coup,
    name: "Coup",
  },
  {
    type: crossover,
    name: "Crossover",
  },
  {
    type: pickup,
    name: "Pickup",
  },
  {
    type: sedan,
    name: "Sedan",
  },
  {
    type: mpv,
    name: "Family MBP",
  },
  {
    type: suv,
    name: "Suv",
  },
  {
    type: sport,
    name: "Sport Coupe",
  },
  {
    type: sport,
    name: "BMW",
  },
  {
    type: wagon,
    name: "Wagon",
  },
  {
    type: wagon,
    name: "Limousine",
  },
];

const CarType = () => {
  return (
    <div className="w-full font-figtree pb-6 px-8 md:px-16 bg-white">
      <div className="my-6">
        <Link
          href={""}
          className="float-right hidden md:flex items-center gap-2"
        >
          View All <Image src={arrowBlack} className="w-3 h-3" alt="" />
        </Link>
        <h2 className="mt-10 text-center md:text-left font-semibold ">
          Rent By Body Type
        </h2>
      </div>
      <div className="flex flex-row flex-wrap justify-center lg:justify-normal gap-6 md:gap-12">
        {type.map((item, ind) => (
          <div
            key={ind}
            className="w-[80px] py-2 md:py-0 md:w-[150px] bg-gray-50 rounded-lg"
          >
            <div className="w-10 md:w-20 mx-auto">
              <Image
                src={item.type}
                alt=""
                className="w-10 md:w-16 mx-auto my-6"
              />
            </div>
            <h4 className="text-center text-[13px]">{item.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarType;
