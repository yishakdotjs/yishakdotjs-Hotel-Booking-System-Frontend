import React, { useEffect, useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";

import axios from "../../axios";

import { useStateValue } from "../../context/StateProvider";
import { actionTypes } from "../../context/reducer";

import "./User.css";
import Sidebar from "./Sidebar";
import Helmet from "react-helmet";

function Admin() {
  const [state, dispatch] = useStateValue();
  const [users, setUsers] = useState();

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
        .get("/api/users/list_all", {
          headers: { Authorization: `${state.accessToken}` },
        })
        .then((data) => {
          setUsers(data.data);
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
      <Helmet>
        <title>Admin - BSS Hotel</title>
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

            <h2>Users</h2>
            <div className="table-responsive">
              <table className="table table-striped table-sm">
                <thead>
                  <tr>
                    <th scope="col">Full Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone Number</th>
                    <th scope="col">Gender</th>
                    <th scope="col">Nationality</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {users === undefined
                    ? null
                    : users.map((user) => (
                        <tr key={user._id}>
                          <td>{user.full_name}</td>
                          <td>{user.email}</td>
                          <td>{user.mobile_number}</td>
                          <td>{user.gender}</td>
                          <td>{user.nationality}</td>
                          <td>
                            <button
                              className="btn btn-sm btn-danger"
                              onClick={() => {
                                axios
                                  .delete("/api/users/delete/" + user._id, {
                                    headers: {
                                      Authorization: `${state.accessToken}`,
                                    },
                                  })
                                  .then((response) => {
                                    if (response.data.msg === "success") {
                                      axios
                                        .get("/api/users/list_all", {
                                          headers: {
                                            Authorization: `${state.accessToken}`,
                                          },
                                        })
                                        .then((data) => {
                                          setUsers(data.data);
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

export default Admin;
