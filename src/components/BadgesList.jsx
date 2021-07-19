import React, { Component } from "react";
import { Link } from "react-router-dom";
import Gravatar from "./Gravatar";
import "./styles/BadgesList.css";
class BadgesListItem extends React.Component {
  render() {
    const { badge } = this.props;
    return (
      <div className="BadgesListItem">
        <Gravatar
          className="BadgesListItem__avatar"
          email={badge.email}
          alt={`${badge.firstName} ${badge.lastName}`}
        />
        <div>
          <strong>
            {badge.firstName} {badge.lastName}
          </strong>
          <br />@{badge.twitter}
          <br />
          {badge.jobTitle}
        </div>
      </div>
    );
  }
}

export default class BadgeList extends Component {
  render() {
    if (this.props.badges.length === 0) {
      return (
        <div>
          <h3>No badges were found</h3>
          <Link className="btn btn-primary" to="/badges/new">
            Create new badge
          </Link>
        </div>
      );
    }
    return (
      <ul className="list-unstyled">
        {this.props.badges.map(badge => {
          return (
            <li key={badge.id}>
              <Link
                className="text-reset text-decoration-none"
                to={`/badges/${badge.id}`}
              >
                <BadgesListItem badge={badge} />
              </Link>
            </li>
          );
        })}
      </ul>
    );
  }
}
