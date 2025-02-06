// // clients-and-review.jsx

// import { useState, useEffect } from "react";
// import {
//   MdOutlineStar,
//   MdOutlineStarBorder,
//   MdOutlineStarHalf,
// } from "react-icons/md";
// import Link from "next/link";
// import Image from "next/image"; // Import for optimized images
// import Head from "next/head"; // Import for SEO and page title

// // Update image/video paths to be relative to the public folder
// const clientData = [
//   {
//     id: 1,
//     name: "Khasim Enoli",
//     designation: "Managing Director of Sample",
//     rating: 4.5,
//     review:
//       "For those just starting their investment journey, our Beginner Plan offers a low-risk, high-return opportunity to grow your wealth with a minimum investment of 10,000 AED.",
//     image:
//       "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1725042039-b6f50f195364bbc1ecb3d4ab2aa8b68e-1.png",
//   },
//   {
//     id: 2,
//     name: "John Doe",
//     designation: "CEO of Example",
//     rating: 4.2,
//     review:
//       "A fantastic service that exceeded my expectations. Highly recommended!",
//     image:
//       "https://i.pinimg.com/736x/3f/e9/fe/3fe9fe7f0573b76d84f1bc313e43c98d.jpg",
//   },
//   {
//     id: 3,
//     name: "Jane Smith",
//     designation: "CTO of SampleTech",
//     rating: 4,
//     review: "The best investment decision I've made so far. Truly exceptional.",
//     image:
//       "https://img.freepik.com/premium-photo/asian-businessman-isolated_118124-40617.jpg",
//   },
//   {
//     id: 4,
//     name: "Alice Johnson",
//     designation: "Investor",
//     rating: 2,
//     review:
//       "Outstanding support and advice. My portfolio has grown significantly!",
//     image:
//       "https://img.freepik.com/premium-photo/asian-businessman-isolated_118124-40600.jpg",
//   },
//   {
//     id: 5,
//     name: "Mike Wilson",
//     designation: "Entrepreneur",
//     rating: 3,
//     review: "Highly professional team with great insights. Amazing results!",
//     image:
//       "https://img.freepik.com/premium-photo/happy-proud-prosperous-mid-aged-mature-professional-business-woman-ceo-executive-wearing-suit-standing-office-arms-crossed-looking-away-thinking-success-leadership-side-profile-view_220770-5144.jpg",
//   },
//   {
//     id: 6,
//     name: "Alice Johnson",
//     designation: "Investor",
//     rating: 2,
//     review:
//       "Outstanding support and advice. My portfolio has grown significantly!",
//     image:
//       "https://img.freepik.com/premium-photo/asian-businessman-isolated_118124-40600.jpg",
//   },
// ];

// export default function ClientsAndReview() {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isPaused, setIsPaused] = useState(false);
//   const [hoveredIndex, setHoveredIndex] = useState(null);
//   const [itemsToShow, setItemsToShow] = useState(4);

//   // Auto-slide functionality
//   useEffect(() => {
//     if (isPaused) return;
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % clientData.length);
//     }, 5000); // 5-second interval
//     return () => clearInterval(interval);
//   }, [isPaused]);

//   // Function to render stars
//   const renderStars = (rating) => {
//     return Array(5)
//       .fill(0)
//       .map((_, i) => {
//         if (rating >= i + 1) {
//           return <MdOutlineStar key={i} />;
//         } else if (rating > i && rating < i + 1) {
//           return rating - i >= 0.5 ? (
//             <MdOutlineStarHalf key={i} />
//           ) : (
//             <MdOutlineStarBorder key={i} />
//           );
//         } else {
//           return <MdOutlineStarBorder key={i} />;
//         }
//       });
//   };

//   useEffect(() => {
//     const updateResponsiveSettings = () => {
//       if (window.matchMedia("(min-width: 1024px)").matches) {
//         setItemsToShow(4); // Large screens
//       } else if (window.matchMedia("(min-width: 768px)").matches) {
//         setItemsToShow(3); // Medium screens
//       } else {
//         setItemsToShow(2); // Small screens
//       }
//     };

//     updateResponsiveSettings();
//     window.addEventListener("resize", updateResponsiveSettings);

//     return () => {
//       window.removeEventListener("resize", updateResponsiveSettings);
//     };
//   }, []);

//   // Calculate visible clients
//   const visibleClients = (index) => {
//     const total = clientData.length;
//     return Array.from(
//       { length: itemsToShow },
//       (_, i) => clientData[(index + i) % total]
//     );
//   };

//   const totalItems = clientData.length;
//   const segmentWidth = 100 / totalItems;

//   const clientsToShow = visibleClients(currentIndex);

