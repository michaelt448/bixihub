import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


// pages
import Home from './pages/Home';
import Shop from './pages/Shop';
import InfluencersSearching from './pages/InfluencersSearchingGigs';
import PageFormFlow3 from './pages/pageFormFlow3';

export default function App() {
  return (
    <Router>
      <Switch>
          <Route path="/shop">
            <Shop />
          </Route>
          <Route path="/influencers-searching-gigs">
            <InfluencersSearching />
          </Route>
          <Route path="/page-form-flow-3">
            <PageFormFlow3 />
          </Route>
          <Route path="/">
            <Home />
          </Route>
      </Switch>
    </Router>
  );
}