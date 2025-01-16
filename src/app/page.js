// pages/index.js (HomePage in Next.js)
"use client"; 
import "./globals.css";

import { useEffect } from "react";
import HLanding from "../components/HomePages/HLanding";
// import Image from "next/image";
// import SEOHelmet from "../components/SEOHelmet/SEOHelmet"; // Customize if needed
import logo from "../../public/assets/logo.png";
// import ScheduleMeeting from "../components/HomePages/ScheduleMeeting";
// import GrowAndCarousel from "../components/HomePages/GrowAndCarousel";
// import ClientsAndReview from "../components/HomePages/ClientsAndReview";
// import DirectorMessage from "../components/HomePages/DirectorMessage";
// import NewsAndStories from "../components/HomePages/NewsAndStories";
// import InvestmenrScheme from "../components/HomePages/InvestmenrScheme";
// import { useRouter } from "next/router";
import { useRouter } from "next/navigation";
import Head from "next/head";

export default function Home() {
  const router = useRouter();

  const handleToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    handleToTop();
  }, [router.asPath]);

  return (
    <div className="relative">
      {/* SEO Meta Tags */}
      <Head>
        <title>AL-QUBA Investment LLC</title>
        <meta
          name="description"
          content="AL-QUBA Investment LLC offers reliable investment solutions to grow your wealth with trust and integrity. Join us today!"
        />
        <meta
          name="keywords"
          content="investment, financial solutions, AL-QUBA, wealth management, investment opportunities"
        />
        <meta property="og:image" content={logo} />
        <meta property="og:url" content="https://www.alqubainvestment.com/" />
      </Head>

      {/* Components */}
      <HLanding />
      {/* <ScheduleMeeting />
      <GrowAndCarousel />
      <InvestmenrScheme />
      <ClientsAndReview />
      <DirectorMessage />
      <NewsAndStories /> */}
    </div>
  );
}
