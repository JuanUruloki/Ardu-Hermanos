"use client"
import Map from "../Map/map";
import NewsLatterBox from "./NewsLatterBox";

const Contact = () => {
  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/Backgrounds/background6C.svg')"
  }}>
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="flex w-full px-4 lg:w-7/12 xl:w-8/12">
            <div
              className="wow fadeInUp  shadow-three dark:bg-gray-dark mb-12 rounded-sm bg-white px-8 py-14 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s
              "
            >
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                Necesitas ayuda? Contactanos
              </h2>
              <p className="mb-12 text-base font-medium text-body-color">
                Nuestro equipo de atención al cliente está esperando tu consulta.
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
                        placeholder="Ingresa tu nombre"
                        className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                      />
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
                        placeholder="Ingresa tu email"
                        className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                      />
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
                        rows={5}
                        placeholder="Ingresa tu mensaje..."
                        className="border-stroke dark:text-body-color-dark dark:shadow-two w-full resize-none rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                      ></textarea>
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <button className="shadow-submit dark:shadow-submit-dark rounded-sm bg-primary px-9 py-4 text-base font-medium text-white duration-300 hover:bg-primary/90">
                      Enviar
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="wow fadeInUp w-full dark:bg-gray-dark mb-5 rounded-sm bg-white px-8 py-11  lg:w-5/12 xl:w-4/12">
            <h3 className="text-2xl font-semibold text-dark dark:text-white pt-4 pb-1.5">Nuestra Ubicación</h3>
            <a  href="https://www.google.com.ar/maps/place/Ardu+Hnos+SA+Productos+Quimicos+-+Hipoclorito+de+sodio+%22CLORO%22/@-31.399294,-64.0868918,17z/data=!3m1!4b1!4m6!3m5!1s0x9432970832de4cc7:0xef1e389a592f6527!8m2!3d-31.3992986!4d-64.0843169!16s%2Fg%2F11pwzgrf3z?entry=ttu" target="blank" className="hover:text-primary"><h3 className="text-sm font-medium text-dark dark:text-white pt-1 pb-1">El Milagro 1460, camino a Virgen de la Merced</h3>
            </a>
            <h3 className="text-sm font-medium  text-dark dark:text-white pt-1 pb-8">Córdoba Capital, Argentina</h3>
              <Map />
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
