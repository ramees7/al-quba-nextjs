// import { useEffect, useState } from "react";

// export default function GrowAndCarousel() {
//   const carouselData = [
//     {
//       heading: "Dream Big With Us!",
//       content:
//         "Command your financial destiny with AL QUBA. As Dubai’s foremost investment powerhouse, we promise abundant opportunities to build a life of premium success. Our stellar track record and diverse portfolio are your gateways to unmatched prosperity.",
//       count: "241",
//     },
//     {
//       heading: "Your Success is Our Priority",
//       content:
//         "Partner with AL QUBA and unlock a world of financial opportunities. With expertise in diverse investment domains, we ensure your journey is rewarding and risk-free. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil doloremque numquam pariatur nobis libero sit impedit commodi similique voluptates, neque, suscipit ratione perspiciatis consequuntur iste beatae! Porro molestiae consequatur perspiciatis!",
//       count: "200",
//     },
//     {
//       heading: "Build a Legacy",
//       content:
//         "Partner with AL QUBA and unlock a world of financial opportunities. With expertise in diverse investment domains, we ensure your journey is rewarding and risk-free. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil doloremque numquam pariatur nobis libero sit impedit commodi similique voluptates, neque, suscipit ratione perspiciatis consequuntur iste beatae! Porro molestiae consequatur perspiciatis!",
//       count: "500",
//     },
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) =>
//         prevIndex === carouselData.length - 1 ? 0 : prevIndex + 1
//       );
//     }, 5000);

//     return () => clearInterval(interval); // Cleanup interval on component unmount
//   }, [carouselData.length]);

//   // Handle dot click
//   const handleDotClick = (index) => {
//     setCurrentIndex(index);
//   };

//   return (
//     <>
//       <div className="relative grid md:grid-cols-7 lg:gap-16 md:gap-6 gap-12 px-8 md:px-0 lg:py-20 py-10 h-screen md:min-h-[600px] min-h-fit tall:h-[700px]">
//         {/* Left Column */}
//         <div className="md:col-span-4 h-full flex items-center md:order-1 order-2">
//           <div className="h-full items-center flex md:justify-normal justify-center w-full">
//             <div className="flex text-[#CEAB7A]">
//               <h3 className="lg:text-3xl md:text-xl sm:text-xl xs:text-lg font-capsMedium xl:ps-[100px] md:ps-10">
//                 AED
//               </h3>
//               <div className="xl:relative -xl:left-[160px] ">
//                 <div className="flex items-end border-b-2 lg:pb-8 pb-4">
//                   <h1 className="xl:text-[280px] lg:text-[200px] md:text-[130px] sm:text-[150px] xs:text-[140px]  font-capsNormal  xl:leading-[215px] lg:leading-[156px] md:leading-[105px] sm:leading-[120px] xs:leading-[113px]">
//                     {carouselData[currentIndex].count}
//                   </h1>
//                   <h3 className=" lg:text-3xl md:text-xl sm:text-xl xs:text-lg font-capsMedium">
//                     MILLON
//                   </h3>
//                 </div>
//                 <h3 className="lg:text-3xl md:text-xl sm:text-xl xs:text-lg text-black font-extralightFont lg:pt-8 pt-4">
//                   Company Total Valuation
//                 </h3>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Right Column */}
//         <div className="relative md:col-span-3 h-full flex items-center md:order-2 order-1">
//           <div className="md:absolute lg:right-20 md:right-14 xl:w-[550px] lg:w-[450px] md:w-[400px] w-full h-full flex flex-col md:items-start items-center justify-center">
//             <div className="max-w-[350px] md:min-h-[400px] min-h-[300px] flex flex-col justify-start ">
//               <h1 className="lg:text-4xl md:text-3xl sm:text-3xl xs:text-2xl font-medium mb-5">
//                 {carouselData[currentIndex].heading}
//               </h1>
//               <p className="font-normal text-[#898989] xs:text-xs sm:text-sm md:text-sm lg:text-base">
//                 {carouselData[currentIndex].content}
//               </p>
//             </div>
//             <div className="flex md:justify-normal justify-center w-full items-center gap-5 mt-5">
//               {/* Current Index */}
//               <div className="flex items-center gap-2">
//                 <span className="text-black font-normalFont w-5">
//                   {currentIndex + 1 < 10
//                     ? `0${currentIndex + 1}`
//                     : currentIndex + 1}
//                 </span>
//                 <div className="w-20 border-t-2 border-[#898989]"></div>
//               </div>

