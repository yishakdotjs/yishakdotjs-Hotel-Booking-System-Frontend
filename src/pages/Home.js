import React, { useRef } from "react";
import Helmet from "react-helmet";

import { useStateValue } from "../context/StateProvider";
import { actionTypes } from "../context/reducer";

import Navbar from "../components/Navbar/Navbar";
import Showcase from "../components/Showcase/Showcase";
import Features from "../components/Features/Features";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import BookNow from "../components/BookNow/BookNow";
import Rooms from "../components/Rooms/Rooms";
import Gallery from "../components/Gallery/Gallery";

function Home() {
  const [, dispatch] = useStateValue();

  const aboutSection = useRef();
  const contactSection = useRef();
  const bookNowSection = useRef();
  const roomsSection = useRef();
  const accommodationSection = useRef();
  const gallerySection = useRef();
  const homeSection = useRef();

  function scrollToAbout() {
    dispatch({
      type: actionTypes.TOGGLE_NAV,
      navToggled: false,
    });
    aboutSection.current.scrollIntoView({ behavior: "smooth" });
  }

  function scrollToContact() {
    dispatch({
      type: actionTypes.TOGGLE_NAV,
      navToggled: false,
    });
    contactSection.current.scrollIntoView({ behavior: "smooth" });
  }

  function scrollToBookNow() {
    dispatch({
      type: actionTypes.TOGGLE_NAV,
      navToggled: false,
    });
    bookNowSection.current.scrollIntoView({ behavior: "smooth" });
  }

  function scrollToRooms() {
    dispatch({
      type: actionTypes.TOGGLE_NAV,
      navToggled: false,
    });
    roomsSection.current.scrollIntoView({ behavior: "smooth" });
  }

  function scrollToAccommodations() {
    dispatch({
      type: actionTypes.TOGGLE_NAV,
      navToggled: false,
    });
    accommodationSection.current.scrollIntoView({ behavior: "smooth" });
  }

  function scrollToGallery() {
    dispatch({
      type: actionTypes.TOGGLE_NAV,
      navToggled: false,
    });
    gallerySection.current.scrollIntoView({ behavior: "smooth" });
  }

  function scrollToHome() {
    dispatch({
      type: actionTypes.TOGGLE_NAV,
      navToggled: false,
    });
    homeSection.current.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <div>
      <Helmet>
        <title>Home - BSS Hotel</title>
      </Helmet>
      <div ref={homeSection}>
        <Navbar
          scrollToAbout={scrollToAbout}
          scrollToContact={scrollToContact}
          scrollToBookNow={scrollToBookNow}
          scrollToRooms={scrollToRooms}
          scrollToGallery={scrollToGallery}
          scrollToAccommodations={scrollToAccommodations}
          scrollToHome={scrollToHome}
        />
      </div>
      <Showcase scrollToBookNow={scrollToBookNow} />
      <div ref={aboutSection}>
        <About />
      </div>
      <div ref={gallerySection}>
        <Gallery />
      </div>
      <div ref={contactSection}>
        <Contact />
      </div>
      <div ref={roomsSection}>
        <Rooms />
      </div>
      <div ref={accommodationSection}>
        <Features />
      </div>
      <div ref={bookNowSection}>
        <BookNow />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
