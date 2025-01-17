// pages/about.js
import React from "react";
import LayoutRoutes from "../LayoutRoutes";

const About = () => {
  return (
    <LayoutRoutes>
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold">About Us</h1>
        <p className="mt-4 text-lg">
          Welcome to AL-QUBA Investment LLC! We offer reliable investment
          solutions to help you grow your wealth with trust and integrity. Our
          mission is to provide the best financial services and opportunities to
          our clients.
        </p>
        {/* Add more content or sections as needed */}
      </div>
    </LayoutRoutes>
  );
};

export default About;
