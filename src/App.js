import "./App.css";
import React from "react";
import Title from "./components/title/title.component";
import HomePage from "./pages/homepage.component";
import { Switch, Route } from "react-router-dom";
import Particles from "react-particles-js";
import Content from "./pages/Secondary-content/secondary-content.component";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Title></Title>
          <HomePage></HomePage>
          <Content></Content>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
