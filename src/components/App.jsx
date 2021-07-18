import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import BadgeNew from "../pages/BadgeNew";
import Badges from "../pages/Badges";
import Layout from "./Layout";
import NotFound from "./NotFound";

export default class App extends Component {
  state = {
    nextPage: 1,
    loading: true,
    error: null,
    data: {},
  };
  fetchCharacters = async () => {
    this.setState({ loading: true, error: null });
    try {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/?page=${this.state.nextPage}`
      );
      const data = await response.json();
      console.log({ data });
      this.setState({
        nextPage: this.state.nextPage + 1,
        loading: false,
        data: {
          info: data.info,
          results: [].concat(this.state.data.results, data.results),
        },
      });
    } catch (error) {
      this.setState({
        loading: false,
        error: error,
      });
    }
  };
  componentDidMount() {
    this.fetchCharacters();
  }
  render() {
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
}
