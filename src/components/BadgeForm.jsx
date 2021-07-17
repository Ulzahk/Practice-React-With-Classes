import React, { Component } from "react";

export default class BadgeForm extends Component {
  handleChange = event => {
    console.log({
      name: event.target.name,
      value: event.target.value,
    });
  };
  handleClick = event => {
    console.log("Button was clicked");
  };
  handleSubmit = event => {
    event.preventDefault();
    console.log("Form was submitted");
  };
  render() {
    return (
      <div>
        <h1>New Attendant</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>First Name</label>
            <input
              onChange={this.handleChange}
              className="form-control"
              type="text"
              name="firstName"
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