//               {/* Dots */}
//               <div className="flex items-center gap-2">
//                 {carouselData.map((_, index) => (
//                   <button
//                     key={index}
//                     className="w-2 h-2 rounded-full bg-black"
//                     onClick={() => handleDotClick(index)}
//                   />
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="grid grid-cols-7 lg:gap-16 gap-6 px-8 md:px-0 lg:py-20 py-10 h-screen md:min-h-[600px] min-h-fit tall:h-[700px]">
//         {/* Left Column */}
//         <div className="relative md:col-span-4 col-span-3 h-full flex items-center justify-center lg:me-4 xl:me-0">
//           <div className="relative flex items-center justify-center">
//             <video
//               autoPlay
//               loop
//               muted
//               className="md:w-[250px] w-[150px] h-[200px] lg:w-[400px] md:h-[300px] lg:h-[500px] object-cover"
//               style={{
//                 WebkitMaskImage: `url(/assets/logo-only.png)`,
//                 WebkitMaskRepeat: "no-repeat",
//                 WebkitMaskPosition: "center",
//                 WebkitMaskSize: "contain",
//                 maskImage: `url(/assets/logo-only.png)`,
//                 maskRepeat: "no-repeat",
//                 maskPosition: "center",
//                 maskSize: "contain",
//               }}
//             >
//               <source src="/assets/dubai-eve.mp4" type="video/mp4" />
//               Your browser does not support the video tag.
//             </video>
//           </div>
//         </div>

//         {/* Right Column */}
//         <div className="relative md:col-span-3 col-span-4 h-full flex items-center">
//           <div className="md:absolute lg:right-20 md:right-14 xl:w-[550px] lg:w-[450px] md:w-[400px] w-full h-full flex md:justify-normal justify-center items-center">
//             <div className="flex flex-col justify-center ">
//               <h1 className="uppercase lg:text-7xl md:text-6xl sm:text-4xl xs:text-3xl font-capsMedium pb-6 text-[#0E2141]">
//                 <span className="font-capsNormal">
//                   GROW YOUR <br /> WEALTH WITH
//                 </span>{" "}
//                 AL QUBA
//               </h1>
//               <p className="font-mediumFont  text-[#0F2041] lg:text-base md:text-sm sm:text-sm xs:text-xs pb-5">
//                 Trusted Solutions for Financial Growth
//               </p>
//               <p className="font-normal text-[#898989] lg:text-base md:text-sm sm:text-sm xs:text-xs ">
//                 Unlock the path to financial growth and prosperity with our
//                 comprehensive investment scheme. Designed to maximize your
//                 returns, this program offers tailored plans to suit a wide range
//                 of investment goals and risk profiles.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

import { useEffect, useState } from "react";

