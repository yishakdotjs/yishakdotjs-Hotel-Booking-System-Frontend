import React from "react";

import "./Features.css";

function Features() {
  return (
    <div>
      <h1 className="text-center mt-5 features__title">Our Features</h1>
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-md-4 mt-4">
            <div className="features__feature feature1">
              <h4 className="features__feature__title text-center">
                Simple Booking
              </h4>
            </div>
          </div>
          <div className="col-md-4 mt-4">
            <div className="features__feature feature2">
              <h4 className="features__feature__title text-center">
                Fast and Friendly First Contact
              </h4>
            </div>
          </div>
          <div className="col-md-4 mt-4">
            <div className="features__feature feature3">
              <h4 className="features__feature__title text-center">
                A social lobby
              </h4>
            </div>
          </div>
        </div>
        <div className="row justify-content-between">
          <div className="col-md-4 mt-4">
            <div className="features__feature feature4">
              <h4 className="features__feature__title text-center">
                On-Site Services That Delight
              </h4>
            </div>
          </div>
          <div className="col-md-4 mt-4">
            <div className="features__feature feature5">
              <h4 className="features__feature__title text-center">
                A Variety of Excellent Food and Drink
              </h4>
            </div>
          </div>
          <div className="col-md-4 mt-4">
            <div className="features__feature feature6">
              <h4 className="features__feature__title text-center">
                24 / 7 fitness center
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
