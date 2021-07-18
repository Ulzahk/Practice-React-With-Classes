import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import BadgeList from "../components/BadgesList";
import confLogo from "../images/badge-header.svg";
import API from "../api";
import "./styles/Badges.css";

export default class Badges extends Component {
  state = {
    loading: true,
    error: null,
    data: undefined,
  };
  fetchData = async () => {
    this.setState({ loading: true, error: null });
    try {
      const data = await API.badges.list();
      this.setState({ loading: false, data: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };
  componentDidMount() {
    this.fetchData();
  }
  render() {
    if (this.state.loading) {
      return "Loading...";
    }
    if (this.state.error) {
      return `Error: ${this.state.error.message}`;
    }
    return (
      <Fragment>
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img
                className="Badges__conf-logo"
                src={confLogo}
                alt="Conf Logo"
              />
            </div>
          </div>
        </div>
        <div className="Badges__container">
          <div className="Badges__buttons">
            <Link to="/badges/new" className="btn btn-primary">
              New Badge
            </Link>
          </div>
          <div className="Badges__list">
            <div className="Badges__container">
              <BadgeList badges={this.state.data} />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
