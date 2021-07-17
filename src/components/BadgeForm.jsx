import React, { Component } from "react";

export default class BadgeForm extends Component {
  state = {};
  // handleChange = event => {
  //   // console.log({
  //   //   name: event.target.name,
  //   //   value: event.target.value,
  //   // });
  //   this.setState({
  //     [event.target.name]: event.target.value,
  //   });
  // };
  handleClick = event => {
    console.log("Button was clicked");
  };
  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
  };
  render() {
    const { onChange, formValues } = this.props;
    return (
      <div>
        <h1>New Attendant</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>First Name</label>
            <input
              onChange={onChange}
              className="form-control"
              type="text"
              name="firstName"
              value={formValues.firstName}
            />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input
              onChange={onChange}
              className="form-control"
              type="text"
              name="lastName"
              value={formValues.lastName}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              onChange={onChange}
              className="form-control"
              type="email"
              name="email"
              value={formValues.email}
            />
          </div>
          <div className="form-group">
            <label>Job Title</label>
            <input
              onChange={onChange}
              className="form-control"
              type="text"
              name="jobTitle"
              value={formValues.jobTitle}
            />
          </div>
          <div className="form-group">
            <label>Twitter</label>
            <input
              onChange={onChange}
              className="form-control"
              type="text"
              name="twitter"
              value={formValues.twitter}
            />
          </div>
          <button onClick={this.handleClick} className="btn btn-primary">
            Save
          </button>
        </form>
      </div>
    );
  }
}
