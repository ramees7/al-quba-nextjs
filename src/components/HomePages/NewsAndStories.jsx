// // components/NewsAndStories.jsx

// import { useState, useEffect } from "react";
// import { GoArrowLeft, GoArrowRight } from "react-icons/go";
// import Link from "next/link";
// import Image from "next/image";

// export default function NewsAndStories() {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isSmallScreen, setIsSmallScreen] = useState(false);

//   const NewsAndStoriesLists = [
//     {
//       image:
//         "https://www.webnode.com/blog/wp-content/uploads/2016/10/Blog-intro.jpg",
//       heading: "Al Quba, Dubai’s Pinnacle Investment Partner.",
//       content:
//         "Command your financial destiny with AL QUBA. As Dubai’s foremost investment powerhouse.",
//       link: "/",
//     },
//     {
//       image:
//         "https://img.freepik.com/free-photo/online-message-blog-chat-communication-envelop-graphic-icon-concept_53876-139717.jpg",
//       heading: "Al Quba, Dubai’s Pinnacle Investment Partner.",
//       content:
//         "Command your financial destiny with AL QUBA. As Dubai’s foremost investment powerhouse.",
//       link: "/",
//     },
//     {
//       image:
//         "https://miro.medium.com/v2/resize:fit:1024/1*yBt65HhmARbqZDDJ1McFDg.png",
//       heading: "Al Quba, Dubai’s Pinnacle Investment Partner.",
//       content:
//         "Command your financial destiny with AL QUBA. As Dubai’s foremost investment powerhouse.",
//       link: "/",
//     },
//     {
//       image:
//         "https://mailrelay.com/wp-content/uploads/2018/03/que-es-un-blog-1.png",
//       heading: "Al Quba, Dubai’s Pinnacle Investment Partner.",
//       content:
//         "Command your financial destiny with AL QUBA. As Dubai’s foremost investment powerhouse.",
//       link: "/",
//     },
//   ];

//   useEffect(() => {
//     const handleResize = () => {
//       setIsSmallScreen(window.innerWidth < 768); // 768px is the md breakpoint in Tailwind
//     };

//     handleResize(); // Check on component mount
//     window.addEventListener("resize", handleResize); // Update on window resize

//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   // Determine how many items to show
//   const itemsToShow = isSmallScreen ? 1 : 2;

//   // Cycle through items every 5 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) =>
//         prevIndex === NewsAndStoriesLists.length - 1 ? 0 : prevIndex + 1
//       );
//     }, 5000);

//     return () => clearInterval(interval); // Cleanup on unmount
//   }, [NewsAndStoriesLists.length, currentIndex]);

