import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import confLogo from "../images/platziconf-logo.svg";
import PageLoading from "../components/PageLoading";
import PageError from "../components/PageError";
import API from "../api";
import "./styles/BadgeDetails.css";
import Badge from "../components/Badge";

export default class BadgeDetails extends Component {
  state = {
    loading: true,
    error: null,
    data: undefined,
  };
  fetchData = async () => {
    this.setState({ loading: true, error: null });
    try {
      const data = await API.badges.read(this.props.match.params.badgeId);
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
      return <PageLoading />;
    }
    if (this.state.error) {
      return <PageError error={this.state.error} />;
    }
    const badge = this.state.data;
    return (
      <Fragment>
        <div className="BadgeDetails__hero">
          <div className="container">
            <div className="row">
              <div className="col-6">
                <img src={confLogo} alt="Logo de la conferencia" />
              </div>
              <div className="col-6 .BadgeDetails__hero-attendant-name">
                <h1>
                  {badge.firstName} {badge.lastName}
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col">
              <Badge
                firstName={badge.firstName}
                lastName={badge.lastName}
                email={badge.email}
                jobTitle={badge.jobTitle}
                twitter={badge.twitter}
              />
            </div>
            <div className="col">
              <h2>Actions</h2>
              <div>
                <Link
                  className="btn btn-primary mb-4"
                  to={`/badges/${badge.id}/edit`}
                >
                  Edit
                </Link>
              </div>
              <div>
                <button
                  className="btn btn-danger"
                  to={`/badges/${badge.id}/edit`}
                >
                  Edit
                </button>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
