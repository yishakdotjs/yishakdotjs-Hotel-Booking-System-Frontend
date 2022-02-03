import React from "react";
import { Helmet } from "react-helmet";

import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

function BookNow() {
  return (
    <div>
      <Helmet>
        <title>Book Now - Hotel Booking Website</title>
      </Helmet>

      <Navbar />

      <div className="container">
        <h1 className="text-center mt-5 bookNow__title">Book Now</h1>
        <div className="row justify-content-center">
          <div className="col-md-6"></div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default BookNow;
