import Image from "next/image";
import Link from "next/link";
import arrowBlack from "../../assets/right-arrow-black.png";
import toyota from "../../assets/toyota.png";
import volkesw from "../../assets/volkesw.png";
import bmw from "../../assets/bmw.png";
import audi from "../../assets/audi.png";
import hyundai from "../../assets/hyundai.png";
import kia from "../../assets/kia.png";
import mercedes from "../../assets/mercedes.png";
import nissan from "../../assets/nissan.png";
import tesla from "../../assets/tesla.png";
import honda from "../../assets/honda.png";
import chev from "../../assets/chev.png";
import ford from "../../assets/ford.png";

const brands = [
  {
    logo: toyota,
    brand: "Toyota",
  },
  {
    logo: ford,
    brand: "Ford",
  },
  {
    logo: tesla,
    brand: "Tesla",
  },
  {
    logo: volkesw,
    brand: "Volkes Wagwon",
  },
  {
    logo: honda,
    brand: "Honda",
  },
  {
    logo: nissan,
    brand: "Nissan",
  },
  {
    logo: chev,
    brand: "Chevrolet",
  },
  {
    logo: bmw,
    brand: "BMw",
  },
  {
    logo: mercedes,
    brand: "Mercedes-Benz",
  },
  {
    logo: hyundai,
    brand: "Hyundai",
  },
  {
    logo: audi,
    brand: "Audi",
  },
  {
    logo: kia,
    brand: "KIA",
  },
];

const Brands = () => {
  return (
    <div className="w-full font-figtree py-16 px-16 bg-white">
      <div className="my-6">
        <Link href={""} className="float-right flex items-center gap-2">
          View All <Image src={arrowBlack} className="w-3 h-3" alt="" />
        </Link>
        <h2 className="mt-10 font-semibold ">Rent By Brands</h2>
      </div>
      <div className="flex flex-row flex-wrap gap-12">
        {brands.map((item, ind) => (
          <div key={ind} className="w-[150px] bg-gray-50 rounded-lg">
            <div className="w-20 mx-auto">
              <Image src={item.logo} alt="" className="w-10 mx-auto my-6" />
            </div>
            <h4 className="text-center text-[13px]">{item.brand}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brands;
