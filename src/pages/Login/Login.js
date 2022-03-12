import React, { useRef, useState } from "react";
import { Helmet } from "react-helmet";
import { Link, useHistory } from "react-router-dom";

import { useStateValue } from "../../context/StateProvider";
import { actionTypes } from "../../context/reducer";

import axios from "../../axios";

import "./Login.css";

function Login() {
  const [, dispatch] = useStateValue();
  const history = useHistory();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const [error, setError] = useState();

  const alertBox = useRef();

  function showAlert() {
    if (alertBox.current.classList.contains("d-none")) {
      alertBox.current.classList.remove("d-none");
    }
  }

  function hideAlert() {
    if (!alertBox.current.classList.contains("d-none")) {
      alertBox.current.classList.add("d-none");
    }
  }

  function showLoading() {
    dispatch({
      type: actionTypes.LOADING,
      isLoading: true,
    });
  }

  function hideLoading() {
    dispatch({
      type: actionTypes.LOADING,
      isLoading: false,
    });
  }

  function handleLogin(e) {
    e.preventDefault();

    showLoading();

    axios
      .post("/api/users/login", {
        email,
        password,
      })
      .then((response) => {
        hideLoading();
        hideAlert();
        dispatch({
          type: actionTypes.AUTH,
          isAuth: true,
          accessToken: response.data.accesstoken,
        });
        history.push("/admin");
      })
      .catch((err) => {
        hideLoading();
        if (err.response === undefined) {
          alert("Something Went Wrong");
        } else {
          showAlert();
          setError(err.response.data.msg);
        }
      });
  }

  return (
    <div>
      <Helmet>
        <title>Login - BSS Hotel</title>
      </Helmet>
      <div className="register d-flex align-items-center justify-content-center">
        <div className="row justify-content-center w-100">
          <div className="col-md-4">
            <h1 className="text-center register__title">Login</h1>
            <div className="alert alert-danger mt-3 mb-3 d-none" ref={alertBox}>
              {error}
            </div>
            <form className="mt-3" onSubmit={(e) => handleLogin(e)}>
              <input
                type="email"
                className="form-control mt-2"
                placeholder="Email..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                className="form-control mt-2"
                placeholder="Password..."
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button type="submit" className="button mt-2 w-100">
                Login
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

export default Login;
