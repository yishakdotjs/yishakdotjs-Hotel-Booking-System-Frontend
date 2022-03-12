import React, { useEffect, useRef, useState } from "react";

import { useStateValue } from "../../context/StateProvider";
import { actionTypes } from "../../context/reducer";

import { useHistory } from "react-router-dom";

import "./BookNow.css";
// import countryList from "../../data/country_list.json";
import axios from "../../axios";

function BookNow() {
  const [, dispatch] = useStateValue();

  const history = useHistory();

  // const [allRooms, setAllRooms] = useState();

  const [checkIn, setCheckIn] = useState();
  const [checkOut, setCheckOut] = useState();

  // const [adult, setAdult] = useState();
  // const [child, setChild] = useState(0);
  const [guest, setGuest] = useState(1);
  const [room, setRoom] = useState(1);
  // const [roomType, setRoomType] = useState();

  //
  // const [name, setName] = useState();
  // const [email, setEmail] = useState();
  // const [phone, setPhone] = useState();
  // const [country, setCountry] = useState();
  // const [address, setAddress] = useState();
  // const [address2, setAddress2] = useState();
  // const [zip, setZip] = useState();
  // const [city, setCity] = useState();
  // const [state, setState] = useState();

  const firstStage = useRef();
  const secondStage = useRef();
  const thirdStage = useRef();
  const fourthStage = useRef();

  const skipPayment = useRef();

  const progressBar = useRef();

  const [bookMsg, setBookMsg] = useState();

  function handleSubmit(e) {
    e.preventDefault();
  }

  useEffect(() => {
    progressBar.current.style = "width: 50%";
    progressBar.current.innerText = "50%";

    // async function getRooms() {
    //   await axios
    //     .get("/api/rooms/")
    //     .then((data) => {
    //       setAllRooms(data.data.rooms);
    //     })
    //     .catch((err) => {
    //       alert(
    //         "Something went wrong please try again by refreshing the website"
    //       );
    //     });
    // }

    // getRooms();
  }, []);

  function bookRoom() {}

  function changeStage(from, to) {
    if (from === 1 && to > from) {
      if (checkIn === undefined) {
        return alert("Check In is Required");
      } else if (checkOut === undefined) {
        return alert("Check Out is Required");
      }
    }
    if (from === 2 && to > from) {
      if (guest === undefined) {
        return alert("Adult In is Required");
      } else if (room === undefined) {
        return alert("Room is Required");
      }

      // else if (roomType === undefined) {
      //   return alert("Room Type is Required");
      // }
    }
    // if (from === 3 && to > from) {
    //   if (name === undefined) {
    //     return alert("Name In is Required");
    //   } else if (email === undefined) {
    //     return alert("Email is Required");
    //   } else if (phone === undefined) {
    //     return alert("Phone is Required");
    //   } else if (country === undefined) {
    //     return alert("Country is Required");
    //   } else if (address === undefined) {
    //     return alert("Address is Required");
    //   } else if (zip === undefined) {
    //     return alert("ZIP Code is Required");
    //   } else if (city === undefined) {
    //     return alert("City is Required");
    //   } else if (state === undefined) {
    //     return alert("State is Required");
    //   }
    // }

    if (to === 1) {
      firstStage.current.classList.remove("d-none");
      secondStage.current.classList.add("d-none");
      thirdStage.current.classList.add("d-none");
      fourthStage.current.classList.add("d-none");

      progressBar.current.style = "width: 50%";
      progressBar.current.innerText = "50%";
    }

    if (to === 2) {
      firstStage.current.classList.add("d-none");
      secondStage.current.classList.remove("d-none");
      thirdStage.current.classList.add("d-none");
      fourthStage.current.classList.add("d-none");

      progressBar.current.style = "width: 100%";
      progressBar.current.innerText = "100%";
    }

    // if (to === 3) {
    //   firstStage.current.classList.add("d-none");
    //   secondStage.current.classList.add("d-none");
    //   thirdStage.current.classList.remove("d-none");
    //   fourthStage.current.classList.add("d-none");

    //   progressBar.current.style = "width: 75%";
    //   progressBar.current.innerText = "75%";
    // }

    // if (to === 4) {
    //   firstStage.current.classList.add("d-none");
    //   secondStage.current.classList.add("d-none");
    //   thirdStage.current.classList.add("d-none");
    //   fourthStage.current.classList.remove("d-none");

    //   if (skipPayment.current.checked === true) {
    //     bookRoom();

    //     progressBar.current.style = "width: 100%";
    //     progressBar.current.innerText = "100%";
    //   } else {
    //     alert("Payment Will Happen Here");
    //   }
    // }
  }

  function checkRoomsAndRates() {
    dispatch({
      type: actionTypes.BOOKING,
      booking: {
        checkIn: checkIn,
        checkOut: checkOut,
        guest: guest,
        room: room,
        // roomType: roomType,
      },
    });

    history.push("/check-rooms-and-rates");
  }

  const checkInRef = useRef();
  const checkOutRef = useRef();

  useEffect(() => {
    var today = new Date().toISOString().split("T")[0];
    checkInRef.current.setAttribute("min", today);

    if (checkIn === undefined) {
      checkOutRef.current.disabled = true;
    } else {
      checkOutRef.current.disabled = false;
      checkOutRef.current.setAttribute("min", checkIn);
    }
  }, [checkIn]);

  return (
    <div className="bookNow mt-5 pt-5 pb-5">
      <div className="container">
        <h1 className="text-center bookNow__title">Book Now</h1>
        <div className="progress">
          <div
            className="progress-bar bg-success"
            role="progressbar"
            aria-valuenow="0"
            aria-valuemin="0"
            aria-valuemax="100"
            ref={progressBar}
          >
            0%
          </div>
        </div>
        <form className="mt-5" onSubmit={(e) => handleSubmit(e)}>
          {/* <button className="button mt-4 w-100">Book Now</button> */}

          {/* ---------------------------First Stage------------------------------------------ */}
          {/* ---------------------------First Stage------------------------------------------ */}
          {/* ---------------------------First Stage------------------------------------------ */}
          {/* ---------------------------First Stage------------------------------------------ */}
          {/* ---------------------------First Stage------------------------------------------ */}
          {/* ---------------------------First Stage------------------------------------------ */}
          {/* ---------------------------First Stage------------------------------------------ */}
          <div className="first" ref={firstStage}>
            <div className="mt-4 row">
              <div className="col-md-3">
                <label htmlFor="check_in" className="bookNow__form__label">
                  Check In
                </label>
                <input
                  ref={checkInRef}
                  type="date"
                  id="check_in"
                  className="form-control"
                  value={checkIn}
                  onChange={(e) => {
                    setCheckIn(e.target.value);
                  }}
                />
              </div>
              <div className="col-md-3">
                <label htmlFor="check_out" className="bookNow__form__label">
                  Check Out
                </label>
                <input
                  ref={checkOutRef}
                  type="date"
                  id="check_out"
                  className="form-control"
                  value={checkOut}
                  onChange={(e) => {
                    setCheckOut(e.target.value);
                  }}
                />
              </div>
            </div>
            <button onClick={() => changeStage(1, 2)} className="button mt-4">
              Next
            </button>
          </div>

          {/* ---------------------------------Second Stage--------------------------------- */}
          {/* ---------------------------------Second Stage--------------------------------- */}
          {/* ---------------------------------Second Stage--------------------------------- */}
          {/* ---------------------------------Second Stage--------------------------------- */}
          {/* ---------------------------------Second Stage--------------------------------- */}
          <div className="second d-none" ref={secondStage}>
            {/* <div className="row mt-4">
              <div className="col-md-3">
                <label htmlFor="adult" className="bookNow__form__label">
                  Adult (age: 12+)
                </label>
                <input
                  type="number"
                  id="adult"
                  className="form-control"
                  value={adult}
                  onChange={(e) => setAdult(e.target.value)}
                />
              </div>
              <div className="col-md-3">
                <label htmlFor="child" className="bookNow__form__label">
                  Child ( age: 4-11)
                </label>
                <input
                  type="number"
                  id="child"
                  className="form-control"
                  value={child}
                  onChange={(e) => setChild(e.target.value)}
                />
              </div>
            </div> */}

            <h4 className="text-center mt-5 bookNow__form__subTitle">Rooms</h4>
            <div className="row mt-3">
              <div className="col-md-4">
                <label htmlFor="rooms" className="bookNow__form__label">
                  Guest
                </label>
                <input
                  type="number"
                  id="guest"
                  className="form-control"
                  value={guest}
                  onChange={(e) => setGuest(e.target.value)}
                />
              </div>

              <div className="col-md-4">
                <label htmlFor="rooms" className="bookNow__form__label">
                  Rooms
                </label>
                <input
                  type="number"
                  id="rooms"
                  className="form-control"
                  value={room}
                  onChange={(e) => setRoom(e.target.value)}
                />
              </div>
              {/* <div className="col-md-4">
                <label htmlFor="room_type" className="bookNow__form__label">
                  Room type
                </label>
                <select
                  className="form-control"
                  id="room_type"
                  value={roomType}
                  onChange={(e) => setRoomType(e.target.value)}
                >
                  {allRooms === undefined ? null : (
                    <>
                      {allRooms.map((room) => (
                        <option value={room._id} key={room._id}>
                          {room.name}
                        </option>
                      ))}
                    </>
                  )}
                </select>
              </div> */}
              {/* <div className="col-md-4 d-flex align-items-center justify-content-center">
                <button type="button" className="btn btn-primary mr-2">
                  Add
                </button>
                <button type="button" className="btn btn-outline-primary">
                  Remove
                </button>
              </div> */}
            </div>
            <button onClick={() => changeStage(2, 1)} className="button mt-4">
              Previous
            </button>
            {/* <button onClick={() => changeStage(2, 3)} className="button mt-4">
              Next
            </button> */}
            <button onClick={checkRoomsAndRates} className="button mt-4">
              Check Rooms and Rates
            </button>
          </div>

          {/* --------------------------------Third Stage---------------------------------- */}
          {/* --------------------------------Third Stage---------------------------------- */}
          {/* --------------------------------Third Stage---------------------------------- */}
          {/* --------------------------------Third Stage---------------------------------- */}
          {/* --------------------------------Third Stage---------------------------------- */}
          <div className="third d-none" ref={thirdStage}>
            {/* <div className="row">
              <div className="col-md-3">
                <label htmlFor="full_name" className="bookNow__form__label">
                  Full Name
                </label>
                <input
                  type="text"
                  id="full_name"
                  className="form-control"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </div>
              <div className="col-md-3">
                <label htmlFor="email" className="bookNow__form__label">
                  Email
                </label>
                <input
                  type="text"
                  id="email"
                  className="form-control"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
              <div className="col-md-3">
                <label htmlFor="phone" className="bookNow__form__label">
                  Phone (09XXXXXXXX)
                </label>
                <input
                  type="text"
                  id="phone"
                  className="form-control"
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
                />
              </div>
              <div className="col-md-3">
                <label htmlFor="country" className="bookNow__form__label">
                  Country
                </label>
                <select
                  className="form-control"
                  id="country"
                  value={country}
                  onChange={(e) => {
                    setCountry(e.target.value);
                  }}
                >
                  {countryList.map((country) => (
                    <option value={country.code} key={country.code}>
                      {country.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="row mt-4">
              <div className="col-md-3">
                <label htmlFor="full_name" className="bookNow__form__label">
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  className="form-control"
                  value={address}
                  onChange={(e) => {
                    setAddress(e.target.value);
                  }}
                />
              </div>
              <div className="col-md-3">
                <label htmlFor="email" className="bookNow__form__label">
                  Address 2
                </label>
                <input
                  type="text"
                  id="address2"
                  className="form-control"
                  value={address2}
                  onChange={(e) => {
                    setAddress2(e.target.value);
                  }}
                />
              </div>
              <div className="col-md-3">
                <label htmlFor="phone" className="bookNow__form__label">
                  ZIP Code
                </label>
                <input
                  type="text"
                  id="zip"
                  className="form-control"
                  value={zip}
                  onChange={(e) => {
                    setZip(e.target.value);
                  }}
                />
              </div>
              <div className="col-md-3">
                <label htmlFor="phone" className="bookNow__form__label">
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  className="form-control"
                  value={city}
                  onChange={(e) => {
                    setCity(e.target.value);
                  }}
                />
              </div>
            </div>

            <div className="row mt-3">
              <div className="col-md-3">
                <label htmlFor="phone" className="bookNow__form__label">
                  State
                </label>
                <input
                  type="text"
                  id="state"
                  className="form-control"
                  value={state}
                  onChange={(e) => {
                    setState(e.target.value);
                  }}
                />
              </div>
            </div>

            <input
              type="checkbox"
              name="skip_payment"
              id="skip_payment"
              className="mt-4"
              ref={skipPayment}
            />
            <label htmlFor="skip_payment" className="bookNow__form__label ml-1">
              Skip Payment For Now
            </label>

            <br />

            <button onClick={() => changeStage(3, 2)} className="button mt-4">
              Previous
            </button>
            <button onClick={() => changeStage(3, 4)} className="button mt-4">
              Book
            </button> */}
          </div>
          <div ref={fourthStage} className="fourth d-none">
            <div className="d-flex align-items-center justify-content-center">
              <i className="fas fa-check bookNow__check"></i>
            </div>
            <h4 className="text-center bookNow__done mt-3">Room Booked</h4>
          </div>
        </form>
      </div>
    </div>
  );
}

export default BookNow;
