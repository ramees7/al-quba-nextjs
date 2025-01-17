// components/Layout.js

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function LayoutRoutes({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main> {/* This will render the content of each page */}
      <Footer />
    </>
  );
}
