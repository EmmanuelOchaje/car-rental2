"use client";
import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import avatar from "../../assets/avatar.png";
import Image from "next/image";

const testimonials = [
  {
    quote:
      "I was really impressed with the level of service I received from this car rental company. The process was smooth and easy, and the car I rented was in excellent condition. The staff was friendly and helpful, and I felt well taken care of throughout my rental period. I would definitely recommend this company to anyone looking for a premium car rental experience.",
    name: "Lokman Hossain",
    location: "From Texas",
    image: avatar,
  },
  {
    quote:
      "The best car rental experience I’ve ever had. Super professional staff and amazing cars. Highly recommend!",
    name: "Jane Doe",
    location: "From Florida",
    image: avatar,
  },
  {
    quote:
      "Top-notch service from start to finish. Easy booking, clean cars, and friendly support. I’ll definitely be back.",
    name: "Michael Carter",
    location: "From California",
    image: avatar,
  },
];

export default function TestimonialSlider() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  const nextSlide = () =>
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));

  return (
    <div className="max-w-3xl font-figtree mx-auto px-6 py-16 bg-white">
      {/* Heading and Arrows */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-xl sm:text-2xl font-bold pl-6 text-gray-900">
          What Our Customers Say
        </h2>
        <div className="flex gap-3">
          <button
            onClick={prevSlide}
            disabled={current === 0}
            className={`w-8 h-8 flex items-center justify-center rounded-full border p-2 transition 
              ${
                current === 0
                  ? "border-gray-200 text-gray-300 cursor-not-allowed bg-gray-50"
                  : "border-gray-300 text-gray-700 hover:bg-gray-100"
              }`}
          >
            <FaArrowLeft size={12} />
          </button>

          <button
            onClick={nextSlide}
            disabled={current === testimonials.length - 1}
            className={`w-8 h-8 flex items-center justify-center rounded-full p-2 transition 
              ${
                current === testimonials.length - 1
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                  : "bg-black text-white hover:bg-gray-800"
              }`}
          >
            <FaArrowRight size={12} />
          </button>
        </div>
      </div>

      {/* Testimonial Card */}
      <div className="bg-white rounded-xl p-6">
        <p className="text-[#727272] font-normal leading-relaxed mb-8">
          “{testimonials[current].quote}”
        </p>

        {/* User Info */}
        <div className="flex items-center gap-4">
          <div className=""></div>
          <Image
            src={testimonials[current].image}
            alt={testimonials[current].name}
            /* width={20}
            height={20} */
            className="w-12 h-12 rounded-full"
          />
          <div>
            <h4 className="font-bold text-gray-900">
              {testimonials[current].name}
            </h4>
            <p className="text-sm text-gray-500">
              {testimonials[current].location}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
