"use client";
import AboutSectionOne from "@/components/About/AboutSectionOne";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ardu Hermanos - Home</title>
        <meta name="description" content="Comercialización y distribución de productos químicos" />
        <meta property="og:title" content="Ardu Hermanos - Home" />
        <meta property="og:description" content="Productos químicos para plantas potabilizadoras, industrias y piletas" />
        <meta property="og:image" content="https://res.cloudinary.com/dsf3qr13z/image/upload/v1722304057/og_image_uceuev.jpg" />
        <meta property="og:url" content="https://arduhnos.com/" />
        <meta property="og:type" content="website" />
      </Head>
      <ScrollUp />
      <Hero />
      <Products />
      <AboutSectionOne />
      <Contact />
    </>
  );
}
