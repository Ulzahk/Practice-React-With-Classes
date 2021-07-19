import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import BadgeList from "../components/BadgesList";
import PageLoading from "../components/PageLoading";
import PageError from "../components/PageError";
import MiniLoader from "../components/MiniLoader";
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
      data.reverse();
      this.setState({ loading: false, data: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };
  componentDidMount() {
    this.fetchData();
    this.intervalId = setInterval(() => {
      this.fetchData();
    }, 5000);
  }
  componentWillUnmount() {
    clearInterval(this.intervalId);
  }
  render() {
    if (this.state.loading && !this.state.data) {
      return <PageLoading />;
    }
    if (this.state.error) {
      return <PageError error={this.state.error} />;
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
              {this.state.loading ? <MiniLoader /> : null}
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
