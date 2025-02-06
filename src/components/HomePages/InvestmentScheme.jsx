// //InvestmenrScheme.jsx

// import Image from "next/image";
// import Link from "next/link";
// import { useState, useRef } from "react";
// import { CiPlay1, CiPause1 } from "react-icons/ci";
// import { FiMinus } from "react-icons/fi";
// import { GoPlus } from "react-icons/go";
// export default function InvestmentScheme() {
//   const [isPlaying, setIsPlaying] = useState(false);
//   const videoRef = useRef(null);
//   const [expandedIndex, setExpandedIndex] = useState(null);

//   const schemeData = [
//     {
//       title: "101,000 AED TO 250,000 AED",
//       contents: [
//         {
//           subHeading: "BEGINNER",
//           subContent:
//             "For those just starting their investment journey, our Beginner Plan offers a low-risk, high-return opportunity to grow your wealth with a minimum investment of 10,000 AED.",
//           image:
//             "https://navi.com/blog/wp-content/uploads/2022/06/best-investment-plan.jpg",
//         },
//         {
//           subHeading: "STANDARD",
//           subContent:
//             "For those just starting their investment journey, our Beginner Plan offers a low-risk, high-return opportunity to grow your wealth with a minimum investment of 10,000 AED.",
//           image:
//             "https://navi.com/blog/wp-content/uploads/2022/06/best-investment-plan.jpg",
//         },
//         {
//           subHeading: "ADVANCED",
//           subContent:
//             "For advanced investors looking for higher returns with moderate risk, our Advanced Plan offers a broader range of investment opportunities.",
//           image:
//             "https://navi.com/blog/wp-content/uploads/2022/06/best-investment-plan.jpg",
//         },
//       ],
//     },
//     {
//       title: "251,000 AED TO 500,000 AED",
//       contents: [
//         {
//           subHeading: "BEGINNER",
//           subContent:
//             "For those just starting their investment journey, our Beginner Plan offers a low-risk, high-return opportunity to grow your wealth with a minimum investment of 10,000 AED.",
//           image:
//             "https://navi.com/blog/wp-content/uploads/2022/06/best-investment-plan.jpg",
//         },
//         {
//           subHeading: "STANDARD",
//           subContent:
//             "For those just starting their investment journey, our Beginner Plan offers a low-risk, high-return opportunity to grow your wealth with a minimum investment of 10,000 AED.",
//           image:
//             "https://navi.com/blog/wp-content/uploads/2022/06/best-investment-plan.jpg",
//         },
//         {
//           subHeading: "ADVANCED",
//           subContent:
//             "For advanced investors looking for higher returns with moderate risk, our Advanced Plan offers a broader range of investment opportunities.",
//           image:
//             "https://navi.com/blog/wp-content/uploads/2022/06/best-investment-plan.jpg",
//         },
//       ],
//     },
//     {
//       title: "551,000 AED TO 1,000,000 AED",
//       contents: [
//         {
//           subHeading: "BEGINNER",
//           subContent:
//             "For those just starting their investment journey, our Beginner Plan offers a low-risk, high-return opportunity to grow your wealth with a minimum investment of 10,000 AED.",
//           image:
//             "https://navi.com/blog/wp-content/uploads/2022/06/best-investment-plan.jpg",
//         },
//         {
//           subHeading: "STANDARD",
//           subContent:
//             "For those just starting their investment journey, our Beginner Plan offers a low-risk, high-return opportunity to grow your wealth with a minimum investment of 10,000 AED.",
//           image:
//             "https://navi.com/blog/wp-content/uploads/2022/06/best-investment-plan.jpg",
//         },
//         {
//           subHeading: "ADVANCED",
//           subContent:
//             "For advanced investors looking for higher returns with moderate risk, our Advanced Plan offers a broader range of investment opportunities.",
//           image:
//             "https://navi.com/blog/wp-content/uploads/2022/06/best-investment-plan.jpg",
//         },
//       ],
//     },
//   ];

