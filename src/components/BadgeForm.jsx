import React, { Component, Fragment } from "react";

export default class BadgeForm extends Component {
  state = {};
  render() {
    const { onChange, formValues } = this.props;
    return (
      <Fragment>
        <form onSubmit={this.props.onSubmit}>
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
          {this.props.error ? (
            <p className="text-danger">{this.props.error.message}</p>
          ) : null}
        </form>
      </Fragment>
    );
  }
}
