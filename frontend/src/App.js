import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.scss";
import Snow from "react-snow-effect";
import LandingPage from "./components/LandingPage";
import Main from "./components/Main";

function App() {
<<<<<<< HEAD
  return (
    <div className="App">
      {console.log("RenderApp")}
=======
  return <div className="App">
>>>>>>> cd8c48a175e407223d215fb47dc73b12e857a6f5
      <Snow />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/main" component={Main} />

      </Switch>
    </div>
}

export default App;