export default function GrowAndCarousel() {
  const carouselData = [
    {
      heading: "Dream Big With Us!",
      subHeading: "Active Portfolios",
      content:
        "Command your financial destiny with AL QUBA. As Dubai’s foremost investment powerhouse, we promise abundant opportunities to build a life of premium success. Our stellar track record and diverse portfolio are your gateways to unmatched prosperity.",
      count: "08",
    },
    {
      heading: "Your Success is Our Priority",
      subHeading: "Secure Investments",
      content:
        "With AL QUBA, success isn’t a dream—it’s a guarantee. Our expert-led strategies and dynamic portfolio options provide secure and high-yield investment opportunities, ensuring your financial growth remains steady and sustainable.",
      count: "99",
    },
    {
      heading: "Build a Legacy",
      subHeading: "Brighter Tomorrow",
      content:
        "Your financial future starts today with AL QUBA. Secure your legacy with smart investments that stand the test of time. Join us in shaping a prosperous tomorrow, driven by excellence and unwavering commitment.",
      count: "99",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === carouselData.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [currentIndex, carouselData.length]);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <>
      {/* Carousel Section */}
      <div className="relative lg:pe-20 md:pe-10 px-8 xl:ps-[160px] md:ps-[60px] flex flex-col justify-between bg-[#F7F7F7] lg:py-20 py-10 md:h-screen md:min-h-[600px] min-h-fit md:tall:h-[700px]">
        <div className="grid md:grid-cols-5 lg:gap-16 md:gap-6 gap-12">
          {/* Left Column */}
          <div className="md:col-span-2 flex items-center w-full">
            <div className="flex flex-col justify-start">
              <h1 className="lg:text-4xl md:text-3xl sm:text-3xl xs:text-2xl font-medium mb-5">
                {carouselData[currentIndex].heading}
              </h1>
              <p className="font-normal text-[#898989] xs:text-xs sm:text-sm md:text-sm lg:text-base">
                {carouselData[currentIndex].content}
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="md:col-span-3 flex items-center md:justify-end justify-center">
            <div className="text-[#CEAB7A]">
              <h1 className="xl:text-[380px] lg:text-[300px] md:text-[250px] sm:text-[230px] xs:text-[180px] font-capsMedium leading-[100%]">
                {carouselData[currentIndex].count}+
              </h1>
            </div>
          </div>
        </div>

        {/* Footer Section */}
        <div className="h-fit">
          <div className="border-y border-[#898989] py-5 lg:text-5xl md:text-4xl sm:text-2xl xs:text-xl grid grid-cols-2 items-center font-extralightFont">
            <h2>
              {currentIndex + 1 < 10
                ? `0${currentIndex + 1}`
                : currentIndex + 1}
            </h2>
            <h2>{carouselData[currentIndex].subHeading}</h2>
          </div>

          <div className="flex items-end justify-between h-fit mt-10">
            <div className="flex md:justify-normal justify-center items-center gap-5 h-full">
              <div className="w-20 border-t-2 border-[#898989]"></div>
              <div className="flex items-center gap-2">
                {carouselData.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full ${
                      index === currentIndex ? "bg-black" : "bg-gray-400"
                    }`}
                    onClick={() => handleDotClick(index)}
                  />
                ))}
              </div>
            </div>
            <button className="w-fit border font-capsMedium border-[#0F2041] md:text-base sm:text-sm xs:text-xs rounded-3xl uppercase lg:px-7 md:px-4 sm:px-4 xs:px-2 py-1">
              know more
            </button>
          </div>
        </div>
      </div>

      {/* Video and Text Section */}
      <div className="grid grid-cols-7 lg:gap-16 gap-6 px-8 md:px-0 lg:py-20 py-10 md:h-screen md:min-h-[700px] min-h-fit md:tall:h-[700px]">
        {/* Left Column (Video) */}
        <div className="relative md:col-span-4 col-span-3 h-full flex items-center justify-center lg:me-4 xl:me-0">
          <div className="relative flex items-center justify-center">
            <video
              autoPlay
              loop
              muted
              className="md:w-[250px] w-[150px] h-[200px] lg:w-[400px] md:h-[300px] lg:h-[500px] object-cover"
              style={{
                WebkitMaskImage: `url(/assets/logo-only.png)`,
                WebkitMaskRepeat: "no-repeat",
                WebkitMaskPosition: "center",
                WebkitMaskSize: "contain",
                maskImage: `url(/assets/logo-only.png)`,
                maskRepeat: "no-repeat",
                maskPosition: "center",
                maskSize: "contain",
              }}
            >
              <source src="/assets/dubai-eve.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        {/* Right Column (Text) */}
        <div className="relative md:col-span-3 col-span-4 h-full flex items-center">
          <div className="md:absolute lg:right-20 md:right-14 xl:w-[550px] lg:w-[450px] md:w-[400px] w-full h-full flex md:justify-normal justify-center items-center">
            <div className="flex flex-col justify-center">
              <h1 className="uppercase lg:text-7xl md:text-6xl sm:text-4xl xs:text-3xl font-capsMedium pb-6 text-[#0E2141]">
                <span className="font-capsNormal">
                  GROW YOUR <br /> WEALTH WITH <br />
                </span>{" "}
                AL QUBA
              </h1>
              <p className="font-mediumFont text-[#0F2041] lg:text-base md:text-sm sm:text-sm xs:text-xs pb-5">
                Trusted Solutions for Financial Growth
              </p>
              <p className="font-normal text-[#898989] lg:text-base md:text-sm sm:text-sm xs:text-xs">
                Unlock the path to financial growth and prosperity with our
                comprehensive investment scheme. Designed to maximize your
                returns, this program offers tailored plans to suit a wide range
                of investment goals and risk profiles.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
