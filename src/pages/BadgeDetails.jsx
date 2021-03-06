import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import Badge from "../components/Badge";
import DeleteBadgeModal from "../components/DeleteBadgeModal";
import confLogo from "../images/platziconf-logo.svg";
import "./styles/BadgeDetails.css";

function useIncreaseCount(max) {
  const [count, setCount] = useState(0);
  if (count > max) {
    setCount(0);
  }
  return [count, setCount];
}
export default function BadgeDetails(props) {
  const [count, setCount] = useIncreaseCount(4);
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
            <button
              className="btn btn-primary mb-4"
              onClick={() => {
                setCount(count + 1);
              }}
            >
              Increase Count {count}
            </button>
            <div>
              <Link
                className="btn btn-primary mb-4"
                to={`/badges/${badge.id}/edit`}
              >
                Edit
              </Link>
            </div>
            <div>
              <button onClick={props.onOpenModal} className="btn btn-danger">
                Delete
              </button>
              <DeleteBadgeModal
                isOpen={props.modalIsOpen}
                onClose={props.onCloseModal}
                onDeleteBadge={props.onDeleteBadge}
              />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
