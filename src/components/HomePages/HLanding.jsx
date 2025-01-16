// app/components/HomePages/HLanding/HLanding.jsx

import { useState, useEffect } from "react";
import Image from "next/image"; // Import next/image for optimized images

export default function BackgroundImageCarousel() {
  const carouselData = [
    {
      id: 1,
      title: "Education",
      image: "/assets/Home-Langing-Bg.png", // Static image from the public directory
    },
    {
      id: 2,
      title: "Healthcare",
      image:
        "https://img.freepik.com/premium-photo/stunning-nighttime-cityscape-dubai-uae_875825-41938.jpg",
    },
    {
      id: 3,
      title: "Technology",
      image:
        "https://img.freepik.com/free-photo/panoramic-views-dubai-city-illuminated-neon-spectrum_23-2151305380.jpg",
    },
  ];

  const sectorCarouselData = [
    {
      id: 1,
      title: "Education",
      image:
        "https://baybee.co.in/cdn/shop/files/02_8d71ce7c-604d-4d4c-b47b-fd5e154ad72d_1400x.jpg?v=1693293402",
    },
    {
      id: 2,
      title: "Healthcare",
      image:
        "https://blog.ipleaders.in/wp-content/uploads/2020/01/Health-Insurance.jpg",
    },
    {
      id: 3,
      title: "Technology",
      image:
        "https://www.skillstork.org/blog/wp-content/uploads/2022/11/modern-education-Skillstork-1568x882.jpg",
    },
    {
      id: 1,
      title: "Education",
      image:
        "https://baybee.co.in/cdn/shop/files/02_8d71ce7c-604d-4d4c-b47b-fd5e154ad72d_1400x.jpg?v=1693293402",
    },
    {
      id: 2,
      title: "Healthcare",
      image:
        "https://blog.ipleaders.in/wp-content/uploads/2020/01/Health-Insurance.jpg",
    },
    {
      id: 3,
      title: "Technology",
      image:
        "https://www.skillstork.org/blog/wp-content/uploads/2022/11/modern-education-Skillstork-1568x882.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentIndexSector, setCurrentIndexSector] = useState(0);

  // Automatically switch slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === carouselData.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [currentIndex]);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  // Automatically switch slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndexSector((prevIndex) =>
        prevIndex === sectorCarouselData.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [currentIndexSector]);

  const handleDotClickSector = (index) => {
    setCurrentIndexSector(index);
  };

  // Handle "Next" button click
  const handleNextClick = () => {
    setCurrentIndexSector((prevIndex) =>
      prevIndex === sectorCarouselData.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-screen h-screen text-white overflow-hidden min-h-[600px]">
      {/* Background Image */}
      <div className="absolute w-full h-full">
        {carouselData.map((slide, index) => (
          <div
            key={slide.id}
            className={`w-full h-full absolute bg-transparent ${
              index === currentIndex
                ? "opacity-100 animate-zoomOut"
                : "opacity-0"
            }`}
          >
            <Image
              src={slide.image}
              alt={`Slide ${slide.id}`}
              layout="fill"
              objectFit="cover"
            />
          </div>
        ))}
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>

      {/* Text Content */}
      <div className="absolute h-full xl:left-[160px] md:left-[60px] left-[40px] flex md:flex-row flex-col md:items-center justify-center xl:gap-20 lg:gap-14 md:gap-5 ">
        <h1
          className="font-capsNormal xl:text-[90px] lg:text-[80px] md:text-[60px] text-[40px] xl:leading-[100px] lg:leading-[85px] md:leading-[80px] leading-[50px] text-white"
          style={{
            letterSpacing: "3.3px",
          }}
        >
          THE PORTAL <br />
          TO PROSPERITY
        </h1>
        <h2 className="xl:pt-[100px]  md:pt-[80px] pt-0 font-extralightFont xl:text-[29px] lg:text-[25px] md:text-[20px]">
          Architecting growth <br />& Harvesting success
        </h2>
      </div>

      <div className="absolute md:bottom-10 bottom-14 lg:right-20 md:right-10 md:w-auto w-full md:px-0 px-8">
        <div className="xl:w-[550px] lg:w-[450px] md:w-[400px] w-full justify-center md:justify-normal flex font-normalFont text-white">
          <div>
            <Image
              src={sectorCarouselData[currentIndexSector].image}
              alt=""
              width={140}
              height={110}
              className="md:w-[140px] w-[100px] md:h-[110px] h-[80px]"
            />
          </div>
          <div
            className="w-full bg-[#00000095] md:pt-4 pt-2 pb-2 px-5 flex flex-col justify-between"
            style={{
              backdropFilter: "blur(5px)",
              WebkitBackdropFilter: "blur(5px)",
            }}
          >
            <div className="flex items-start justify-between w-full xs:text-xs sm:text-sm md:text-base">
              <h3>Sectors</h3>
              <button onClick={handleNextClick}>Next</button>
            </div>
            <h3 className="md:text-2xl sm:text-xl xs:text-lg mb-2">
              {sectorCarouselData[currentIndexSector].title}
            </h3>

            {/* Dynamically show the border divs based on the array length */}
            <div className="flex justify-between w-full gap-5">
              {sectorCarouselData.map((_, index) => (
                <button
                  key={index}
                  className={`w-full border-t-2 cursor-pointer md:min-h-5 ${
                    index === currentIndexSector
                      ? "border-white"
                      : "border-gray-400"
                  }`}
                  style={{
                    zIndex: 10, // Ensure clickability
                  }}
                  onClick={() => handleDotClickSector(index)} // Update carousel on click
                ></button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Left Bottom Current Index with Dots */}
      <div className="absolute md:bottom-10 bottom-5 md:left-10 flex md:justify-normal justify-center w-full items-center gap-5">
        {/* Current Index */}
        <div className="flex items-center gap-2">
          <span className="text-white font-normalFont w-5">
            {currentIndex + 1 < 10 ? `0${currentIndex + 1}` : currentIndex + 1}
          </span>
          <div className="w-20 border-t-2 border-white"></div>
        </div>

        {/* Dots */}
        <div className="flex items-center gap-2">
          {carouselData.map((_, index) => (
            <button
              key={index}
              className="w-2 h-2 rounded-full bg-white"
              onClick={() => handleDotClick(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
