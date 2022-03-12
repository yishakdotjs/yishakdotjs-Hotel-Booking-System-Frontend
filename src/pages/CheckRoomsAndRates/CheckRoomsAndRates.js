import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";

import axios from "../../axios";

import "./CheckRoomsAndRates.css";

import { useStateValue } from "../../context/StateProvider";
import { actionTypes } from "../../context/reducer";

function CheckRoomsAndRates() {
  const [rooms, setRooms] = useState();
  const [state, dispatch] = useStateValue();

  const history = useHistory();

  useEffect(() => {
    if (state.booking.checkIn === null) {
      history.push("/");
    }

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

  function handleBook(id) {
    dispatch({
      type: actionTypes.CHECK_RATES,
      roomId: id,
    });

    history.push("/user-details");
    // console.log(state);
  }
  return (
    <div>
      <div className="container mt-5 mb-5">
        <h1 className="text-center check_rooms_and_rate__title">
          Check Rooms and Rates
        </h1>

        <div className="row">
          {rooms === undefined ? null : (
            <>
              {rooms.map((room) => (
                <div className="col-md-4 mt-5" key={room._id}>
                  <img src={room.imageurls[0]} className="rooms__room"></img>
                  <h6 className="mt-3">{room.name}</h6>
                  <button
                    onClick={() => handleBook(room._id)}
                    className="button w-100"
                  >
                    Book From ${room.rentperday}
                  </button>
                </div>
              ))}
            </>
          )}
        </div>

        <div className="d-flex align-items-center justify-content-center">
          <Link className="button mt-5" to="/">
            Go Back
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CheckRoomsAndRates;