//   const toggleSection = (index) => {
//     if (expandedIndex === index) {
//       setExpandedIndex(null); // Collapse if it's already expanded
//     } else {
//       setExpandedIndex(index); // Expand the section
//     }
//   };

//   // Toggle play/pause
//   const togglePlayPause = () => {
//     if (isPlaying) {
//       videoRef.current.pause();
//     } else {
//       videoRef.current.play();
//     }
//     setIsPlaying(!isPlaying);
//   };
//   return (
//     <div className="lg:px-20 md:px-10 px-8 lg:py-20 md:py-14 py-10">
//       {/* <div className="flex justify-between items-center pb-10">
//         <h1 className="lg:text-4xl md:text-3xl sm:text-3xl xs:text-2xl font-extralightFont ">
//           Investment Scheme:
//         </h1>
//         <div>
//           <Link href={"/"}>
//             <button className="border font-capsMedium border-[#0F2041] md:text-base sm:text-sm xs:text-xs rounded-3xl uppercase md:px-7 sm:px-4 xs:px-2 py-1">
//               know more
//             </button>
//           </Link>
//         </div>
//       </div>
//       <div>
//         {schemeData.map((item, index) => (
//           <div
//             className={` ${
//               index === 0 && "border-t-2"
//             } border-b-2 border-[#CEAB7A] ${
//               expandedIndex === index ? "pt-3" : "py-3"
//             }`}
//             key={index}
//           >
//             <div
//               className="flex w-full justify-between cursor-pointer"
//               onClick={() => toggleSection(index)}
//               aria-expanded={expandedIndex === index}
//             >
//               <h1
//                 className={`uppercase xl:text-4xl md:text-3xl text-2xl font-ppneuemontrealThin text-[#0E2141] w-fit  `}
//               >
//                 {item.title}
//               </h1>
//               <div className=" w-fit ">
//                 {expandedIndex === index ? (
//                   <FiMinus className="lg:text-5xl md:text-4xl text-3xl" />
//                 ) : (
//                   <GoPlus className="lg:text-5xl md:text-4xl text-3xl" />
//                 )}
//               </div>
//             </div>
//             {expandedIndex === index && (
//               <>
//                 <div className="overflow-x-auto py-6 xl:pe-28">
//                   <div className="flex md:gap-16 gap-8 ">
//                     {item.contents.map((content, ind) => (
//                       <div
//                         key={ind}
//                         className="space-y-5 flex flex-col justify-between md:min-w-[350px] min-w-[250px]" // min width to avoid shrinking of items
//                       >
//                         <div className="space-y-5">
//                           <h1 className="uppercase xl:text-4xl md:text-3xl text-2xl font-capsMedium">
//                             {content.subHeading}
//                           </h1>
//                           <p className="font-normal text-[#898989] lg:text-base md:text-sm sm:text-sm xs:text-xs">
//                             {content.subContent}
//                           </p>
//                         </div>
//                         <Image

//                           src={content.image}
//                           alt={content.subHeading}
//                           className="lg:h-[250px] h-[200px] object-cover"
//                           width={250}
//                           height={200}
//                           loading="lazy"
//                         />
//                       </div>
//                     ))}
//                   </div>
//                 </div>

//                 <div className="w-full flex justify-end pb-6">
//                   <Link href={"/"}>
//                     <button className="border font-capsMedium border-[#0F2041] md:text-base sm:text-sm xs:text-xs rounded-3xl uppercase md:px-7 sm:px-4 xs:px-2 py-1">
//                       know more
//                     </button>
//                   </Link>
//                 </div>
//               </>
//             )}
//           </div>
//         ))}
//       </div> */}

//       <div className="relative h-screen  w-full  flex justify-center items-center lg:mt-16 md:mt-12 mt-10">
//         <video
//           ref={videoRef}
//           className="max-h-[500px] w-full object-cover"
//           src="/assets/waves.mp4" // Referring to the public folder
//           type="video/mp4"
//           onPause={() => setIsPlaying(false)}
//           onPlay={() => setIsPlaying(true)}
//         ></video>

