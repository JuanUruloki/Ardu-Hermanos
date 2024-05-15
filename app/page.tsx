"use client";
import AboutSectionOne from "@/components/About/AboutSectionOne";
import Carousel from "@/components/Carousel";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Products";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";

import { Metadata } from "next";

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
      <Carousel />
      <div
        className="h-60"
        style={{
          backgroundImage: "url('/images/Brand/paleta2.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <Features />
      {/* <Video /> */}
      {/* <Brands /> */}
      <AboutSectionOne />
      {/* <AboutSectionTwo /> */}
      <Testimonials />
      {/* <Pricing /> */}
      {/* <Blog /> */}
      <Contact />
    </>
  );
}
