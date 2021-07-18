import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import BadgeNew from "../pages/BadgeNew";
import Badges from "../pages/Badges";

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/badges" component={Badges} />
        <Route path="/badges/new" component={BadgeNew} />
      </Switch>
    </BrowserRouter>
  );
}
