import Image from "next/image";
import { useEffect, useState } from "react";
import Swipe from "react-easy-swipe";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { useMediaQuery } from "react-responsive";

export default function Carousel() {
  const imagesDark = [
    { image: "/images/Backgrounds/Plantas_potabilizadoras.gif" },
    { image: "/images/Backgrounds/Industrias.gif" },
    { image: "/images/Backgrounds/Piletas.gif" },
  ];
  const imagesDarkMD = [
    { image: "/images/Backgrounds/Plantas_potabilizadoras_md.gif" },
    { image: "/images/Backgrounds/Industrias_md.gif" },
    { image: "/images/Backgrounds/Piletas_md.gif" },
  ];
  const imagesDarkSM = [
    { image: "/images/Backgrounds/Plantas_potabilizadoras_sm.gif" },
    { image: "/images/Backgrounds/Industrias_sm.gif" },
    { image: "/images/Backgrounds/Piletas_sm.gif" },
  ];
  const imagesLight = [
    { image: "/images/Backgrounds/Plantas_potabilizadoras_md.gif" },
    { image: "/images/Backgrounds/Industrias.gif" },
    { image: "/images/Backgrounds/Piletas.gif" },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [images, setImages] = useState(imagesDark);

  const handleNextSlide = () => {
    const newSlide = currentSlide === imagesDark.length - 1 ? 0 : currentSlide + 1;
    setCurrentSlide(newSlide);
  };

  const handlePrevSlide = () => {
    const newSlide = currentSlide === 0 ? imagesDark.length - 1 : currentSlide - 1;
    setCurrentSlide(newSlide);
  };

  useEffect(() => {
    const interval = setInterval(handleNextSlide, 9000);
    return () => clearInterval(interval);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSlide]);

  const preloadImage = (index) => {
    const darkImage = new window.Image();
    darkImage.src = imagesDark[index].image;
    const lightImage = new window.Image();
    lightImage.src = imagesLight[index].image;
  };

  useEffect(() => {
    const nextIndex = currentSlide === imagesDark.length - 1 ? 0 : currentSlide + 1;
    const prevIndex = currentSlide === 0 ? imagesDark.length - 1 : currentSlide - 1;
    preloadImage(nextIndex);
    preloadImage(prevIndex);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSlide]);

  const isLargeScreen = useMediaQuery({ query: "(min-width: 1200px)" });
  const isMediumScreen = useMediaQuery({ query: "(min-width: 768px) and (max-width: 1199px)" });
  const isSmallScreen = useMediaQuery({ query: "(max-width: 767px)" });

  useEffect(() => {
    if (isSmallScreen) {
      setImages(imagesDarkSM);
    } else if (isMediumScreen) {
      setImages(imagesDarkMD);
    } else {
      setImages(imagesDark);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSmallScreen, isMediumScreen, isLargeScreen]);

  return (
    <div className="relative mb-28 h-full w-full">
      <AiOutlineLeft
        onClick={handlePrevSlide}
        className="absolute inset-y-1/2 left-0 z-20 m-auto cursor-pointer text-5xl text-gray-400"
      />
      <div className="relative hidden h-full w-full overflow-hidden dark:block">
        <Swipe
          onSwipeLeft={handleNextSlide}
          onSwipeRight={handlePrevSlide}
          className="relative z-10 h-full w-full"
        >
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
              style={{ width: "100%", height: "100%" }}
            >
              
              <Image
                alt="image"
                src={image.image}
                layout="fill"
                objectFit="cover"
                className="animate-fadeIn w-full h-full"
                priority={index === currentSlide}
                loading={index === currentSlide ? "eager" : "lazy"}
              />
            </div>
          ))}
        </Swipe>
      </div>
      <div className="relative h-full w-full overflow-hidden dark:hidden">
        <Swipe
          onSwipeLeft={handleNextSlide}
          onSwipeRight={handlePrevSlide}
          className="relative z-10 h-full w-full"
        >
          {imagesLight.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
              style={{ width: "100%", height: "100%" }}
            >
              <Image
                alt="image"
                src={image.image}
                layout="fill"
                objectFit="cover"
                className="animate-fadeIn w-full h-full"
                priority={index === currentSlide}
                loading={index === currentSlide ? "eager" : "lazy"}
              />
            </div>
          ))}
        </Swipe>
      </div>
      <AiOutlineRight
        onClick={handleNextSlide}
        className="absolute inset-y-1/2 right-0 z-20 m-auto cursor-pointer text-5xl text-gray-400"
      />
    </div>
  );
}
