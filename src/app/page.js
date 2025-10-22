import Image from "next/image";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Brands from "./components/brands";
import CarType from "./components/carType";
import Collection from "./components/collection";
import HIW from "./components/howItWorks";
import Benefits from "./components/benefits";
import TestimonialSlider from "./components/slider";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <Brands />
      <CarType />
      <Collection />
      <HIW />
      <Benefits />
      <TestimonialSlider />
      {/*
       */}
      <Footer />
    </div>
  );
}
