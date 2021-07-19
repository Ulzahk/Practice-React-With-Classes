import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Badge from "../components/Badge";
import confLogo from "../images/platziconf-logo.svg";
import "./styles/BadgeDetails.css";

export default function BadgeDetails(props) {
  const { badge } = props;
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
