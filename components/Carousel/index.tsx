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
      image: "/images/Backgrounds/Logo_dark.jpg",
    },
    {
      image: "/images/Backgrounds/Plantas_potabilizadoras.jpg",
    },
    {
      image: "/images/Backgrounds/Industrias.jpg",
    },
    {
      image: "/images/Backgrounds/Piletas.jpg",
    },
  ];
  const imagesLight = [
    {
      image: "/images/Backgrounds/Logo_light.jpg",
    },
    {
      image: "/images/Backgrounds/Plantas_potabilizadoras.jpg",
    },
    {
      image: "/images/Backgrounds/Industrias.jpg",
    },
    {
      image: "/images/Backgrounds/Piletas.jpg",
    },
  ];
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    let newSlide = currentSlide === imagesDark.length - 1 ? 0 : currentSlide + 1;
    setCurrentSlide(newSlide);
  };

  const handlePrevSlide = () => {
    let newSlide = currentSlide === 0 ? imagesDark.length - 1 : currentSlide - 1;
    setCurrentSlide(newSlide);
  };

  useEffect(() => {
    const interval = setInterval(handleNextSlide, 8000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <div className="relative w-full h-full mb-28">
      <AiOutlineLeft
        onClick={handlePrevSlide}
        className="absolute inset-y-1/2 left-0 z-20 m-auto cursor-pointer text-5xl text-gray-400"
      />
      <div className="relative m-auto  h-[60vh] w-full overflow-hidden hidden dark:block">
        <Swipe
          onSwipeLeft={handleNextSlide}
          onSwipeRight={handlePrevSlide}
          className="relative z-10 h-full w-full"
        >
          {imagesDark.map((image, index) => {
            if (index === currentSlide) {
              return (
                <Image
                  alt={"image"}
                  key={index}
                  src={image.image}
                  layout="fill"
                  objectFit="contain"
                  className="animate-fadeIn"
                />
              );
            }
          })}
        </Swipe>
      </div>
      <div className="relative m-auto flex h-[60vh] w-full overflow-hidden dark:hidden">
        <Swipe
          onSwipeLeft={handleNextSlide}
          onSwipeRight={handlePrevSlide}
          className="relative z-10 h-full w-full"
        >
          {imagesLight.map((image, index) => {
            if (index === currentSlide) {
              return (
                <Image
                  alt={"image"}
                  key={index}
                  src={image.image}
                  layout="fill"
                  objectFit="contain"
                  className="animate-fadeIn"
                />
              );
            }
          })}
        </Swipe>
      </div>
      <AiOutlineRight
        onClick={handleNextSlide}
        className="absolute inset-y-1/2 right-0 z-20 m-auto cursor-pointer text-5xl text-gray-400"
      />

      <div className="relative flex justify-center pb-10">
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
      </div>
    </div>
  );
}