//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? NewsAndStoriesLists.length - 1 : prevIndex - 1
//     );
//   };

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === NewsAndStoriesLists.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   return (
//     <div className="lg:py-16 md:py-10 py-8 md:min-h-[600px]  tall:h-full">
//       <div>
//         <h1 className="uppercase lg:text-5xl md:text-4xl sm:text-3xl xs:text-lg font-capsNormal pb-16 lg:px-20 md:px-10 px-8">
//           LATEST NEWS & STORIES
//         </h1>
//         <div className="grid grid-cols-2  lg:gap-16 md:gap-6 gap-5 h-full">
//           <div className="col-span-1 h-full flex flex-col justify-between lg:pe-10 xl:ps-[160px] md:ps-[60px] ps-8">
//             <div>
//               <h1 className="lg:text-4xl md:text-3xl sm:text-2xl xs:text-lg font-extralightFont mb-2">
//                 Our Latest Blogs
//               </h1>
//               <h2 className="text-[#CEAB7A] font-mediumFont lg:text-4xl md:text-3xl sm:text-2xl xs:text-lg mb-4">
//                 {NewsAndStoriesLists[currentIndex].heading}
//               </h2>
//               <p className="text-[#898989] sm:text-sm xs:text-xs md:text-base font-normalFont ">
//                 {NewsAndStoriesLists[currentIndex].content}
//               </p>
//             </div>
//             <div className="flex md:flex-row flex-col md:justify-between gap-5 md:items-center">
//               <Link href={"/"}>
//                 <button className="border font-capsMedium border-[#0F2041] md:text-base sm:text-sm xs:text-xs rounded-3xl uppercase lg:px-7 md:px-4 sm:px-4 xs:px-2 py-1">
//                   view all
//                 </button>
//               </Link>
//               <div className="flex gap-3">
//                 <button onClick={handlePrev}>
//                   <GoArrowLeft className="rounded-full bg-[#CEAB7A] p-2 text-5xl cursor-pointer" />
//                 </button>
//                 <button onClick={handleNext}>
//                   <GoArrowRight className="rounded-full bg-[#CEAB7A] p-2 text-5xl cursor-pointer" />
//                 </button>
//               </div>
//             </div>
//           </div>

//           <div className="col-span-1 w-full grid grid-cols-1 md:grid-cols-2 lg:pe-20 md:pe-10 pe-8 xl:gap-10 gap-5">
//             {[...Array(itemsToShow)].map((_, offset) => {
//               const index =
//                 (currentIndex + offset) % NewsAndStoriesLists.length;
//               const item = NewsAndStoriesLists[index];
//               return (
//                 <div className="col-span-1" key={index}>
//                   <div className="space-y-4">
//                     <Image
//                       src={item.image}
//                       alt="News and Story"
//                       loading="lazy"
//                       className="w-full h-[250px] object-cover"
//                       width={500} // Set a fixed width
//                       height={250} // Set a fixed height
//                     />
//                     <h1 className="lg:text-2xl md:text-xl sm:text-lg xs:text-lg font-mediumFont xl:pe-5">
//                       {item.heading}
//                     </h1>
//                     <p className="text-[#898989] sm:text-sm xs:text-xs md:text-base font-normalFont xl:pe-5">
//                       {item.content}
//                     </p>
//                   </div>
//                   <div className="mt-10">
//                     <Link href={item.link}>
//                       <button className="border font-capsMedium border-[#0F2041] lg:text-base md:text-sm sm:text-sm xs:text-xs rounded-3xl uppercase xl:px-7 md:px-4 sm:px-4 xs:px-2 py-1">
//                         Continue Reading
//                       </button>
//                     </Link>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


import { useState, useEffect } from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import Link from "next/link";
import Image from "next/image";

export default function NewsAndStories() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(4);

  const NewsAndStoriesLists = [
    {
      image:
        "https://www.webnode.com/blog/wp-content/uploads/2016/10/Blog-intro.jpg",
      heading: "Al Quba, Dubai’s Pinnacle Investment Partner.",
      content:
        "Command your financial destiny with AL QUBA. As Dubai’s foremost investment powerhouse.",
      link: "/",
    },
    {
      image:
        "https://img.freepik.com/free-photo/online-message-blog-chat-communication-envelop-graphic-icon-concept_53876-139717.jpg",
      heading: "Al Quba, Dubai’s Pinnacle Investment Partner.",
      content:
        "Command your financial destiny with AL QUBA. As Dubai’s foremost investment powerhouse.",
      link: "/",
    },
    {
      image:
        "https://miro.medium.com/v2/resize:fit:1024/1*yBt65HhmARbqZDDJ1McFDg.png",
      heading: "Al Quba, Dubai’s Pinnacle Investment Partner.",
      content:
        "Command your financial destiny with AL QUBA. As Dubai’s foremost investment powerhouse.",
      link: "/",
    },
    {
      image:
        "https://mailrelay.com/wp-content/uploads/2018/03/que-es-un-blog-1.png",
      heading: "Al Quba, Dubai’s Pinnacle Investment Partner.",
      content:
        "Command your financial destiny with AL QUBA. As Dubai’s foremost investment powerhouse.",
      link: "/",
    },
    {
      image:
        "https://www.webnode.com/blog/wp-content/uploads/2016/10/Blog-intro.jpg",
      heading: "Al Quba, Dubai’s Pinnacle Investment Partner.",
      content:
        "Command your financial destiny with AL QUBA. As Dubai’s foremost investment powerhouse.",
      link: "/",
    },
    {
      image:
        "https://img.freepik.com/free-photo/online-message-blog-chat-communication-envelop-graphic-icon-concept_53876-139717.jpg",
      heading: "Al Quba, Dubai’s Pinnacle Investment Partner.",
      content:
        "Command your financial destiny with AL QUBA. As Dubai’s foremost investment powerhouse.",
      link: "/",
    },
    {
      image:
        "https://miro.medium.com/v2/resize:fit:1024/1*yBt65HhmARbqZDDJ1McFDg.png",
      heading: "Al Quba, Dubai’s Pinnacle Investment Partner.",
      content:
        "Command your financial destiny with AL QUBA. As Dubai’s foremost investment powerhouse.",
      link: "/",
    },
    {
      image:
        "https://mailrelay.com/wp-content/uploads/2018/03/que-es-un-blog-1.png",
      heading: "Al Quba, Dubai’s Pinnacle Investment Partner.",
      content:
        "Command your financial destiny with AL QUBA. As Dubai’s foremost investment powerhouse.",
      link: "/",
    },
  ];

  useEffect(() => {
    const updateResponsiveSettings = () => {
      if (window.innerWidth >= 1024) {
        setItemsToShow(4);
      } else if (window.innerWidth >= 768) {
        setItemsToShow(3);
      } else {
        setItemsToShow(2);
      }
    };

    updateResponsiveSettings();
    window.addEventListener("resize", updateResponsiveSettings);

    return () => {
      window.removeEventListener("resize", updateResponsiveSettings);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex + 1) % NewsAndStoriesLists.length
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [NewsAndStoriesLists.length]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? NewsAndStoriesLists.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex + 1) % NewsAndStoriesLists.length
    );
  };

  const visibleItems = Array.from(
    { length: itemsToShow },
    (_, i) =>
      NewsAndStoriesLists[(currentIndex + i) % NewsAndStoriesLists.length]
  );

  return (
    <div className="lg:py-20 md:py-14 py-10 lg:px-20 md:px-10 px-8 md:h-screen md:min-h-[700px] min-h-fit tall:h-[600px] flex items-center">
      <div>
        <div className="md:flex justify-between items-center w-full xs:gap-1 sm:gap-3 pb-10">
          <h1 className="uppercase lg:text-5xl md:text-4xl sm:text-3xl xs:text-lg font-ppneuemontrealThin">
            LATEST NEWS & STORIES
          </h1>
          <div className="flex justify-between gap-3 items-center md:mt-0 mt-5">
            <div className="flex gap-3">
              <button onClick={handlePrev}>
                <GoArrowLeft className="rounded-full bg-[#CEAB7A] p-2 text-5xl cursor-pointer" />
              </button>
              <button onClick={handleNext}>
                <GoArrowRight className="rounded-full bg-[#CEAB7A] p-2 text-5xl cursor-pointer" />
              </button>
            </div>
            <Link href="/">
              <button className="border font-capsMedium border-[#0F2041] md:text-base sm:text-sm xs:text-xs rounded-3xl uppercase md:px-7 sm:px-4 xs:px-2 py-1">
                know more
              </button>
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-10 md:gap-6 gap-5 h-full">
          {visibleItems.map((item, index) => (
            <div className="space-y-4" key={index}>
              <Image
                src={item.image}
                alt={item.heading}
                width={300} // Adjust based on your image dimensions
                height={200} // Adjust based on your image dimensions
                className="w-full md:h-[250px] h-[150px] object-cover"
              />
              <h1 className="sm:text-sm xs:text-xs md:text-base font-mediumFont xl:pe-5">
                {item.heading}
              </h1>
              <p className="text-[#898989] sm:text-sm xs:text-xs md:text-base font-normalFont xl:pe-5">
                {item.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}