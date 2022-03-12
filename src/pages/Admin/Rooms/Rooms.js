import React, { useEffect, useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";

import axios from "../../../axios";

import { useStateValue } from "../../../context/StateProvider";
import { actionTypes } from "../../../context/reducer";

import Sidebar from "./../Sidebar";
import Helmet from "react-helmet";

function Rooms() {
  const [state, dispatch] = useStateValue();
  const [rooms, setRooms] = useState();

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

  useEffect(() => {
    if (state.isAuth === true) {
      axios
        .get("/api/rooms")
        .then((data) => {
          setRooms(data.data.rooms);
        })
        .catch((err) => {
          alert(
            "Something went wrong. Please try again by refreshing the page."
          );
        });
    }
  });

  return (
    <div>
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
              <h2>Rooms</h2>
              <Link
                to="/admin/rooms/create"
                className="btn btn-lg btn-secondary"
              >
                Add Room
              </Link>
            </div>
            <div className="table-responsive">
              <table className="table table-striped table-sm">
                <thead>
                  <tr>
                    <th scope="col">Room Name</th>
                    <th scope="col">Type</th>
                    <th scope="col">Rent Per Day</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {rooms === undefined
                    ? null
                    : rooms.map((room) => (
                        <tr key={room._id}>
                          <td>{room.name}</td>
                          <td>{room.type}</td>
                          <td>{room.rentperday}</td>
                          <td>
                            <Link
                              to={"/admin/rooms/edit/" + room._id}
                              className="btn btn-sm btn-primary mr-1"
                            >
                              Edit
                            </Link>
                            <button
                              className="btn btn-sm btn-danger"
                              onClick={() => {
                                axios
                                  .delete("/api/rooms/" + room._id, {
                                    headers: {
                                      Authorization: `${state.accessToken}`,
                                    },
                                  })
                                  .then((response) => {
                                    if (response.data.msg === "success") {
                                      axios
                                        .get("/api/rooms")
                                        .then((data) => {
                                          setRooms(data.data.rooms);
                                        })
                                        .catch((err) => {
                                          alert(
                                            "Something went wrong. Please try again by refreshing the page."
                                          );
                                        });
                                    }
                                  })
                                  .catch((err) => {
                                    alert("something went wrong");
                                  });
                              }}
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))}
                </tbody>
              </table>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default Rooms;