//   return (
//     <>
//       <Head>
//         <title>Client Reviews - Our Happy Clients</title>
//         <meta
//           name="description"
//           content="See what our clients have to say about our services."
//         />
//       </Head>
//       <div className="h-full">
//         <div className="flex justify-between items-center lg:px-20 md:px-10 px-8 w-full xs:gap-1 sm:gap-3">
//           <h1 className="font-capsNormal lg:text-4xl md:text-3xl sm:text-xl xs:text-lg">
//             OUR HAPPY CLIENTS SAY
//           </h1>
//           <Link href={"/"}>
//             <button className="border font-capsMedium border-[#0F2041] md:text-base sm:text-sm xs:text-xs rounded-3xl uppercase md:px-7 sm:px-4 xs:px-2 py-1">
//               know more
//             </button>
//           </Link>
//         </div>
//         <div className="relative overflow-hidden mt-10 md:px-10 px-8">
//           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:min-h-[600px] min-h-[550px] h-full items-end">
//             {clientsToShow.map((client, index) => (
//               <div key={client.id} className="relative h-full">
//                 <div className="md:h-[85%] h-[80%]">
//                   {hoveredIndex === index ? (
//                     <div
//                       className="bg-[#0E2141] h-full text-white flex flex-col md:p-7 sm:p-5 p-3 mb-4 justify-between items-start w-full"
//                       onMouseLeave={() => {
//                         setHoveredIndex(null);
//                         setIsPaused(false);
//                       }}
//                     >
//                       <div>
//                         <h2 className="md:text-base sm:text-sm xs:text-xs font-medium mb-8">
//                           {client.rating} Rating
//                         </h2>
//                         <p className="md:text-base sm:text-sm xs:text-xs font-normalFont">
//                           {client.review}
//                         </p>
//                       </div>
//                       <div className="flex w-full justify-between text-lg">
//                         {renderStars(client.rating)}
//                       </div>
//                     </div>
//                   ) : (
//                     <div className="flex items-end h-full">
//                       <Image
//                         src={client.image}
//                         alt={`${client.name}'s testimonial`}
//                         className="w-full lg:h-[450px] md:h-[400px] h-[380px] object-cover"
//                         loading="lazy"
//                         width={600}
//                         height={600}

//                         onMouseEnter={() => {
//                           setHoveredIndex(index);
//                           setIsPaused(true);
//                         }}
//                       />
//                     </div>
//                   )}
//                 </div>
//                 <div className="md:h-[15%] h-[20%] mt-4">
//                   <h3 className="font-medium uppercase text-black">
//                     {client.name}
//                   </h3>
//                   <p className="md:text-sm text-xs text-[#898989]">
//                     {client.designation}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//         <div className="lg:px-20 md:px-10 px-8">
//           <div className="w-full mt-6 relative">
//             <div className="h-[1px] w-full bg-[#CEAB7A] overflow-hidden flex items-center">
//               {Array.from({ length: itemsToShow }).map((_, index) => {
//                 const redBarPosition =
//                   ((currentIndex + index) % totalItems) * segmentWidth;
//                 return (
//                   <div
//                     key={index}
//                     className="h-[5px] bg-[#0E2141] absolute"
//                     style={{
//                       width: `${segmentWidth}%`,
//                       left: `${redBarPosition}%`,
//                       transition: "right 1s ease-in-out",
//                     }}
//                   ></div>
//                 );
//               })}
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

import { useState, useEffect } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import Link from "next/link";
import Image from "next/image";

const clientData = [
  {
    id: 1,
    name: "Khasim Enoli",
    designation: "Managing Director of Sample",
    rating: 4.5,
    review:
      "For those just starting their investment journey, our Beginner Plan offers a low-risk, high-return opportunity to grow your wealth with a minimum investment of 10,000 AED.",
    image:
      "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1725042039-b6f50f195364bbc1ecb3d4ab2aa8b68e-1.png",
  },
  {
    id: 2,
    name: "John Doe",
    designation: "CEO of Example",
    rating: 4.2,
    review:
      "A fantastic service that exceeded my expectations. Highly recommended!",
    image:
      "https://i.pinimg.com/736x/3f/e9/fe/3fe9fe7f0573b76d84f1bc313e43c98d.jpg",
  },
  {
    id: 3,
    name: "Jane Smith",
    designation: "CTO of SampleTech",
    rating: 4,
    review: "The best investment decision I've made so far. Truly exceptional.",
    image:
      "https://img.freepik.com/premium-photo/asian-businessman-isolated_118124-40617.jpg",
  },
  {
    id: 4,
    name: "Alice Johnson",
    designation: "Investor",
    rating: 2,
    review:
      "Outstanding support and advice. My portfolio has grown significantly!",
    image:
      "https://img.freepik.com/premium-photo/asian-businessman-isolated_118124-40600.jpg",
  },
  {
    id: 5,
    name: "Mike Wilson",
    designation: "Entrepreneur",
    rating: 3,
    review: "Highly professional team with great insights. Amazing results!",
    image:
      "https://img.freepik.com/premium-photo/happy-proud-prosperous-mid-aged-mature-professional-business-woman-ceo-executive-wearing-suit-standing-office-arms-crossed-looking-away-thinking-success-leadership-side-profile-view_220770-5144.jpg",
  },
  {
    id: 6,
    name: "Alice Johnson",
    designation: "Investor",
    rating: 2,
    review:
      "Outstanding support and advice. My portfolio has grown significantly!",
    image:
      "https://img.freepik.com/premium-photo/asian-businessman-isolated_118124-40600.jpg",
  },
];

