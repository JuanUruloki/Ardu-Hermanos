import { useState, useEffect } from "react";

interface RotatingTextItem {
  title: string;
  paragraph: string;
}

const rotatingTexts: RotatingTextItem[] = [
  {
    title: "PLANTAS POTABILIZADORAS",
    paragraph: "Ofrecemos una gama completa de productos químicos para plantas potabilizadoras, garantizando la pureza y seguridad del agua potable para comunidades y municipios."
  },
  {
    title: "Productos Para INDUSTRIAS",
    paragraph: "Nuestro catálogo de productos químicos para industrias incluye compuestos que optimizan procesos productivos y aseguran altos estándares de calidad, mejorando la eficiencia y rentabilidad de tu empresa."
  },
  {
    title: "Mantenimiento de PILETAS",
    paragraph: "Nuestra línea de productos químicos para piletas garantiza agua cristalina y segura, con desinfectantes, reguladores de pH, alguicidas y clarificadores de alta calidad, para mantener tu pileta en óptimas condiciones."
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
