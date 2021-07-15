import React, { Component } from "react";
import Navbar from "../components/Navbar";
import Badge from "../components/Badge";
import logo from "../images/badge-header.svg";
import "./styles/BadgeNew.css";
export default class BadgeNew extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={logo} alt="Logo" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col">
              <Badge
                avatarUrl="https://avatars.githubusercontent.com/u/46821988?v=4"
                firstName="Francisco"
                lastName="Suarez"
                jobTitle="Backend Developer"
                twitter="Ulzahk"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
