import React from "react";

import "./BookNow.css";
import countryList from "../../data/country_list.json";

function BookNow() {
  return (
    <div className="bookNow mt-5 pt-5 pb-5">
      <div className="container">
        <h1 className="text-center bookNow__title mb-0">Book Now</h1>
        <form className="mt-5">
          <div className="row">
            <div className="col-md-3">
              <label htmlFor="full_name" className="bookNow__form__label">
                Full Name
              </label>
              <input type="text" id="full_name" className="form-control" />
            </div>
            <div className="col-md-3">
              <label htmlFor="email" className="bookNow__form__label">
                Email
              </label>
              <input type="text" id="email" className="form-control" />
            </div>
            <div className="col-md-3">
              <label htmlFor="phone" className="bookNow__form__label">
                Phone (09XXXXXXXX)
              </label>
              <input type="text" id="phone" className="form-control" />
            </div>
            <div className="col-md-3">
              <label htmlFor="country" className="bookNow__form__label">
                Country
              </label>
              <select className="form-control" id="country">
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
              <label htmlFor="check_in" className="bookNow__form__label">
                Check In
              </label>
              <input type="date" id="check_in" className="form-control" />
            </div>
            <div className="col-md-3">
              <label htmlFor="check_out" className="bookNow__form__label">
                Check Out
              </label>
              <input type="date" id="check_out" className="form-control" />
            </div>
            <div className="col-md-3">
              <label htmlFor="adult" className="bookNow__form__label">
                Adult (age: 12+)
              </label>
              <input type="number" id="adult" className="form-control" />
            </div>
            <div className="col-md-3">
              <label htmlFor="child" className="bookNow__form__label">
                Child ( age: 4-11)
              </label>
              <input
                type="number"
                id="child"
                className="form-control"
                value={0}
              />
            </div>
          </div>

          <h4 className="text-center mt-5 bookNow__form__subTitle">Rooms</h4>
          <div className="row mt-3">
            <div className="col-md-4">
              <label htmlFor="rooms" className="bookNow__form__label">
                Rooms
              </label>
              <input
                type="number"
                id="rooms"
                className="form-control"
                value={1}
              />
            </div>
            <div className="col-md-4">
              <label htmlFor="room_type" className="bookNow__form__label">
                Room type
              </label>
              <select className="form-control" id="room_type">
                <option value="">Standard</option>
                <option value="">Twin</option>
                <option value="">Suite</option>
                <option value="">Family</option>
                <option value="">Presidential Suite</option>
                <option value="">Apartment-Double</option>
                <option value="">Apartment-Family</option>
              </select>
            </div>
            <div className="col-md-4 d-flex align-items-center justify-content-center">
              <button type="button" className="btn btn-primary mr-2">
                Add
              </button>
              <button type="button" className="btn btn-outline-primary">
                Remove
              </button>
            </div>
          </div>

          <button className="button mt-4 w-100">Book Now</button>
        </form>
      </div>
    </div>
  );
}

export default BookNow;
