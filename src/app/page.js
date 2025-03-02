// // pages/index.js (HomePage in Next.js)
// "use client";
// import "./globals.css";

// import { useEffect } from "react";
// import logo from "../../public/assets/logo.png";

// import { useRouter } from "next/navigation";
// import Head from "next/head";
// import HLanding from "@/components/HomePages/HLanding";
// import InvestmenrScheme from "@/components/HomePages/InvestmenrScheme";
// import ScheduleMeeting from "@/components/HomePages/ScheduleMeeting";
// import GrowAndCarousel from "@/components/HomePages/GrowAndCarousel";
// import ClientsAndReview from "@/components/HomePages/ClientsAndReview";
// import DirectorMessage from "@/components/HomePages/DirectorMessage";
// import NewsAndStories from "@/components/HomePages/NewsAndStories";

// export default function Home() {
//   const router = useRouter();

//   const handleToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   };

//   useEffect(() => {
//     handleToTop();
//   }, [router.asPath]);

//   return (
//     <div className="relative">
//       {/* SEO Meta Tags */}
//       <Head>
//         <title>AL-QUBA Investment LLC</title>
//         <meta
//           name="description"
//           content="AL-QUBA Investment LLC offers reliable investment solutions to grow your wealth with trust and integrity. Join us today!"
//         />
//         <meta
//           name="keywords"
//           content="investment, financial solutions, AL-QUBA, wealth management, investment opportunities"
//         />
//         <meta property="og:image" content={logo} />
//         <meta property="og:url" content="https://www.alqubainvestment.com/" />
//       </Head>

//       <HLanding />
//       <ScheduleMeeting />
//       <GrowAndCarousel />
//       <InvestmenrScheme />
//       <ClientsAndReview />
//       <DirectorMessage />
//       <NewsAndStories /> 
//     </div>
//   );
// }


// pages/index.js (HomePage in Next.js)
"use client";
import "./globals.css";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Head from "next/head";
import logo from "../../public/assets/logo.png";
import HLanding from "@/components/HomePages/HLanding";
import ScheduleMeeting from "@/components/HomePages/ScheduleMeeting";
import GrowAndCarousel from "@/components/HomePages/GrowAndCarousel";
import ClientsAndReview from "@/components/HomePages/ClientsAndReview";
import DirectorMessage from "@/components/HomePages/DirectorMessage";
import NewsAndStories from "@/components/HomePages/NewsAndStories";
import LayoutRoutes from "@/app/LayoutRoutes";
import InvestmentScheme from "@/components/HomePages/InvestmentScheme";

// Importing LayoutRoutes

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
    <LayoutRoutes>
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

        <HLanding />
        <ScheduleMeeting />
        <GrowAndCarousel />
        <InvestmentScheme />
        <ClientsAndReview />
        <DirectorMessage />
        <NewsAndStories />
      </div>
    </LayoutRoutes>
  );
}
