import React from "react";
import confLogo from "../images/badge-header.svg";

class Badge extends React.Component {
  render() {
    return (
      <div>
        <div>
          <img src={confLogo} alt="Logo de la conferencia" />
        </div>
        <div>
          <h1>
            Francisco
            <br />
            Suarez
          </h1>
        </div>
        <div>
          <img
            src="https://avatars.githubusercontent.com/u/46821988?v=4"
            alt="Avatar"
          />
          <p>Backend Developer</p>
          <p>@Ulzahk</p>
        </div>
        <div>#platziconf</div>
      </div>
    );
  }
}

export default Badge;
