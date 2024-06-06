"use client";
import AboutSectionOne from "@/components/About/AboutSectionOne";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Products from "@/components/Products";

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Products />
      <AboutSectionOne />
      <Contact />
    </>
  );
}
