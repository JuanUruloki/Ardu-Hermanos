import { useState, useEffect } from "react";

interface RotatingTextItem {
  title: string;
  paragraph: string;
}

const rotatingTexts: RotatingTextItem[] = [
  {
    title: "Plantas Potabilizadoras",
    paragraph: "Ofrecemos una gama completa de productos químicos diseñados específicamente para plantas potabilizadoras. Nuestro compromiso es proporcionar soluciones de alta calidad que garanticen la pureza y seguridad del agua potable para comunidades y municipios."
  },
  {
    title: "Productos Para Industrias",
    paragraph: "En nuestro catálogo de productos químicos para industrias, encontrarás una amplia selección de compuestos diseñados para optimizar procesos productivos y garantizar estándares de calidad superiores. Desde agentes de limpieza y desengrasantes hasta inhibidores de corrosión y productos especializados para tratamiento de efluentes, ofrecemos soluciones integrales que ayudarán a mejorar la eficiencia y la rentabilidad de tu empresa."
  },
  {
    title: "Mantenimiento de Piletas",
    paragraph: "Nuestra línea de productos químicos para el cuidado de piletas está diseñada para garantizar agua cristalina y segura en todo momento. Desde desinfectantes de amplio espectro y reguladores de pH hasta algicidas y clarificadores, ofrecemos una variedad de productos de alta calidad que ayudarán a mantener tu pileta en óptimas condiciones, brindando tranquilidad y disfrute a tus momentos de recreación."
  },
];

const RotatingText = () => {
  const [index, setIndex] = useState(0);
  const [fadeClass, setFadeClass] = useState("opacity-100");

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeClass("opacity-0"); 
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % rotatingTexts.length);
        setFadeClass("opacity-100");
      }, 1800); 
    }, 6000); 

    return () => clearInterval(interval);
  }, []);

  const { title, paragraph } = rotatingTexts[index];

  return (
    <div className="relative xxs:w-full xxs:h-full lg:w-1/2 lg:h-full flex justify-start items-start text-start  ">
      <div className="pl-8 md:pl-16 pr-8 bg-transparent">
        <div className={`transition-opacity duration-700 ${fadeClass}`}>
          <h2 className="xxs:text-3xl sm:text-4xl lg:text-5xl font-titles pb-4">{title}</h2>
          <p className="xxs:text-sm sm:text-xl lg:text-2xl font-body">{paragraph}</p>
        </div>
      </div>
    </div>
  );
};

export default RotatingText;
