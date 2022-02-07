import React, { useEffect, useRef } from "react";
import { Route, Switch } from "react-router-dom";

import { useStateValue } from "./context/StateProvider";
// import { actionTypes } from "./context/reducer";

import "./App.css";
import "./style/css/all.min.css";
import "./style/css/bootstrap.min.css";
import "./style/css/buttons.css";

import Home from "./pages/Home";
import Login from "./pages/Login/Login";
import Room from "./pages/Room/Room";

function App() {
  const [state] = useStateValue();

  const loading = useRef();

  useEffect(() => {
    if (state.isLoading === true) {
      loading.current.classList.remove("d-none");
    } else if (state.isLoading === false) {
      loading.current.classList.add("d-none");
    }
  }, [state.isLoading]);
  return (
    <div>
      <div className="loader d-none" ref={loading}>
        <div className="spinner-border text-light" role="status"></div>
      </div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/room/:id" component={Room} />
      </Switch>
    </div>
  );
}

export default App;
