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

function Home() {
  const [, dispatch] = useStateValue();

  const aboutSection = useRef();
  const contactSection = useRef();
  const bookNowSection = useRef();
  const roomsSection = useRef();

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
  return (
    <div>
      <Helmet>
        <title>Home - BSS Hotel</title>
      </Helmet>
      <Navbar
        scrollToAbout={scrollToAbout}
        scrollToContact={scrollToContact}
        scrollToBookNow={scrollToBookNow}
        scrollToRooms={scrollToRooms}
      />
      <Showcase />
      <div ref={roomsSection}>
        <Rooms />
      </div>
      <Features />
      <div ref={aboutSection}>
        <About />
      </div>
      <div ref={contactSection}>
        <Contact />
      </div>
      <div ref={bookNowSection}>
        <BookNow />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
