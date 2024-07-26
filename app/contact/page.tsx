import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Formulario de contacto",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
     <Contact />
    </>
  );
};

export default ContactPage;
