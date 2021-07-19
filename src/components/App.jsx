import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import BadgeNew from "../pages/BadgeNew";
import BadgeDetailsContainer from "../pages/BadgeDetailsContainer";
import BadgeEdit from "../pages/BadgeEdit";
import Badges from "../pages/Badges";
import Layout from "./Layout";
import NotFound from "./NotFound";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/badges" component={Badges} />
            <Route exact path="/badges/new" component={BadgeNew} />
            <Route
              exact
              path="/badges/:badgeId"
              component={BadgeDetailsContainer}
            />
            <Route exact path="/badges/:badgeId/edit" component={BadgeEdit} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
}
