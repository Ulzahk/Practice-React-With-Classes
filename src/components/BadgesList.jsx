import React, { useState, useMemo } from "react";
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
function useSearchBadges(badges) {
  const [query, setQuery] = useState("");
  const [filteredBadges, setFilteredBadges] = useState(badges);
  useMemo(() => {
    const result = badges.filter(badge => {
      return `${badge.firstName} ${badge.lastName}`
        .toLowerCase()
        .includes(query.toLowerCase());
    });
    setFilteredBadges(result);
  }, [badges, query]);
  return { query, setQuery, filteredBadges };
}

export default function BadgeList(props) {
  const badges = props.badges;
  const { query, setQuery, filteredBadges } = useSearchBadges(badges);
  if (filteredBadges.length === 0) {
    return (
      <div>
        <div className="form-group">
          <label>Filter Badges</label>
          <input
            type="text"
            className="form-control mb-2"
            value={query}
            onChange={event => {
              setQuery(event.target.value);
            }}
          />
        </div>
        <h3>No badges were found</h3>
        <Link className="btn btn-primary" to="/badges/new">
          Create new badge
        </Link>
      </div>
    );
  }
  return (
    <div className="BadgesList">
      <div className="form-group">
        <label>Filter Badges</label>
        <input
          type="text"
          className="form-control mb-2"
          value={query}
          onChange={event => {
            setQuery(event.target.value);
          }}
        />
      </div>
      <ul className="list-unstyled">
        {filteredBadges.map(badge => {
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
    </div>
  );
}
