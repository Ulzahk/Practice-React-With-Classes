import React, { Component, Fragment } from "react";
import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";
import PageLoading from "../components/PageLoading";
import logo from "../images/platziconf-logo.svg";
import API from "../api";
import "./styles/BadgeEdit.css";
export default class BadgeEdit extends Component {
  state = {
    loading: true,
    error: null,
    form: {
      firstName: "",
      lastName: "",
      email: "",
      jobTitle: "",
      twitter: "",
    },
  };
  fetchData = async () => {
    this.setState({ loading: true, error: null });
    try {
      const data = await API.badges.read(this.props.match.params.badgeId);
      this.setState({ loading: false, form: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };
  componentDidMount() {
    this.fetchData();
  }
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
      await API.badges.update(this.props.match.params.badgeId, this.state.form);
      this.setState({ loading: false });
      this.props.history.push("/badges");
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };
  render() {
    if (this.state.loading) {
      return <PageLoading />;
    }
    const { form } = this.state;
    return (
      <Fragment>
        <div className="BadgeEdit__hero">
          <img
            className="BadgeEdit__hero-image img-fluid"
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
              <h1>Edit Attendant</h1>
              <BadgeForm
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                formValues={this.state.form}
                error={this.state.error}
              />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
