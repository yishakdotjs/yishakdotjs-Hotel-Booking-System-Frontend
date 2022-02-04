import React from "react";
import { Link } from "react-router-dom";

import "./Rooms.css";

function Rooms() {
  return (
    <div className="container">
      <h1 className="mt-5 text-center rooms__title">Rooms</h1>
      <div className="row">
        <div className="col-md-4">
          <div className="rooms__room">
            <h4>Guest Room</h4>
          </div>
        </div>
        <div className="col-md-4">
          <div className="rooms__room">
            <h4>Suits</h4>
          </div>
        </div>
        <div className="col-md-4">
          <div className="rooms__room">
            <h4>Executive</h4>
          </div>
        </div>

        <div className="w-100 mt-3 d-flex align-items-center justify-content-center">
          <button to="/rooms" className="button">
            Load More
          </button>
        </div>
      </div>
    </div>
  );
}

export default Rooms;
