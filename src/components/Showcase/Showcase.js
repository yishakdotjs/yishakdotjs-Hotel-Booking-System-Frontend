import React from "react";

import "./Showcase.css";
// import showcaseImage from "../../style/img/showcase.jpg";

function Showcase(props) {
  return (
    <div className="showcase d-flex align-items-center">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-8">
            <h1 className="showcase__hero">
              Rent a hotel room for your vacation
            </h1>
            <button
              to="/book-now"
              className="button mt-3 mr-3"
              onClick={props.scrollToBookNow}
            >
              Book Now
            </button>
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
    </div>
  );
}

export default Showcase;
