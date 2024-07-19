import { useState, useEffect } from "react";

interface RotatingTextItem {
  title: string;
  paragraph: string;
}

const rotatingTexts: RotatingTextItem[] = [
  {
    title: "Mantenimiento de Piletas",
    paragraph: "Nuestra línea de productos químicos para el cuidado de piletas está diseñada para garantizar agua cristalina y segura en todo momento. Desde desinfectantes de amplio espectro y reguladores de pH hasta algicidas y clarificadores, ofrecemos una variedad de productos de alta calidad que ayudarán a mantener tu pileta en óptimas condiciones, brindando tranquilidad y disfrute a tus momentos de recreación."
  },
  {
    title: "Plantas Potabilizadoras",
    paragraph: "Ofrecemos una gama completa de productos químicos diseñados específicamente para plantas potabilizadoras. Nuestro compromiso es proporcionar soluciones de alta calidad que garanticen la pureza y seguridad del agua potable para comunidades y municipios."
  },
  {
    title: "Productos Para Industrias",
    paragraph: "En nuestro catálogo de productos químicos para industrias, encontrarás una amplia selección de compuestos diseñados para optimizar procesos productivos y garantizar estándares de calidad superiores. Desde agentes de limpieza y desengrasantes hasta inhibidores de corrosión y productos especializados para tratamiento de efluentes, ofrecemos soluciones integrales que ayudarán a mejorar la eficiencia y la rentabilidad de tu empresa."
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
      }, 700); 
    }, 4200); 

    return () => clearInterval(interval);
  }, []);

  const { title, paragraph } = rotatingTexts[index];

  return (
    <div className="relative w-1/2 h-full flex justify-start items-start text-start pl-0">
      <div className="p-4 bg-transparent">
        <div className={`transition-opacity duration-700 ${fadeClass}`}>
          <h2 className="text-4xl font-titles pb-8">{title}</h2>
          <p className="text-xl font-body">{paragraph}</p>
        </div>
      </div>
    </div>
  );
};

export default RotatingText;
