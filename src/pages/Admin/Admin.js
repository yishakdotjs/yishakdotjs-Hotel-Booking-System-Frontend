import React, { useEffect, useRef } from "react";
import { Link, useHistory } from "react-router-dom";

import { useStateValue } from "../../context/StateProvider";
import { actionTypes } from "../../context/reducer";

import "./Admin.css";
import Sidebar from "./Sidebar";

function Admin() {
  const [state, dispatch] = useStateValue();

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
  return (
    <div>
      <header class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
        <Link to="/admin" class="navbar-brand col-md-3 col-lg-2 me-0 px-3">
          BSS Admin
        </Link>
        <button
          class="navbar-toggler position-absolute d-md-none collapsed"
          type="button"
          onClick={toggleSidebar}
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="navbar-nav">
          <div class="nav-item text-nowrap">
            <Link to="" onClick={logout} class="nav-link px-3" href="#">
              Sign out
            </Link>
          </div>
        </div>
      </header>

      <div class="container-fluid">
        <div class="row">
          <nav
            id="sidebarMenu"
            class="col-md-3 col-lg-2 d-md-block bg-light collapse"
            ref={sideBar}
          >
            <Sidebar />
          </nav>

          <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h1 class="h2">Dashboard</h1>
            </div>

            <h2>Users</h2>
            <div class="table-responsive">
              <table class="table table-striped table-sm">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Header</th>
                    <th scope="col">Header</th>
                    <th scope="col">Header</th>
                    <th scope="col">Header</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1,001</td>
                    <td>random</td>
                    <td>data</td>
                    <td>placeholder</td>
                    <td>text</td>
                  </tr>
                  <tr>
                    <td>1,002</td>
                    <td>placeholder</td>
                    <td>irrelevant</td>
                    <td>visual</td>
                    <td>layout</td>
                  </tr>
                  <tr>
                    <td>1,003</td>
                    <td>data</td>
                    <td>rich</td>
                    <td>dashboard</td>
                    <td>tabular</td>
                  </tr>
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
