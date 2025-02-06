// components/Navbar.jsx
"use client";

import { IoCloseOutline, IoMenuSharp } from "react-icons/io5";
import Image from "next/image";
import logo from "../../public/assets/logo.png";
import { useState, useEffect } from "react";
import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";
import { IoIosArrowRoundForward } from "react-icons/io";
import Link from "next/link";
import Head from "next/head";

export default function Navbar() {
  const data = [
    {
      title: "WHO WE ARE",
      subcontents: ["About AL QUBA", "Board of Director", "Testimonials"],
      heading: "WHO WE ARE",
      description:
        "AL QUBA Investment LLC is an investment company looking to be an active participant in Dubai’s economic development, with a sharp lookout for lucrative business opportunities and an",
      counts: [
        {
          value: "10+",
          text: "Years of Experience",
        },
        {
          value: "23%",
          text: "Average Return On Investment",
        },
        {
          value: "25+",
          text: "Active Portfolios",
        },
        {
          value: "18+",
          text: "Countries",
        },
      ],
      link: {
        text: "READ MORE",
        url: "/who-we-are",
      },
    },
    {
      title: "WHAT WE DO",
      subcontents: ["Overview", "Our Portfolio"],
      heading: "SERVICES",
      description:
        "We provide a wide range of services to help you plan, grow, and secure your wealth through tailored investment strategies.",
      counts: [
        {
          value: "500+",
          text: "Comprehensive plans designed for diverse financial goals.",
        },
        {
          value: "300+",
          text: "Portfolios managed with a focus on growth and security.",
        },
        {
          value: "100%",
          text: "Client satisfaction in achieving financial milestones.",
        },
      ],
      link: {
        text: "DISCOVER MORE",
        url: "/what-we-do",
      },
    },
    {
      title: "INVESTORS",
      subcontents: [
        "Investment Philosophy",
        "Investment Scheme",
        " Investment Benefit",
        " Investment Guidence",
      ],
      heading: "PARTNERSHIPS",
      description:
        "We value our investors and provide them with the tools and insights needed to make informed financial decisions.",
      counts: [
        {
          value: "1,000+",
          text: "Active investors partnering with us globally.",
        },
        {
          value: "95%",
          text: "Retention rate reflecting trust and satisfaction.",
        },
        {
          value: "20+",
          text: "Countries served with our financial expertise.",
        },
      ],
      link: {
        text: "LEARN MORE",
        url: "/investors",
      },
    },
    {
      title: "CAREER",
      subcontents: [
        "Job Openings",
        "Life at AL QUBA",
        "Employee Benefits",
        "Internship Programs",
      ],
      heading: "JOIN US",
      description:
        "Be a part of a dynamic team that values innovation, dedication, and excellence in the financial industry.",
      counts: [
        {
          value: "200+",
          text: "Career opportunities in diverse roles and departments.",
        },
        {
          value: "90%",
          text: "Employee satisfaction with career growth and benefits.",
        },
        {
          value: "50+",
          text: "Workshops and training programs conducted annually.",
        },
      ],
      link: {
        text: "EXPLORE CAREERS",
        url: "/career",
      },
    },
    {
      title: "MEDIA",
      subcontents: ["Press Releases", "News Coverage", "Events", "Media Kit"],
      heading: "LATEST UPDATES",
      description:
        "Stay updated with the latest news, events, and developments in the financial world and within our organization.",
      counts: [
        {
          value: "100+",
          text: "Media mentions highlighting our achievements.",
        },
        { value: "50+", text: "Events and webinars hosted annually." },
        { value: "10M+", text: "Audience reached through our media presence." },
      ],
      link: {
        text: "VIEW UPDATES",
        url: "/media",
      },
    },
  ];

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState(0);

  const handleToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    handleToTop();
  }, [isSidebarOpen]);

  const toggleSection = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(0); // Collapse if it's already expanded
    } else {
      setExpandedIndex(index); // Expand the section
    }
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    if (isSidebarOpen) {
      const timer = setTimeout(() => {
        setShowContent(true);
      }, 700);

      return () => clearTimeout(timer);
    } else {
      setShowContent(false);
    }
  }, [isSidebarOpen]);

  return (
    <div className="relative">
      <Head>
        <title>SEO-Friendly Sidebar Component</title>
        <meta
          name="description"
          content="A highly optimized React component with an SEO-friendly sidebar for better navigation and search engine indexing."
        />
        <meta
          name="keywords"
          content="React, Sidebar, SEO-Friendly, Navigation"
        />
        <meta name="author" content="Your Name" />
      </Head>

      <header className="flex justify-between items-center lg:px-20 md:px-10 px-8 md:pt-10 pt-5 absolute top-0 w-full font-normalFont">
        <div className="z-30">
          <Image
            src={logo}
            alt="Company Logo"
            width={128}
            className="object-cover"
            height={128}  
            priority
          />
        </div>
        <nav className="flex items-center lg:gap-16 md:gap-12 gap-3 text-white">
          <div className="z-30">
            <button className="md:px-6 px-3 md:py-2 py-1 bg-[#D3B98D] md:text-base xs:text-sm">
              Login/Register
            </button>
          </div>
          <div
            className="lg:text-5xl md:text-4xl text-3xl cursor-pointer z-50 "
            onClick={toggleSidebar}
          >
            {isSidebarOpen ? (
              <IoMenuSharp style={{ visibility: "hidden" }} />
            ) : (
              <IoMenuSharp />
            )}
          </div>
        </nav>
      </header>

      {isSidebarOpen && (
        <aside
          className={`fixed ${
            showContent && "bg-[#3c84ff]"
          } inset-0 z-40 flex w-full min-h-screen h-full font-medium text-white`}
          role="dialog"
          aria-modal="true"
        >
          <div
            className={`absolute inset-0 animate-slide-diagonal rounded-bl-full`}
            style={{
              transformOrigin: "top right",
              background:
                "transparent linear-gradient(180deg, #133164 0%, #03070D 100%) 0% 0% no-repeat padding-box",
            }}
          ></div>

          {/* {showContent && ( */}
          <div className="z-40 overflow-auto lg:pt-[180px] md:pt-[140px] pt-[100px] flex md:flex-row flex-col  w-full lg:px-20 md:px-14 px-10 pb:10 md:pb-14 lg:pb-20 lg:gap-16 md:gap-6 gap-20 ">
            <div className="fixed lg:right-20 md:right-10 right-8 flex justify-end w-full top-0 lg:text-5xl md:text-4xl text-3xl cursor-pointer z-50  md:pt-20 pt-11">
              <div
                className="bg-white text-[#0E2141] rounded-full "
                onClick={toggleSidebar}
                aria-label="Close Sidebar"
              >
                <IoCloseOutline />
              </div>
            </div>
            {showContent && (
              <>
                {" "}
                <main className="flex flex-col gap-10 justify-between text-[#D5D5D5] flex-1 md:order-1 order-2">
                  <section>
                    <h1 className="lowercase xl:text-4xl md:text-3xl text-2xl font-capsNormal mb-8 text-white">
                      {data[expandedIndex].heading}
                    </h1>
                    <p className="max-w-[400px] font-normalFont lg:text-base md:text-sm sm:text-sm xs:text-xs">
                      {data[expandedIndex].description}
                    </p>
                  </section>
                  <section
                    className={`
                        grid 
                        ${
                          data[expandedIndex].counts.length === 1 &&
                          "grid-cols-1"
                        }
                        ${
                          data[expandedIndex].counts.length === 2 &&
                          "grid-cols-2"
                        }
                        ${
                          data[expandedIndex].counts.length === 3 &&
                          "grid-cols-3"
                        }
                        ${
                          data[expandedIndex].counts.length === 4 &&
                          "grid-cols-4"
                        }
                        ${
                          data[expandedIndex].counts.length === 5 &&
                          "grid-cols-5"
                        }
                        lg:gap-10 gap-5
                      `}
                  >
                    {data[expandedIndex].counts.map((item, ind) => (
                      <div key={ind}>
                        <h1 className="xl:text-5xl md:text-4xl text-3xl font-capsNormal mb-2 text-white">
                          {item.value}
                        </h1>
                        <p className=" font-extralightFont lg:text-base md:text-sm sm:text-sm xs:text-xs">
                          {item.text}
                        </p>
                      </div>
                    ))}
                    <Link
                      href={data[expandedIndex].link.url}
                      className="col-span-3 mb-10 md:mb-14 lg:mb-0"
                      title={data[expandedIndex].link.text}
                    >
                      <button className="flex items-center md:gap-10 gap-5 lg:text-base sm:text-sm xs:text-xs font-capsNormal px-5 py-2 h-fit border border-[#707070] w-fit">
                        <span>{data[expandedIndex].link.text}</span>
                        <IoIosArrowRoundForward className="text-3xl" />
                      </button>
                    </Link>
                  </section>
                </main>
                {/* </div> */}
                <nav className="flex-1  md:order-2 order-1">
                  {data.map((section, index) => (
                    <div
                      className={`flex justify-between ${
                        index === 0 ? "pb-3" : "py-3"
                      } cursor-pointer border-b-2 border-[#D5D5D5]`}
                      key={index}
                      onClick={() => toggleSection(index)}
                      aria-expanded={expandedIndex === index}
                    >
                      <h1
                        className={`uppercase xl:text-4xl md:text-3xl text-2xl font-capsNormal xl:w-[280px] w-fit  ${
                          expandedIndex === index
                            ? "text-white"
                            : "text-[#D5D5D5]"
                        }`}
                      >
                        {section.title}
                      </h1>
                      {expandedIndex === index && (
                        <ul className=" space-y-2 lg:text-lg md:text-base sm:text-base xs:text-sm  w-fit">
                          {section.subcontents.map((item, i) => (
                            <li
                              key={i}
                              className={
                                i === 0
                                  ? "text-[#CEAB7A] font-mediumFont"
                                  : " text-[#D5D5D5] font-extralightFont"
                              }
                            >
                              {item}
                            </li>
                          ))}
                        </ul>
                      )}
                      {/* Collapsing Icon */}
                      <div className=" w-fit ">
                        {expandedIndex === index ? (
                          <FiMinus className="lg:text-5xl md:text-4xl text-3xl" />
                        ) : (
                          <GoPlus className="lg:text-5xl md:text-4xl text-3xl" />
                        )}
                      </div>
                    </div>
                  ))}
                </nav>
              </>
            )}
          </div>
        </aside>
      )}
    </div>
  );
}
