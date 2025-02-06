"use client";

import { useFormik } from "formik";
import * as Yup from "yup";
import Image from "next/image"; // Use next/image for optimized images
import { useEffect, useState } from "react";
import Link from "next/link"; // Use next/link for routing
import Flag from "react-world-flags";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  const [fileSize, setFileSize] = useState(null);

  const footerData = [
    {
      heading: "Who We Are",
      links: [
        { name: "About AL QUBA", to: "/about" },
        { name: "Board of Director", to: "/board" },
        { name: "Core Value", to: "/core-value" },
        { name: "Testimonials", to: "/testimonials" },
      ],
    },
    {
      heading: "What We Do",
      links: [
        { name: "Overview", to: "/overview" },
        { name: "Our Portfolio", to: "/portfolio" },
      ],
    },
    {
      heading: "Investors",
      links: [
        { name: "Investment Philosophy", to: "/philosophy" },
        { name: "Investment Scheme", to: "/scheme" },
        { name: "Investment Benefit", to: "/benefit" },
        { name: "Investment Guidance", to: "/guidance" },
      ],
    },
    {
      heading: "Contact",
      links: [
        {
          name: "General Enquiry",
          contactTo: "+9718157058514",
          to: "tel:+9718157058514",
        },
        {
          name: "Consulting Enquiry",
          contactTo: "+9718157058514",
          to: "tel:+9718157058514",
        },
        {
          name: "Email",
          contactTo: "info@alquba.com",
          to: "mailto:info@alquba.com",
        },
        {
          name: "WhatsApp (Investment)",
          contactTo: "+9718157058514",
          to: "https://wa.me/9718157058514",
        },
      ],
    },
  ];

  const countryCodes = ["IN", "CN", "GB", "AE", "SA"];

  // Get the file size dynamically
  useEffect(() => {
    fetch("/assets/Ramees CV-2.pdf") // Adjust to your Next.js public folder structure
      .then((response) => {
        if (response.ok) {
          const contentLength = response.headers.get("content-length");
          if (contentLength) {
            setFileSize((contentLength / (1024 * 1024)).toFixed(1)); // Convert bytes to MB
          }
        }
      })
      .catch((error) => console.error("Error fetching file size:", error));
  }, []);

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
    }),
    onSubmit: (values) => {
      console.log("Form Submitted:", values);
    },
  });

  return (
    <>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:gap-16 md:gap-6 gap-12 bg-[#F3F4F6] lg:px-20 md:px-10 px-8 lg:pt-20 md:pt-14 pt-10 lg:pb-10 pb-8">
        <div className="flex items-end w-full ">
          <a
            href="/assets/Ramees CV-2.pdf" // Adjust to your Next.js public folder structure
            target="_blank"
            rel="noopener noreferrer"
            download
            className="flex items-center border border-[#707070] bg-white xs:w-full sm:w-full"
          >
            <div className="bg-[#0E2141] p-4">
              <Image
                src="/assets/logo.png" // Use next/image for optimized image
                alt="Company Logo"
                width={55}
                style={{ width: "auto", height: "auto" }}
                height={55}
                className="object-contain"
              />
            </div>
            <div className="p-4 xl:w-[250px] lg:text-base sm:text-sm xs:text-xs">
              <span className="block font-medium ">Download Our Brochure</span>
              <p className="font-normal text-[#898989]">
                PDF {fileSize ? `${fileSize} MB` : "Loading..."}
              </p>
            </div>
          </a>
        </div>

        {/* Right Section */}
        <article className="flex flex-col justify-center gap-6">
          <div className="xl:max-w-[500px] space-y-6">
            <h2 className="lg:text-4xl md:text-3xl sm:text-3xl xs:text-2xl font-mediumFont ">
              Get professional advice for your portfolio growth.
            </h2>
            <p className="lg:text-base sm:text-sm xs:text-xs font-normalFont text-[#707070]">
              Command your financial destiny with AL QUBA. As Dubai’s foremost
              investment powerhouse.
            </p>
          </div>
          <form onSubmit={formik.handleSubmit} className="flex lg:gap-4 gap-2">
            <div className="flex-1">
              <input
                type="email"
                name="email"
                placeholder="Please provide your email"
                className="w-full px-4 h-[50px] border border-[#707070] font-normalFont focus:outline-none"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.email && formik.errors.email ? (
                <p className="text-sm text-red-500 mt-1">
                  {formik.errors.email}
                </p>
              ) : null}
            </div>
            <button
              type="submit"
              className="lg:px-5 xl:px-6 px-3 h-[50px] bg-[#0E2141] border border-[#707070] text-white font-capsNormal focus:outline-none"
            >
              SUBSCRIBE
            </button>
          </form>
        </article>
      </section>

      <footer className="bg-[#0E2141] text-white lg:px-20 lg:pt-20 lg:pb-14 md:pb-10 md:p-10 p-8 lg:h-screen tall:h-fit">
        <div className="md:flex block justify-between items-start md:space-y-0 space-y-3">
          <div>
            <h3 className="font-capsNormal lg:text-5xl md:text-4xl sm:text-3xl xs:text-xl uppercase mb-3">
              GET STARTED NOW!
            </h3>
            <p className="font-extralightFont lg:text-base sm:text-sm xs:text-xs text-[#D5D5D5]">
              Command your financial destiny with AL QUBA. <br />
              As Dubai's foremost investment powerhouse,
            </p>
          </div>
          <button className="flex items-center space-x-2 lg:text-base sm:text-sm xs:text-xs font-capsNormal px-5 py-1 h-fit border border-[#707070] w-fit">
            <span>READ MORE</span>
            <IoIosArrowRoundForward className="text-3xl" />
          </button>
        </div>
        <nav className="md:mt-14 mt-10 grid lg:grid-cols-9 grid-cols-3 xl:gap-10 gap-5">
          {footerData.map((section, index) => (
            <div
              key={index}
              className={`${
                index === footerData.length - 1
                  ? "lg:col-span-3 col-span-3 "
                  : "lg:col-span-2 col-span-1"
              }`}
            >
              <h1 className="md:text-lg sm:text-base xs:text-sm font-capsMedium mb-5">
                {section.heading}
              </h1>
              <ul className="space-y-3 w-full">
                {section.links.map((link, idx) => (
                  <li key={idx} className=" w-full">
                    <Link
                      href={link.to}
                      className="font-extralightFont lg:text-base sm:text-sm xs:text-xs text-[#D5D5D5] flex justify-between items-center"
                    >
                      <h4> {link.name}</h4>
                      <div className="min-w-[35%]">
                        {index === footerData.length - 1 && (
                          <h4>: {link.contactTo}</h4>
                        )}
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="flex items-center md:space-x-4 space-x-3 mt-5">
            {/* Country Flags */}
            {countryCodes.map((code, index) => (
              <Flag
                key={index}
                code={code}
                className="md:w-10 w-8 md:h-10 h-8 object-contain cursor-pointer hover:scale-110 transition"
              />
            ))}
          </div>
        </nav>

        {/* Bottom Section */}
        <section className="border-t border-[#707070] mt-5 pt-5 md:flex gap-y-4 justify-between items-start lg:text-base sm:text-sm xs:text-xs  text-[#D5D5D5] font-extralightFont">
          <div className="flex items-center md:flex-nowrap flex-wrap">
            <div className="md:col-span-6 col-span-7  lg:pe-8 pe-4">
              ©Copyright 2025 AL QUBA Investment Company. All Rights Reserved
            </div>
            <div className="col-span-1  md:text-center text-end lg:px-8 px-4 border-l border-r">
              <Link href="/terms">Terms of Use</Link>
            </div>
            <div className="col-span-1 flex items-center lg:px-8 px-4 justify-center">
              <a
                href=""
                className="rounded-full text-white p-1 md:text-2xl sm:text-2xl xs:text-xl"
                target="_blank"
              >
                <FaFacebook />
              </a>
              <a
                href="https://www.instagram.com/alquba_investment/"
                className="rounded-full text-[#0E2141] p-1 bg-white"
                target="_blank"
              >
                <FaInstagram />
              </a>
              <a
                href="https://linkedin.com/in/khasim-enoli-43211734"
                target="_blank"
                className="rounded-full text-[#0E2141] p-1 bg-white ms-1"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
          <div className="space-x-8  text-end lg:text-4xl md:text-3xl sm:text-3xl xs:text-2xl md:mt-0 mt-5">
            <Link href="/career" className="text-white ">
              Career
            </Link>
          </div>
        </section>
      </footer>
    </>
  );
}
