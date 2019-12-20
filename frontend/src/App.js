import React from "react";
import { Switch, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Main from "./components/Main";
import Snow from "react-snow-effect";
import "./App.scss"
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
