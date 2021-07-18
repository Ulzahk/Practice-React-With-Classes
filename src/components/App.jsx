import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import BadgeNew from "../pages/BadgeNew";
import Badges from "../pages/Badges";
import Layout from "./Layout";
import NotFound from "./NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Badges} />
          <Route exact path="/badges" component={Badges} />
          <Route path="/badges/new" component={BadgeNew} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}
