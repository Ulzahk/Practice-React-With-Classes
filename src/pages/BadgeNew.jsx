import React, { Component } from "react";
import Navbar from "../components/Navbar";
import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";
import logo from "../images/badge-header.svg";
import "./styles/BadgeNew.css";
export default class BadgeNew extends Component {
  state = {
    form: {
      firstName: "",
      lastName: "",
      email: "",
      jobTitle: "",
      twitter: "",
    },
  };
  handleChange = event => {
    const nextForm = this.state.form;
    nextForm[event.target.name] = event.target.value;
    this.setState({
      ...this.state.form,
      [event.target.name]: event.target.value,
    });
  };
  render() {
    const { form } = this.state;
    return (
      <div>
        <Navbar />
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={logo} alt="Logo" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                avatarUrl="https://avatars.githubusercontent.com/u/46821988?v=4"
                firstName={form.firstName}
                lastName={form.lastName}
                jobTitle={form.jobTitle}
                twitter={form.twitter}
              />
            </div>
            <div className="col-6">
              <BadgeForm
                onChange={this.handleChange}
                formValues={this.state.form}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
