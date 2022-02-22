import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./Rooms.css";
import axios from "../../axios";

function Rooms() {
  const [rooms, setRooms] = useState();

  useEffect(() => {
    async function fetchData() {
      await axios
        .get("/api/rooms")
        .then((data) => {
          setRooms(data.data.rooms);
        })
        .catch((err) => {
          // alert("Something went wrong please refresh the page");
          console.log(err);
        });
    }

    fetchData();
  }, []);
  return (
    <div className="container">
      <h1 className="text-center rooms__title mt-5">Rooms</h1>
      <div className="row">
        {rooms === undefined ? null : (
          <>
            {rooms.map((room) => (
              <div className="col-md-4 mt-5" key={room._id}>
                <img src={room.imageurls[0]} className="rooms__room"></img>
                <h6 className="mt-3">{room.name}</h6>
                <Link to={"/room/" + room._id} className="button w-100">
                  See Details
                </Link>
              </div>
            ))}
          </>
        )}

        {/* <div className="w-100 mt-3 d-flex align-items-center justify-content-center">
          <button className="button">Show All</button>
        </div> */}
      </div>
    </div>
  );
}

export default Rooms;
