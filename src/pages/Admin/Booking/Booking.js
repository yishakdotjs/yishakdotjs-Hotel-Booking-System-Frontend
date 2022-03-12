import React, { useEffect, useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";

import axios from "../../../axios";

import { useStateValue } from "../../../context/StateProvider";
import { actionTypes } from "../../../context/reducer";

import Sidebar from "./../Sidebar";
import Helmet from "react-helmet";

function Booking() {
  const [state, dispatch] = useStateValue();
  const [bookings, setBookings] = useState();

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
        .get("/api/booking/list_all_reservations")
        .then((data) => {
          setBookings(data.data.reservations);
        })
        .catch((err) => {
          alert(
            "Something went wrong. Please try again by refreshing the page."
          );
          console.log(err);
        });
    }
  }, []);
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
              <h2>Bookings</h2>
            </div>
            <div className="table-responsive">
              <table className="table table-striped table-sm">
                <thead>
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Room Id</th>
                    <th scope="col">Room Amount</th>
                    <th scope="col">paymentStatus</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>

                <tbody>
                  {bookings === undefined
                    ? null
                    : bookings.map((book) => (
                        <tr key={book._id}>
                          <td>{book.bookingInfo[0].pax[0].name}</td>
                          <td>{book.bookingInfo[0].roomType}</td>
                          <td>{book.bookingInfo[0].roomAmount}</td>
                          <td>{book.paymentStatus}</td>
                          <td>
                            {/* <Link
                              to={"/admin/rooms/edit/" + room._id}
                              className="btn btn-sm btn-primary mr-1"
                            >
                              Edit
                            </Link> */}
                            <button
                              className="btn btn-sm btn-danger"
                              onClick={() => {
                                axios
                                  .delete(
                                    "/api/booking/delete_reservation/" +
                                      book._id,
                                    {
                                      headers: {
                                        Authorization: `${state.accessToken}`,
                                      },
                                    }
                                  )
                                  .then((response) => {
                                    axios
                                      .get("/api/booking/list_all_reservations")
                                      .then((data) => {
                                        setBookings(data.data.reservations);
                                      })
                                      .catch((err) => {
                                        alert(
                                          "Something went wrong. Please try again by refreshing the page."
                                        );
                                      });
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

export default Booking;
