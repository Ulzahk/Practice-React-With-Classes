import React from "react";
import confLogo from "../images/badge-header.svg";
import "./styles/Badge.css";

class Badge extends React.Component {
  render() {
    return (
      <div className="Badge">
        <div className="Badge__header">
          <img src={confLogo} alt="Logo de la conferencia" />
        </div>
        <div className="Badge__section-name">
          <img
            className="Badge__avatar"
            src="https://avatars.githubusercontent.com/u/46821988?v=4"
            alt="Avatar"
          />
          <h1>
            Francisco
            <br />
            Suarez
          </h1>
        </div>
        <div className="Badge__section-info">
          <h3>Backend Developer</h3>
          <div>@Ulzahk</div>
        </div>
        <div className="Badge__footer">#platziconf</div>
      </div>
    );
  }
}

export default Badge;
