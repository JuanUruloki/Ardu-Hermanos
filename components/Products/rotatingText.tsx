import React, { useState, useEffect } from "react";

const RotatingText: React.FC = () => {
  const texts: string[] = ["Nuestra línea de productos químicos para el cuidado de PILETAS está diseñada para garantizar agua cristalina y segura en todo momento. Desde desinfectantes de amplio espectro y reguladores de pH hasta algicidas y clarificadores, ofrecemos una variedad de productos de alta calidad que ayudarán a mantener tu pileta en óptimas condiciones, brindando tranquilidad y disfrute a tus momentos de recreación.", "Ofrecemos una gama completa de productos químicos diseñados específicamente para PLANTAS POTABILIZADORAS. Nuestro compromiso es proporcionar soluciones de alta calidad que garanticen la pureza y seguridad del agua potable para comunidades y municipios.", "En nuestro catálogo de productos químicos para INDUSTRIAS, encontrarás una amplia selección de compuestos diseñados para optimizar procesos productivos y garantizar estándares de calidad superiores. Desde agentes de limpieza y desengrasantes hasta inhibidores de corrosión y productos especializados para tratamiento de efluentes, ofrecemos soluciones integrales que ayudarán a mejorar la eficiencia y la rentabilidad de tu empresa."];
  const [currentTextIndex, setCurrentTextIndex] = useState<number>(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 4000);

    return () => clearInterval(intervalId);
  }, [texts.length]);

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-4xl font-body">{texts[currentTextIndex]}</div>
    </div>
  );
};

export default RotatingText;