"use client";
import { useState } from "react";
import Map from "../Map/map";

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

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (validate()) {
      // lógica para enviar formulario
      console.log("Formulario enviado", data);
    }
  };

  const isFormValid =
    Object.values(errors).every((error) => error === "") &&
    Object.values(data).every((field) => field.trim() !== "");

  return (
    <section
      id="contact"
      className="overflow-hidden bg-cover bg-center bg-no-repeat py-16 md:py-20 lg:py-28"
      style={{ backgroundImage: "url('/images/Backgrounds/background6C.svg')" }}
    >
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="flex w-full px-4 lg:w-7/12 xl:w-8/12">
            <div
              className="wow fadeInUp  mb-12 rounded-sm bg-white px-8 py-14 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s
              "
            >
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                Necesitas ayuda? Contactanos
              </h2>
              <p className="mb-12 text-base font-medium text-body-color">
                Nuestro equipo de atención al cliente está esperando tu
                consulta.
              </p>
              <form>
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="name"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Nombre
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={data?.name}
                        placeholder="Ingresa tu nombre"
                        className="w-full rounded-sm border border-stroke bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {errors.name && touched.name && (
                        <p className="text-sm text-red-500">{errors.name}</p>
                      )}
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="email"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={data?.email}
                        placeholder="Ingresa tu email"
                        className="w-full rounded-sm border border-stroke bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {errors.email && touched.email && (
                        <p className="text-sm text-red-500">{errors.email}</p>
                      )}
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label
                        htmlFor="message"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Mensaje
                      </label>
                      <textarea
                        name="message"
                        value={data?.message}
                        rows={5}
                        placeholder="Ingresa tu mensaje..."
                        className="w-full resize-none rounded-sm border border-stroke bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                        onChange={handleChange}
                        onBlur={handleBlur}
                      ></textarea>
                      {errors.message && touched.message && (
                        <p className="text-sm text-red-500">{errors.message}</p>
                      )}
                    </div> 
                  </div>
                  <div className="w-full px-4">
                    <button
                      type="submit"
                      disabled={!isFormValid}
                      className={`rounded-sm px-9 py-4 text-base font-medium text-white shadow-submit duration-300 dark:shadow-submit-dark ${
                        isFormValid
                          ? "bg-primary hover:bg-primary/90"
                          : "cursor-not-allowed bg-gray-400"
                      }`}
                    >
                      Enviar
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="wow fadeInUp mb-5 w-full rounded-sm bg-white px-8 py-11 dark:bg-gray-dark  lg:w-5/12 xl:w-4/12">
            <h3 className="pb-1.5 pt-4 text-2xl font-semibold text-dark dark:text-white">
              Nuestra Ubicación
            </h3>
            <a
              href="https://www.google.com.ar/maps/place/Ardu+Hnos+SA+Productos+Quimicos+-+Hipoclorito+de+sodio+%22CLORO%22/@-31.399294,-64.0868918,17z/data=!3m1!4b1!4m6!3m5!1s0x9432970832de4cc7:0xef1e389a592f6527!8m2!3d-31.3992986!4d-64.0843169!16s%2Fg%2F11pwzgrf3z?entry=ttu"
              target="blank"
              className="hover:text-primary"
            >
              <h3 className="pb-1 pt-1 text-sm font-medium text-dark dark:text-white">
                El Milagro 1460, camino a Virgen de la Merced
              </h3>
            </a>
            <h3 className="pb-8 pt-1  text-sm font-medium text-dark dark:text-white">
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
