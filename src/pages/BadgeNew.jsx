import React, { Component, Fragment } from "react";
import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";
import logo from "../images/platziconf-logo.svg";
import API from "../api";
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
  handleSubmit = async event => {
    event.preventDefault();
    this.setState({ loading: true, error: null });
    try {
      await API.badges.create(this.state.form);
      this.setState({ loading: false });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };
  render() {
    const { form } = this.state;
    return (
      <Fragment>
        <div className="BadgeNew__hero">
          <img
            className="BadgeNew__hero-image img-fluid"
            src={logo}
            alt="Logo"
          />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                avatarUrl="https://avatars.githubusercontent.com/u/46821988?v=4"
                email={form.email || "example@gmail.com"}
                firstName={form.firstName || "First Name"}
                lastName={form.lastName || "Last Name"}
                jobTitle={form.jobTitle || "Job Title"}
                twitter={form.twitter || "Twitter"}
              />
            </div>
            <div className="col-6">
              <BadgeForm
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                formValues={this.state.form}
              />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
