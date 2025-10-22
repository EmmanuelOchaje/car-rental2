import Image from "next/image";
import star from "../../assets/star.png"; // replace with your actual icons
import partner from "../../assets/partner.png";
import verified from "../../assets/verified.png";

const Benefits = () => {
  return (
    <section className="bg-black text-white py-10 px-4 sm:px-8 md:px-16 font-figtree">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold mb-3">
          Our Services & Benefits
        </h2>
        <p className="text-sm sm:text-base text-white/70 max-w-xl mx-auto">
          To make renting easy and hassle-free, we provide a variety of services
          and advantages. We have you covered with a variety of vehicles and
          flexible rental terms.
        </p>
      </div>

      {/* Services grid */}
      <div className="flex flex-col sm:flex-row justify-between gap-4 text-center">
        {/* Quality Choice */}
        <div className="flex-1 flex flex-col items-center gap-3">
          <div className="bg-white/10 rounded-full">
            <Image src={star} alt="Quality Choice" className="w-14 h-14" />
          </div>
          <h4 className="font-semibold text-md">Quality Choice</h4>
          <p className="text-xs text-white/70 max-w-xs">
            We offer a wide range of high-quality vehicles to choose from,
            including luxury cars, SUVs, vans, and more.
          </p>
        </div>

        {/* Affordable Prices */}
        <div className="flex-1 flex flex-col items-center gap-3">
          <div className="bg-white/10 rounded-full">
            <Image
              src={partner}
              alt="Affordable Prices"
              className="w-14 h-14"
            />
          </div>
          <h4 className="font-semibold text-md">Affordable Prices</h4>
          <p className="text-xs text-white/70 max-w-xs">
            Our rental rates are highly competitive and affordable, allowing our
            customers to enjoy their trips without breaking the bank.
          </p>
        </div>

        {/* Convenient Online Booking */}
        <div className="flex-1 flex flex-col items-center gap-3">
          <div className="bg-white/10 rounded-full">
            <Image
              src={verified}
              alt="Convenient Online Booking"
              className="w-14 h-14"
            />
          </div>
          <h4 className="font-semibold text-md">Convenient Online Booking</h4>
          <p className="text-xs text-white/70 max-w-xs">
            With our easy-to-use online booking system, customers can quickly
            and conveniently reserve their rental car from anywhere, anytime.
          </p>
        </div>
      </div>
    </section>
  );
};

/* const Benefits = (props) => {
  return (
    <div className="px-16 relative font-figtree py-20 my-10 text-white bg-black">
      <h1 className="text-center text-4xl font-bold">
        Our Services & Benefits
      </h1>
      <p className="text-center font-xl text-wrap max-w-2xl my-6 mx-auto">
        To make renting easy and hassle-free, we provide a variety of services
        and advantages. We have you covered with a variety of vehicles and
        flexible rental terms.
      </p>
    </div>
  );
}; */

export default Benefits;
