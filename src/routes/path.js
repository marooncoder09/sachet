// Router.js
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom"; // Use BrowserRouter and Switch

import Checkout from "../components/dashboard/Checkout";
import LandingPage from "../components/dashboard/LandingPage";
import ExploreBots from "../components/dashboard/ExploreBots";
import ChatPage from "../components/dashboard/ChatArea/ChatPage";

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LandingPage} /> {/* Use exact for the root route */}
        <Route path="/create-bot" component={Checkout} />
        <Route path="/explore-bots" component={ExploreBots} />
        <Route path="/chat/:id" component={ChatPage} />
      </Switch>
    </BrowserRouter>
  );
}
