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
import Page5 from './pages/page5';
import Page6 from './pages/page6';
import Dashboard from './pages/Dashboard/Index';
import DashboardB from './pages/Dashboard-B/Index';
import DashboardInfluencer from './pages/DashboardInfluencer/Index';

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
          <Route path="/page5">
            <Page5 />
          </Route>
          <Route path="/page6">
            <Page6 />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/dashboard-b">
            <DashboardB />
          </Route>
          <Route path="/dashboard-influencer">
            <DashboardInfluencer />
          </Route>
          <Route path="/">
            <Home />
          </Route>
      </Switch>
    </Router>
  );
}