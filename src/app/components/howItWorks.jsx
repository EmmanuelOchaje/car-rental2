import Link from "next/link";
import search from "../../assets/search.png";
import calendar from "../../assets/calendar-book.png";
import happyFace from "../../assets/happy-face.png";
import hummer from "../../assets/hummer.png";

import Image from "next/image";

const steps = [
  {
    icon: search,
    title: "Browse and select",
    desc: "Choose from our wide range of premium cars, select the pickup and return dates and locations that suit you best.",
  },
  {
    icon: calendar,
    title: "Book and confirm",
    desc: "Book your desired car with just a few clicks and receive an instant confirmation via email or SMS.",
  },
  {
    icon: happyFace,
    title: "Enjoy your ride",
    desc: "Pick up your car at the designated location and enjoy your premium driving experience with our top-quality service.",
  },
];

const HIW = (props) => {
  return (
    <div className="px-16 font-figtree relative z-10 my-10">
      <h2 className="text-2xl md:text-3xl font-bold text-center">
        How it works
      </h2>
      <p className="text-center max-w-xl md:text-md font-normal my-2 mx-auto text-wrap">
        Renting a luxury car has never been easier. Our streamlined process
        makes it simple for you to book and confirm your vehicle of choice
        online
      </p>

      <div className="relative flex justify-between items-start mt-1 lg:mt-8">
        <div className="py-5 relative max-w- w-[950px] mx-auto flex lg:block flex-col items-center gap-5 my-6 h-fit">
          <div className="lg:absolute flex mt-8 lg:mr-[60px] flex-col">
            <div className="flex flex-col gap-3">
              {steps.map((step, i) => (
                <div
                  key={i}
                  className="flex gap-2 border-[#0000001A] border p-4 w-fit bg-white rounded-lg"
                >
                  <div className="bg-[#F5F5F5] py-4 px-2 rounded-lg flex justify-center items-center">
                    <Link href="">
                      <div className="w-[20px]">
                        <Image
                          src={step.icon}
                          alt={step.title}
                          className="w-4 h-4"
                        />
                      </div>
                    </Link>
                  </div>
                  <div className="max-w-sm flex flex-col justify-between">
                    <h2 className="font-semibold mb-1 md:mb-3 text-[16px]">
                      {step.title}
                    </h2>
                    <p className="text-left text-xs md:text-sm">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* image right  */}
          <div className="float-right">
            <div className="max-w-xl h-xl bg-[#F5F5F5] rounded-lg p-20">
              <Image src={hummer} alt="/" className="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HIW;
