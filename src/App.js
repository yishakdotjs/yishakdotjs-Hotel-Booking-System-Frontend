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

import User from "./pages/Admin/User";
import Rooms from "./pages/Admin/Rooms/Rooms";
import CreateRoom from "./pages/Admin/Rooms/CreateRoom";
import EditRoom from "./pages/Admin/Rooms/EditRoom";
import CheckRoomsAndRates from "./pages/CheckRoomsAndRates/CheckRoomsAndRates";
import UserDetails from "./pages/UserDetails/UserDetails";
import Booking from "./pages/Admin/Booking/Booking";

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
        <Route
          exact
          path="/check-rooms-and-rates"
          component={CheckRoomsAndRates}
        />
        <Route exact path="/user-details" component={UserDetails} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/room/:id" component={Room} />

        <Route exact path="/admin" component={User} />
        <Route exact path="/admin/rooms" component={Rooms} />
        <Route exact path="/admin/booking" component={Booking} />
        <Route exact path="/admin/rooms/create" component={CreateRoom} />
        <Route exact path="/admin/rooms/edit/:id" component={EditRoom} />
      </Switch>
    </div>
  );
}

export default App;
