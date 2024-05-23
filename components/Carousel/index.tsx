import Image from "next/image";
import { useEffect, useState } from "react";
import Swipe from "react-easy-swipe";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

/**
 * Carousel component for nextJS and Tailwind.
 * Using external library react-easy-swipe for swipe gestures on mobile devices (optional)
 *
 * @param images - Array of images with src and alt attributes
 * @returns React component
 */
export default function Carousel() {
  const imagesDark = [
    {
      image: "/images/Backgrounds/Plantas_potabilizadoras.gif",
    },
    {
      image: "/images/Backgrounds/Industrias.gif",
    },
    {
      image: "/images/Backgrounds/Piletas.gif",
    },
    {
      image: "/images/Backgrounds/Logo_dark.gif",
    },
  ];
  const imagesLight = [
    {
      image: "/images/Backgrounds/Plantas_potabilizadoras.gif",
    },
    {
      image: "/images/Backgrounds/Industrias.gif",
    },
    {
      image: "/images/Backgrounds/Piletas.gif",
    },
    {
      image: "/images/Backgrounds/Logo_light.gif",
    },
  ];
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    let newSlide =
      currentSlide === imagesDark.length - 1 ? 0 : currentSlide + 1;
    setCurrentSlide(newSlide);
  };

  const handlePrevSlide = () => {
    let newSlide =
      currentSlide === 0 ? imagesDark.length - 1 : currentSlide - 1;
    setCurrentSlide(newSlide);
  };

  useEffect(() => {
    const interval = setInterval(handleNextSlide, 9000);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSlide]);

  const preloadImage = (index: number) => {
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

  return (
    <div className="relative mb-28 h-full w-full">
      {/* <AiOutlineLeft
        onClick={handlePrevSlide}
        className="absolute inset-y-1/2 left-0 z-20 m-auto cursor-pointer text-5xl text-gray-400"
      /> */}
      <div className="relative hidden h-full w-full overflow-hidden dark:block">
        <Swipe
          onSwipeLeft={handleNextSlide}
          onSwipeRight={handlePrevSlide}
          className="relative z-10 h-full w-full"
        >
          {imagesDark.map((image, index) => {
            if (index === currentSlide) {
              return (
                <div key={index} className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}>
                <Image
                  alt={"image"}
                  src={image.image}
                  layout="fill"
                  objectFit="cover"
                  className="animate-fadeIn"
                  priority={index === currentSlide}
                  loading={index === currentSlide ? "eager" : "lazy"}
                />
              </div>
              );
            }
          })}
        </Swipe>
      </div>
      <div className="relative h-full w-full overflow-hidden dark:hidden">
        <Swipe
          onSwipeLeft={handleNextSlide}
          onSwipeRight={handlePrevSlide}
          className="relative z-10 h-full w-full"
        >
          {imagesLight.map((image, index) => {
            if (index === currentSlide) {
              return (
                <div key={index} className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}>
                <Image
                  alt={"image"}
                  src={image.image}
                  layout="fill"
                  objectFit="cover"
                  className="animate-fadeIn"
                  priority={index === currentSlide}
                  loading={index === currentSlide ? "eager" : "lazy"}
                />
              </div>
              );
            }
          })}
        </Swipe>
      </div>
      {/* <AiOutlineRight
        onClick={handleNextSlide}
        className="absolute inset-y-1/2 right-0 z-20 m-auto cursor-pointer text-5xl text-gray-400"
      /> */}

      {/* <div className="relative flex justify-center pb-10">
        {imagesDark.map((_, index) => {
          return (
            <div
              className={
                index === currentSlide
                  ? "mx-1 mb-2 h-2 w-2 cursor-pointer rounded-full bg-blue-800"
                  : "mx-1 mb-2 h-2 w-2 cursor-pointer rounded-full bg-gray-300"
              }
              key={index}
              onClick={() => {
                setCurrentSlide(index);
              }}
            />
          );
        })}
      </div> */}
    </div>
  );
}
