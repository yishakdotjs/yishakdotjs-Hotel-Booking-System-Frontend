import React, { useRef } from "react";
import Helmet from "react-helmet";

import Navbar from "../components/Navbar/Navbar";
import Showcase from "../components/Showcase/Showcase";
import Features from "../components/Features/Features";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";

function Home() {
  const aboutSection = useRef();
  const contactSection = useRef();

  function scrollToAbout() {
    aboutSection.current.scrollIntoView();
  }

  function scrollToContact() {
    contactSection.current.scrollIntoView();
  }
  return (
    <div>
      <Helmet>
        <title>Home - Hotel Booking Website</title>
      </Helmet>
      <Navbar scrollToAbout={scrollToAbout} scrollToContact={scrollToContact} />
      <Showcase />
      <Features />
      <div ref={aboutSection}>
        <About />
      </div>
      <div ref={contactSection}>
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
