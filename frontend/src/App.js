import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.scss";
import Snow from "react-snow-effect";
import LandingPage from "./components/LandingPage";
import Main from "./components/Main";

function App() {
  return <div className="App">
      <Snow />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/main" component={Main} />

      </Switch>
    </div>
}

export default App;

