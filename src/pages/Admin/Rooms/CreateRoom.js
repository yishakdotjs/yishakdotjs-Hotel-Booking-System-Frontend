import React, { useEffect, useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";

import axios from "../../../axios";

import { useStateValue } from "../../../context/StateProvider";
import { actionTypes } from "../../../context/reducer";

import Sidebar from "./../Sidebar";
import Helmet from "react-helmet";

function CreateRoom() {
  const [state, dispatch] = useStateValue();

  const [name, setName] = useState("");
  const [rentPerDay, setRentPerDay] = useState("");
  const [type, setType] = useState("");
  const [maxCount, setMaxCount] = useState("");
  const [images, setImages] = useState("");
  const [description, setDescription] = useState("");

  const history = useHistory();

  const sideBar = useRef();

  function logout() {
    dispatch({
      type: actionTypes.AUTH,
      isAuth: false,
      accessToken: null,
    });
  }

  function toggleSidebar() {
    sideBar.current.classList.toggle("collapse");
  }

  useEffect(() => {
    if (state.isAuth === false) {
      return history.push("/login");
    }
  }, [state.isAuth]);

  function handleSubmit(e) {
    e.preventDefault();

    if (
      (name === "" || rentPerDay === "" || type === "" || maxCount === "",
      images === "",
      description === "")
    ) {
      alert("Each Field is Required");
    } else {
      axios
        .post(
          "/api/rooms/create",
          {
            name,
            rentPerDay,
            type,
            maxCount,
            images: images.split(","),
            description,
          },
          {
            headers: { Authorization: `${state.accessToken}` },
          }
        )
        .then((response) => {
          if (response.data.msg === "success") {
            history.push("/admin/rooms");
          }
        })
        .catch((err) => {
          alert("Something went wrong");
        });
    }
  }
  return (
    <div>
      <Helmet>
        <title>Create Room - BSS Hotel</title>
      </Helmet>

      <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
        <Link to="/admin" className="navbar-brand col-md-3 col-lg-2 me-0 px-3">
          BSS Admin
        </Link>
        <button
          className="navbar-toggler position-absolute d-md-none collapsed"
          type="button"
          onClick={toggleSidebar}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-nav">
          <div className="nav-item text-nowrap">
            <Link to="" onClick={logout} className="nav-link px-3" href="#">
              Sign out
            </Link>
          </div>
        </div>
      </header>

      <div className="container-fluid">
        <div className="row">
          <nav
            id="sidebarMenu"
            className="col-md-3 col-lg-2 d-md-block bg-light collapse"
            ref={sideBar}
          >
            <Sidebar />
          </nav>

          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h1 className="h2">Dashboard</h1>
            </div>

            <div className="d-flex justify-content-between mb-3">
              <h2>Add Room</h2>
            </div>

            <form onSubmit={handleSubmit}>
              <input
                type="text"
                className="form-control mt-2"
                placeholder="Name..."
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="text"
                className="number form-control mt-2"
                placeholder="Rent Per Day"
                value={rentPerDay}
                onChange={(e) => setRentPerDay(e.target.value)}
              />
              <input
                type="text"
                className="form-control mt-2"
                placeholder="Type..."
                value={type}
                onChange={(e) => setType(e.target.value)}
              />
              <input
                type="text"
                className="form-control mt-2"
                placeholder="Max Count..."
                value={maxCount}
                onChange={(e) => setMaxCount(e.target.value)}
              />

              <input
                type="text"
                className="form-control mt-2"
                placeholder="Images..."
                value={images}
                onChange={(e) => setImages(e.target.value)}
              />

              <textarea
                rows="5"
                className="form-control mt-2"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>

              <button
                type="submit"
                className="btn btn-lg btn-primary btn-block mt-2"
              >
                Submit
              </button>
            </form>
          </main>
        </div>
      </div>
    </div>
  );
}

export default CreateRoom;