//         {/* Play/Pause Button */}
//         <div
//           onClick={togglePlayPause}
//           className="absolute flex justify-center items-center text-black lg:text-8xl md:text-7xl text-6xl "
//         >
//           {isPlaying ? (
//             <CiPause1 className="cursor-pointer " />
//           ) : (
//             <CiPlay1 className="cursor-pointer" />
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

import Link from "next/link";
import { useState, useRef } from "react";
import { CiPlay1, CiPause1 } from "react-icons/ci";
import Image from "next/image";
import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";

export default function InvestmentScheme() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);
  const [openIndex, setOpenIndex] = useState(0);

  const investmentSectors = [
    { title: "International Trading" },
    { title: "Import & Export" },
    { title: "Shipping & Logistics" },
    { title: "Retail" },
    { title: "Real Estate" },
    { title: "Technology" },
    { title: "Education" },
    { title: "Travel & Tourism" },
  ];

  const sections = [
    {
      title: "DIVERSIFIED INVESTMENT PORTFOLIO",
      content:
        "Benefit from exposure to multiple high-growth sectors through our diverse portfolio of subsidiaries.",
    },
    {
      title: "LONG-TERM VALUE CREATION",
      content:
        "We focus on sustainable investments that yield long-term value for stakeholders.",
    },
    {
      title: "STRONG FINANCIAL PERFORMANCE",
      content:
        "Our strategic investments drive consistent financial growth and performance.",
    },
    {
      title: "EXCEPTIONAL INVESTOR RELATIONS",
      content:
        "We prioritize transparency and engagement to build strong investor confidence.",
    },
    {
      title: "EXPERT MANAGEMENT TEAM",
      content:
        "Our experienced leadership ensures innovative and strategic business decisions.",
    },
    {
      title: "SOCIAL IMPACT",
      content:
        "We invest responsibly, ensuring our projects positively impact communities.",
    },
  ];

  const toggleSection = (index) => {
    setOpenIndex(openIndex === index ? 0 : index);
  };

  // Toggle play/pause
  const togglePlayPause = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div>
      {/* Video Section */}
      <div className="relative w-full flex justify-center items-center md:h-screen md:min-h-[700px] min-h-fit md:tall:h-[700px] lg:py-20 md:py-14 py-10 lg:px-20 md:px-10 px-8">
        <video
          ref={videoRef}
          className="max-h-[550px] w-full object-cover"
          src="/assets/waves.mp4" // Place the video in the public/assets folder
          type="video/mp4"
          poster="https://media.licdn.com/dms/image/D5612AQHXVQgJxv3jaA/article-cover_image-shrink_720_1280/0/1703118066397?e=2147483647&v=beta&t=V_Ktz6-g1Sk49Z0jNPvRGwA3VywAh_ntS8RVO4wPyIk"
          onPause={() => setIsPlaying(false)}
          onPlay={() => setIsPlaying(true)}
        ></video>

        {/* Play/Pause Button */}
        <div
          onClick={togglePlayPause}
          className="absolute flex justify-center items-center text-white lg:text-8xl md:text-7xl text-6xl"
        >
          {isPlaying ? (
            <CiPause1 className="cursor-pointer" />
          ) : (
            <CiPlay1 className="cursor-pointer" />
          )}
        </div>
      </div>

      {/* Investment Sectors Section */}
      <div className="bg-[#F7F7F7] lg:px-20 md:px-10 px-8 lg:py-20 md:py-14 py-10 md:h-screen md:min-h-[800px] min-h-fit md:tall:h-[800px] flex items-center">
        <div>
          <div className="flex justify-between items-center w-full gap-1 mb-10">
            <h1 className="font-ppneuemontrealThin lg:text-4xl md:text-3xl sm:text-xl xs:text-lg uppercase">
              Investment Sectors
            </h1>
            <Link href="/">
              <button className="border font-capsMedium border-[#0F2041] md:text-base sm:text-sm xs:text-xs rounded-3xl uppercase md:px-7 sm:px-4 xs:px-2 py-1">
                know more
              </button>
            </Link>
          </div>
          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 xl:gap-8 gap-5">
            {investmentSectors.map((sector, index) => (
              <div
                key={index}
                className="bg-white hover:scale-105 hover:shadow-2xl xl:p-8 md:p-5 p-2 text-center  flex items-center"
              >
                <div>
                  <div className="flex justify-center mb-4">
                    <Image
                      src="/assets/invest-icon.png" // Place the image in the public/assets folder
                      alt="sector icon"
                      width={80}
                      height={80} 
                      className="h-20 w-20"
                    />
                  </div>
                  <h3 className="lg:text-lg md:text-base text-sm font-semibold text-[#0E2141]">
                    {sector.title}
                  </h3>
                  <p className="text-black text-xs md:text-sm mt-2">
                    Inter is a variable font family carefully crafted & designed
                    for computer
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Investment Benefits Section */}
      <div className="relative w-full h-full lg:py-20 md:py-14 py-10 lg:px-20 md:px-10 px-8">
        <div className="flex justify-between items-center w-full gap-1 mb-10">
          <h1 className="font-ppneuemontrealThin lg:text-4xl md:text-3xl sm:text-xl xs:text-lg">
            INVESTMENT BENEFITS
          </h1>
          <Link href="/">
            <button className="border font-capsMedium border-[#0F2041] md:text-base sm:text-sm xs:text-xs rounded-3xl uppercase md:px-7 sm:px-4 xs:px-2 py-1">
              know more
            </button>
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:gap-10 gap-5">
          <div className="flex flex-col justify-between gap-20">
            <div className="bg-[#D4BD9B] h-[400px] flex items-center justify-center rounded-[40px]">
              <Image
                src="/assets/invest-2.png" 
                alt="investment icon"
                width={100} style={{width:"auto" , height:"auto"}}
                height={100}
                className="h-[100px] w-[100px]"
              />
            </div>
            <div className="space-y-5">
              <h1 className="lg:text-5xl md:text-4xl sm:text-2xl xs:text-xl uppercase font-capsNormal text-[#0E2141]">
                BRIDGING A BETTER TOMORROW
              </h1>
              <p className="sm:text-sm xs:text-xs md:text-sm lg:text-base text-[#898989] xl:pe-20 pe-5">
                Investing in AL QUBA means partnering with a proven leader in
                Dubai’s dynamic business landscape. Our commitment to
                excellence, coupled with a strong track record, sets us apart as
                a premier investment destination.
              </p>
            </div>
          </div>
          <div className="flex justify-end">
            <div className="xl:w-[550px] lg:w-[450px] md:w-[400px] w-full">
              {sections.map((section, index) => (
                <div
                  key={index}
                  className={`${
                    index === 0 ? "border-y " : "border-b"
                  } py-7 cursor-pointer w-full border-[#707070]`}
                  onClick={() => toggleSection(index)}
                >
                  <div className="flex justify-between items-start w-full">
                    <div>
                      <h3
                        className={`transition-all duration-300 text-[#0E2141] ${
                          openIndex === index
                            ? "lg:text-5xl md:text-4xl sm:text-2xl xs:text-xl pe-5"
                            : "sm:text-sm xs:text-xs md:text-sm lg:text-base font-capsMedium"
                        }`}
                      >
                        {openIndex === index
                          ? (() => {
                              const words = section.title.split(" ");
                              return (
                                <>
                                  <span className="font-capsMedium">
                                    {words[0]}
                                  </span>{" "}
                                  <br />
                                  <span className="font-ppneuemontrealThin">
                                    {words.slice(1).join(" ")}
                                  </span>
                                </>
                              );
                            })()
                          : section.title}
                      </h3>
                      {openIndex === index && (
                        <p className="mt-2 text-[#898989]">{section.content}</p>
                      )}
                    </div>

                    {openIndex === index ? (
                      <FiMinus className="text-[#898989] text-2xl" />
                    ) : (
                      <GoPlus className="text-[#898989] text-2xl" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
