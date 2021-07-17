import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
const App = () => {
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route component={Home} path="/" exact />
          <h1>Amazon clone</h1>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
