import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


// pages
import Home from './pages/Home';

export default function App() {
  return (
    <Router>
      <Switch>
          <Route path="/">
            <Home />
          </Route>
      </Switch>
    </Router>
  );
}