export default function ClientsAndReview() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [itemsToShow, setItemsToShow] = useState(4);

  // Auto-slide functionality
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % clientData.length);
    }, 5000); // 5-second interval
    return () => clearInterval(interval);
  }, [isPaused]);

  useEffect(() => {
    const updateResponsiveSettings = () => {
      if (window.matchMedia("(min-width: 1024px)").matches) {
        setItemsToShow(4); // Large screens
      } else if (window.matchMedia("(min-width: 768px)").matches) {
        setItemsToShow(3); // Medium screens
      } else {
        setItemsToShow(2); // Small screens
      }
    };

    updateResponsiveSettings();
    window.addEventListener("resize", updateResponsiveSettings);

    return () => {
      window.removeEventListener("resize", updateResponsiveSettings);
    };
  }, []);

  // Calculate visible clients
  const visibleClients = (index) => {
    const total = clientData.length;
    return Array.from(
      { length: itemsToShow },
      (_, i) => clientData[(index + i) % total]
    );
  };

  const totalItems = clientData.length;
  const segmentWidth = 100 / totalItems; // Width for each segment

  const clientsToShow = visibleClients(currentIndex);

  return (
    <>
      <div className="md:h-screen md:min-h-[700px] min-h-fit tall:h-[600px] lg:py-20 md:py-14 py-10 lg:px-20 md:px-10 px-8 flex items-center bg-[#F7F7F7]">
        <div>
          <div className="flex justify-between items-center w-full gap-1">
            <h1 className="font-ppneuemontrealThin lg:text-4xl md:text-3xl sm:text-xl xs:text-lg">
              OUR HAPPY CLIENTS SAY
            </h1>
            <Link href="/">
              <button className="border font-capsMedium border-[#0F2041] md:text-base sm:text-sm xs:text-xs rounded-3xl uppercase md:px-7 sm:px-4 xs:px-2 py-1">
                know more
              </button>
            </Link>
          </div>
          <div className="relative overflow-hidden my-10">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:gap-10 gap-7 h-full items-end">
              {clientsToShow.map((client, index) => (
                <div key={client.id} className="relative h-full">
                  {hoveredIndex === index ? (
                    <div
                      className="bg-[#C3B081] h-full text-white flex flex-col md:p-7 sm:p-5 p-3 mb-4 justify-between w-full"
                      onMouseLeave={() => {
                        setHoveredIndex(null);
                        setIsPaused(false);
                      }}
                    >
                      <h4 className="lg:text-base md:text-sm sm:text-sm xs:text-xs font-capsMedium">
                        <span className="text-5xl leading-[0px]">.</span>ABC
                        Group
                      </h4>
                      <div className="mt-16">
                        <h1 className="uppercase xl:text-[29px] lg:text-[25px] md:text-[20px] leading-[100%] mb-3 font-capsMedium">
                          MOHAMMED SHAMEER
                        </h1>
                        <h2 className="lg:text-base md:text-sm sm:text-sm xs:text-xs font-capsNormal">
                          CO-FOUNDER | PARTNER
                        </h2>
                      </div>
                      <button className="flex items-center space-x-2 lg:text-base sm:text-sm xs:text-xs font-capsNormal h-fit w-fit">
                        <span>READ MORE</span>
                        <IoIosArrowRoundForward className="text-3xl" />
                      </button>
                    </div>
                  ) : (
                    <div className="flex items-end h-full">
                      <Image
                        src={client.image}
                        alt={`${client.name}'s testimonial`}
                        className="w-full lg:h-[400px] md:h-[300px] h-[250px] object-cover"
                        width={300}
                        height={400}
                        loading="lazy"
                        onMouseEnter={() => {
                          setHoveredIndex(index);
                          setIsPaused(true);
                        }}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="w-full relative">
            <div className="h-[1px] w-full bg-[#CEAB7A] overflow-hidden flex items-center">
              <div
                className="h-[5px] bg-[#0E2141] absolute"
                style={{
                  width: `${segmentWidth}%`, // Width of one segment
                  left: `${(currentIndex / totalItems) * 100}%`, // Position based on currentIndex
                  transition: "left 1s ease-in-out", // Smooth transition
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
