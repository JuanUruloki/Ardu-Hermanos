"use client";
import AboutSectionOne from "@/components/About/AboutSectionOne";
// import Carousel from "@/components/Carousel";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Products";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";

import { Metadata } from "next";
import PlantasPotabilizadoras from "@/components/PlantasPotabilizadoras";
import Industrias from "@/components/Industrias";
import Piletas from "@/components/Piletas";

// export const metadata: Metadata = {
//   title: "Ardu Hermanos",
//   description: "Ardu Hermanos",
//   // other metadata
// };

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      {/* <Carousel /> */}
      {/* <Video /> */}
      {/* <Brands /> */}
      <AboutSectionOne />
      {/* <AboutSectionTwo /> */}
      <Testimonials />
      {/* <Features /> */}
      {/* <Pricing /> */}
      {/* <PlantasPotabilizadoras />
      <Industrias />
      <Piletas /> */}
      <Contact />
    </>
  );
}
