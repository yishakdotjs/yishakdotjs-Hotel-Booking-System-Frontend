import React from "react";

import "./Contact.css";

import location from "../../style/img/location.png";

function Contact() {
  return (
    <div>
      <h1 className="contact__title text-center mt-5">Contact Us</h1>
      <div className="container">
        <div className="row justify-content-between align-items-center m-0">
          <div className="col-md-6 mt-4">
            <form>
              <input
                type="text"
                placeholder="First Name..."
                className="form-control"
              />
              <input
                type="email"
                placeholder="Email..."
                className="form-control mt-3"
              />
              <textarea
                className="form-control mt-3"
                rows="5"
                placeholder="Message..."
              ></textarea>
              <button type="submit" className="button mt-3 w-100">
                Send
              </button>
            </form>
          </div>
          <div className="col-md-6 mt-4">
            <img
              src={location}
              alt="Hotel Location"
              className="contact__location"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
