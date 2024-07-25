"use client";
import { useState } from "react";
import Map from "../Map/map";
import axios from "axios";

const Contact = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [touched, setTouched] = useState({
    name: false,
    email: false,
    message: false,
  });

  const [message, setMessage] = useState("");

  const validate = () => {
    const newErrors = { name: "", email: "", message: "" };
    if (!data.name.trim()) newErrors.name = "El nombre es obligatorio";
    if (!data.email.trim()) {
      newErrors.email = "El email es obligatorio";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      newErrors.email = "El email no es válido";
    }
    if (!data.message.trim()) newErrors.message = "El mensaje es obligatorio";
    setErrors(newErrors);
    return Object.values(newErrors).every((error) => error === "");
  };

  const handleBlur = (
    event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name } = event.target;
    setTouched((prev) => ({
      ...prev,
      [name]: true,
    }));
    validate();
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
    validate();
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (validate()) {
      try {
        const form = event.currentTarget as HTMLFormElement;
        const formData = new FormData(form);
        const response = await axios.post(form.action, formData, {
          headers: {
            Accept: "application/json",
          },
        });

        const result = response.data;
        if (response.status !== 200) {
          setMessage(
            result.errors.map((error: any) => error.message).join(", "),
          );
          return false;
        }
        setMessage("Se ha enviado tu correo satisfactoriamente");
      } catch (error: any) {
        setMessage(
          error.response?.data?.errors
            ? error.response.data.errors
                .map((err: any) => err.message)
                .join(", ")
            : "Ocurrió un error al enviar el formulario",
        );
      }
      console.log("Formulario enviado", data);
    }
  };

  const isFormValid =
    Object.values(errors).every((error) => error === "") &&
    Object.values(data).every((field) => field.trim() !== "");

  return (
    <section
      id="contact"
      className="overflow-hidden bg-cover bg-center bg-no-repeat bg-opacity-10 py-16 dark:bg-slate-300 md:py-20 lg:py-28"
      style={{ backgroundImage: "url('/images/Backgrounds/contact.png')" }}
    >
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="flex w-full px-4 lg:w-7/12 xl:w-8/12">
            <div
              className="wow fadeInUp  mb-12 rounded-lg bg-white px-8 py-14 dark:bg-transparent sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s
              "
            >
              <h2 className="mb-3 pl-2 text-3xl font-titles text-black dark:text-white sm:text-3xl lg:text-3xl xl:text-3xl">
                Necesitas ayuda? Contactanos
              </h2>
              <p className="mb-12 pl-2 text-base font-body text-withe">
                Nuestro equipo de atención al cliente está esperando tu
                consulta.
              </p>
              <form
                action="https://formspree.io/f/xrbzzojr"
                method="POST"
                onSubmit={handleSubmit}
              >
                <div className="-mx-4  flex flex-wrap ">
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-6 -mt-4 ">
                      <label
                        htmlFor="name"
                        className="mb-3 pl-2 block text-lg font-body text-dark dark:text-white"
                      >
                        Nombre
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={data?.name}
                        placeholder="Ingresá tu nombre"
                        className="w-full rounded-lg border border-stroke bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {errors.name && touched.name && (
                        <p className="text-lg text-red-600">{errors.name}</p>
                      )}
                    </div>
                  </div>
                  <div className="w-full -mt-4 px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="email"
                        className="mb-3 pl-2 block text-lg font-body text-dark dark:text-white"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={data?.email}
                        placeholder="Ingresá tu email"
                        className="w-full rounded-lg border border-stroke bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {errors.email && touched.email && (
                        <p className="text-lg text-red-600">{errors.email}</p>
                      )}
                    </div>
                  </div>
                  <div className="w-full px-4 -mt-5">
                    <div className="mb-8">
                      <label
                        htmlFor="message"
                        className="mb-3 pl-2 block text-lg font-body text-dark dark:text-white"
                      >
                        Mensaje
                      </label>
                      <textarea
                        name="message"
                        value={data?.message}
                        rows={5}
                        placeholder="Dejanos tu consulta..."
                        className="w-full xl:h-44 resize-none rounded-lg border border-stroke bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                        onChange={handleChange}
                        onBlur={handleBlur}
                      ></textarea>
                      {errors.message && touched.message && (
                        <p className="text-lg text-red-600">{errors.message}</p>
                      )}
                    </div>
                  </div>
                  <div className="w-full px-4 -mt-2">
                    <button
                      type="submit"
                      disabled={!isFormValid}
                      className={`rounded-lg h-16 w-56 text-3xl text-white font-header duration-300 dark:shadow-submit-dark ${
                        isFormValid
                          ? "bg-lightBlue hover:bg-primary/90"
                          : "cursor-not-allowed bg-gray"
                      }`}
                    >
                      Enviar
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="wow fadeInUp mb-5 w-full rounded-lg bg-white px-8 py-11 dark:bg-transparent xs:px-[50px] xs:-mt-20 sm:px-[70px] sm:-mt-20 lg:px-[0px] lg:pt-[123px] lg:w-5/12 xl:w-4/12">
            <h3 className="pb-1.5 pt-3 pl-2 text-3xl font-titles text-dark dark:text-white">
              Nuestra Ubicación
            </h3>
            <a
              href="https://www.google.com.ar/maps/place/Ardu+Hnos+SA+Productos+Quimicos+-+Hipoclorito+de+sodio+%22CLORO%22/@-31.399294,-64.0868918,17z/data=!3m1!4b1!4m6!3m5!1s0x9432970832de4cc7:0xef1e389a592f6527!8m2!3d-31.3992986!4d-64.0843169!16s%2Fg%2F11pwzgrf3z?entry=ttu"
              target="blank"
              className="hover:text-primary"
            >
              <h3 className="pb-1 pt-1 pl-2 text-sm font-body text-dark dark:text-white">
                El Milagro 1460, camino a Virgen de la Merced
              </h3>
            </a>
            <h3 className="pb-8 pt-1 pl-2 text-sm font-body text-dark dark:text-white">
              Córdoba Capital, Argentina
            </h3>
            <Map />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
