//InvestmenrScheme.jsx

import Link from "next/link";
import { useState, useRef } from "react";
import { CiPlay1, CiPause1 } from "react-icons/ci";
import { FiMinus } from "react-icons/fi";
import { GoPlus } from "react-icons/go";
export default function InvestmenrScheme() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);
  const [expandedIndex, setExpandedIndex] = useState(null);

  const schemeData = [
    {
      title: "101,000 AED TO 250,000 AED",
      contents: [
        {
          subHeading: "BEGINNER",
          subContent:
            "For those just starting their investment journey, our Beginner Plan offers a low-risk, high-return opportunity to grow your wealth with a minimum investment of 10,000 AED.",
          image:
            "https://navi.com/blog/wp-content/uploads/2022/06/best-investment-plan.jpg",
        },
        {
          subHeading: "STANDARD",
          subContent:
            "For those just starting their investment journey, our Beginner Plan offers a low-risk, high-return opportunity to grow your wealth with a minimum investment of 10,000 AED.",
          image:
            "https://navi.com/blog/wp-content/uploads/2022/06/best-investment-plan.jpg",
        },
        {
          subHeading: "ADVANCED",
          subContent:
            "For advanced investors looking for higher returns with moderate risk, our Advanced Plan offers a broader range of investment opportunities.",
          image:
            "https://navi.com/blog/wp-content/uploads/2022/06/best-investment-plan.jpg",
        },
      ],
    },
    {
      title: "251,000 AED TO 500,000 AED",
      contents: [
        {
          subHeading: "BEGINNER",
          subContent:
            "For those just starting their investment journey, our Beginner Plan offers a low-risk, high-return opportunity to grow your wealth with a minimum investment of 10,000 AED.",
          image:
            "https://navi.com/blog/wp-content/uploads/2022/06/best-investment-plan.jpg",
        },
        {
          subHeading: "STANDARD",
          subContent:
            "For those just starting their investment journey, our Beginner Plan offers a low-risk, high-return opportunity to grow your wealth with a minimum investment of 10,000 AED.",
          image:
            "https://navi.com/blog/wp-content/uploads/2022/06/best-investment-plan.jpg",
        },
        {
          subHeading: "ADVANCED",
          subContent:
            "For advanced investors looking for higher returns with moderate risk, our Advanced Plan offers a broader range of investment opportunities.",
          image:
            "https://navi.com/blog/wp-content/uploads/2022/06/best-investment-plan.jpg",
        },
      ],
    },
    {
      title: "551,000 AED TO 1,000,000 AED",
      contents: [
        {
          subHeading: "BEGINNER",
          subContent:
            "For those just starting their investment journey, our Beginner Plan offers a low-risk, high-return opportunity to grow your wealth with a minimum investment of 10,000 AED.",
          image:
            "https://navi.com/blog/wp-content/uploads/2022/06/best-investment-plan.jpg",
        },
        {
          subHeading: "STANDARD",
          subContent:
            "For those just starting their investment journey, our Beginner Plan offers a low-risk, high-return opportunity to grow your wealth with a minimum investment of 10,000 AED.",
          image:
            "https://navi.com/blog/wp-content/uploads/2022/06/best-investment-plan.jpg",
        },
        {
          subHeading: "ADVANCED",
          subContent:
            "For advanced investors looking for higher returns with moderate risk, our Advanced Plan offers a broader range of investment opportunities.",
          image:
            "https://navi.com/blog/wp-content/uploads/2022/06/best-investment-plan.jpg",
        },
      ],
    },
  ];

  const toggleSection = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(null); // Collapse if it's already expanded
    } else {
      setExpandedIndex(index); // Expand the section
    }
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
    <div className="lg:px-20 md:px-10 px-8 lg:py-20 md:py-14 py-10">
      <div className="flex justify-between items-center pb-10">
        <h1 className="lg:text-4xl md:text-3xl sm:text-3xl xs:text-2xl font-extralightFont ">
          Investment Scheme:
        </h1>
        <div>
          <Link href={"/"}>
            <button className="border font-capsMedium border-[#0F2041] md:text-base sm:text-sm xs:text-xs rounded-3xl uppercase md:px-7 sm:px-4 xs:px-2 py-1">
              know more
            </button>
          </Link>
        </div>
      </div>
      <div>
        {schemeData.map((item, index) => (
          <div
            className={` ${
              index === 0 && "border-t-2"
            } border-b-2 border-[#CEAB7A] ${
              expandedIndex === index ? "pt-3" : "py-3"
            }`}
            key={index}
          >
            <div
              className="flex w-full justify-between cursor-pointer"
              onClick={() => toggleSection(index)}
              aria-expanded={expandedIndex === index}
            >
              <h1
                className={`uppercase xl:text-4xl md:text-3xl text-2xl font-ppneuemontrealThin text-[#0E2141] w-fit  `}
              >
                {item.title}
              </h1>
              <div className=" w-fit ">
                {expandedIndex === index ? (
                  <FiMinus className="lg:text-5xl md:text-4xl text-3xl" />
                ) : (
                  <GoPlus className="lg:text-5xl md:text-4xl text-3xl" />
                )}
              </div>
            </div>
            {expandedIndex === index && (
              <>
                <div className="overflow-x-auto py-6 xl:pe-28">
                  <div className="flex md:gap-16 gap-8 ">
                    {item.contents.map((content, ind) => (
                      <div
                        key={ind}
                        className="space-y-5 flex flex-col justify-between md:min-w-[350px] min-w-[250px]" // min width to avoid shrinking of items
                      >
                        <div className="space-y-5">
                          <h1 className="uppercase xl:text-4xl md:text-3xl text-2xl font-capsMedium">
                            {content.subHeading}
                          </h1>
                          <p className="font-normal text-[#898989] lg:text-base md:text-sm sm:text-sm xs:text-xs">
                            {content.subContent}
                          </p>
                        </div>
                        <img
                          src={content.image}
                          alt={content.subHeading}
                          className="lg:h-[250px] h-[200px]"
                          loading="lazy"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="w-full flex justify-end pb-6">
                  <Link href={"/"}>
                    <button className="border font-capsMedium border-[#0F2041] md:text-base sm:text-sm xs:text-xs rounded-3xl uppercase md:px-7 sm:px-4 xs:px-2 py-1">
                      know more
                    </button>
                  </Link>
                </div>
              </>
            )}
          </div>
        ))}
      </div>

      <div className="relative  w-full bg-[#F3F4F6] flex justify-center items-center lg:mt-16 md:mt-12 mt-10">
        <video
          ref={videoRef}
          className="max-h-[500px] w-full object-cover"
          src="/assets/waves.mp4" // Referring to the public folder
          type="video/mp4"
          onPause={() => setIsPlaying(false)}
          onPlay={() => setIsPlaying(true)}
        ></video>

        {/* Play/Pause Button */}
        <div
          onClick={togglePlayPause}
          className="absolute flex justify-center items-center text-black lg:text-8xl md:text-7xl text-6xl "
        >
          {isPlaying ? (
            <CiPause1 className="cursor-pointer " />
          ) : (
            <CiPlay1 className="cursor-pointer" />
          )}
        </div>
      </div>
    </div>
  );
}
