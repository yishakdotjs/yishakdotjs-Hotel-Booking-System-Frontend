import React from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";
import "./style/css/all.min.css";
import "./style/css/bootstrap.min.css";
import "./style/css/buttons.css";

import Home from "./pages/Home";
import BookNow from "./pages/BookNow";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/book-now" component={BookNow} />
      </Switch>
    </div>
  );
}

export default App;
