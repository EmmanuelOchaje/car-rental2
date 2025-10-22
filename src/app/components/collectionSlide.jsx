import Image from "next/image";
import React from "react";
import audi from "../../assets/audi-car.png";
import nissan from "../../assets/nissan-car.png";
import porshe from "../../assets/porshe-car.png";
import bmw from "../../assets/bmw-car.png";
import bmw1 from "../../assets/bmw-car1.png";
import mclaren from "../../assets/mc-laren.png";
import speed from "../../assets/speed.png";
import gas from "../../assets/gas.png";
import passengers from "../../assets/passengers.png";
import auto from "../../assets/auto.png";

const cars = [
  {
    name: "Audi A8 L 2022",
    price: 78.9,
    src: audi,
    id: 1,
  },
  {
    name: "Nissan Maxima Platinum 2022",
    price: 78.9,
    src: nissan,
    id: 2,
  },
  {
    name: "Porshe Cayenne GTS 2022",
    price: 78.9,
    src: porshe,
    id: 3,
  },
  {
    name: "BMW M8 Coupe 2022",
    price: 78.9,
    src: bmw,
    id: 4,
  },
  {
    name: "BMW X7 M50i 2022",
    price: 78.9,
    src: bmw1,
    id: 5,
  },
  {
    name: "MC Laren 2022",
    price: 78.9,
    src: mclaren,
    id: 6,
  },
];

const Slide = () => {
  return (
    <div className="justify-center flex flex-wrap gap-4">
      {" "}
      {/* Added Tailwind for layout */}
      {cars.map((car) => (
        <div key={car.id} className="p-1 rounded-[18px] border">
          <div className="max-w-[300px] max-h-[200px]">
            <Image src={car.src} alt={car.name} className="w-full" />
          </div>
          <p className="my-3 text-md font-normal mx-4">{car.name}</p>
          <h3 className="text-sm my-2 text-gray-500 font-light mx-4">
            <span className="font-bold text-2xl text-black">{car.price}</span>
            /day
          </h3>
          <div className="flex w-fit mx-auto gap-4 bg-gray-200 rounded-lg my-4">
            <div className="flex flex-col items-center p-2 px-4 rounded-lg">
              <Image src={speed} alt="Speed" width={20} height={20} />
              <p className="text-[10px]">4,000</p>
            </div>
            <div className="flex flex-col items-center p-2 px-4 rounded-lg">
              <Image src={auto} alt="Transmission" width={20} height={20} />
              <p className="text-[10px]">Auto</p>
            </div>
            <div className="flex flex-col items-center p-2 px-4 rounded-lg">
              <Image src={passengers} alt="Passengers" width={20} height={20} />
              <p className="text-[10px]">4 Person</p>
            </div>
            <div className="flex flex-col items-center p-2 px-4 rounded-lg">
              <Image src={gas} alt="Gas" width={20} height={20} />
              <p className="text-[10px]">Electric</p>
            </div>
          </div>
          <div className="flex justify-center">
            <button className="px-14 mt-3 w-fit p-2 rounded-full bg-transparent border-[2px] border-black text-lg">
              Rent now
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Slide;

/* return (
  <div>
    {cars.map((name, price, imageUrl, id) => (
      <div className="" key={id}>
        <Image src={imageUrl} alt="" className="w-20" />
        <p>{name}</p>
        <h3>{price} /day</h3>
        <div className="">
          <div>
            <Image src={speed} alt="" />
            <p>4,000</p>
          </div>
          <div>
            <Image src={auto} alt="" />
            <p>Auto</p>
          </div>
          <div>
            <Image src={passengers} alt="" />
            <p>4 Person</p>
          </div>
          <Image src={gas} alt="" />
        </div>
      </div>
    ))}
  </div>
); */
