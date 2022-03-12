import React, { useEffect, useRef, useState } from "react";

import countryList from "../../data/country_list.json";

import { Link, useHistory } from "react-router-dom";

import axios from "../../axios";

import "./UserDetails.css";

import { useStateValue } from "../../context/StateProvider";
import { actionTypes } from "../../context/reducer";

function UserDetails() {
  const [state, dispatch] = useStateValue();

  const skipPayment = useRef();

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [country, setCountry] = useState();
  const [address, setAddress] = useState();
  const [address2, setAddress2] = useState();
  const [zip, setZip] = useState();
  const [city, setCity] = useState();
  const [statee, setState] = useState();

  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();

    if (skipPayment.current.checked) {
      dispatch({
        type: actionTypes.LOADING,
        isLoading: true,
      });

      axios
        .post("/api/booking/add_reservation", {
          // userId: "null",
          // checkInDate: state.booking.checkIn,
          // checkOutDate: state.booking.checkOut,
          // paymentId: "null",
          // bookingInfo: [
          //   {
          //     pax: [
          //       {
          //         name: name,
          //         adultStatus: "null",
          //         gender: "null",
          //         age: "null",
          //       },
          //     ],
          //     roomType: "null",
          //     roomId: state.roomId,
          //     roomAmount: state.booking.room,
          //   },
          // ],
          userEmail: email,
          checkInDate: state.booking.checkIn,
          checkOutDate: state.booking.checkOut,
          paymentId: "null",
          bookCode: "null",
          paymentStatus: "not-paid",
          isPast: false,

          name: name,
          adultStatus: "null",
          gender: "null",
          age: 0,
          roomType: "null",
          roomID: state.booking.roomID,
          roomAmount: state.booking.room,
        })
        .then((response) => {
          dispatch({
            type: actionTypes.LOADING,
            isLoading: false,
          });
          alert(response.data.msg);
          history.push("/");
        })
        .catch((err) => {
          dispatch({
            type: actionTypes.LOADING,
            isLoading: false,
          });
          console.log(err.response);
          alert("Something Went Wrong");
        });
    } else {
      history.push("/payment");
    }
  }

  useEffect(() => {
    if (state.booking.checkIn === null) {
      history.push("/");
    }
  });
  return (
    <div className="user_details__container">
      <div className="container mb-5 mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <h4 className="text-center">Please Fill Out the Form Below</h4>
            <form onSubmit={handleSubmit}>
              <label htmlFor="full_name" className="mt-3">
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
              <label htmlFor="email" className="mt-3">
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
              <label htmlFor="phone" className="mt-3">
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
              <label htmlFor="country" className="mt-3">
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

              <label htmlFor="full_name" className="mt-3">
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
              <label htmlFor="email" className="mt-3">
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
              <label htmlFor="phone" className="mt-3">
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
              <label htmlFor="phone" className="mt-3">
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

              <label htmlFor="phone" className="mt-3">
                State
              </label>
              <input
                type="text"
                id="state"
                className="form-control"
                value={statee}
                onChange={(e) => {
                  setState(e.target.value);
                }}
              />

              <input
                type="checkbox"
                name="skip_payment"
                id="skip_payment"
                className="mt-4"
                ref={skipPayment}
              />
              <label htmlFor="skip_payment" className="mt-3 ml-1">
                Skip Payment For Now
              </label>

              <button type="submit" className="button w-100 mt-3">
                Submit
              </button>

              <div className="d-flex align-items-center justify-content-center">
                <Link to="/" className=" mt-3">
                  Go To Home Page
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDetails;
