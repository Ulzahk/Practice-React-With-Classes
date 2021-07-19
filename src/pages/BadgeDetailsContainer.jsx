import React, { Component } from "react";
import PageLoading from "../components/PageLoading";
import PageError from "../components/PageError";
import API from "../api";
import BadgeDetails from "./BadgeDetails";

export default class BadgeDetailsContainer extends Component {
  state = {
    loading: true,
    error: null,
    data: undefined,
    modalIsOpen: false,
  };
  fetchData = async () => {
    this.setState({ loading: true, error: null });
    try {
      const data = await API.badges.read(this.props.match.params.badgeId);
      this.setState({ loading: false, data: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };
  componentDidMount() {
    this.fetchData();
  }
  handleOpenModal = event => {
    this.setState({ modalIsOpen: true });
  };
  handleCloseModal = event => {
    this.setState({ modalIsOpen: false });
  };
  handleDeleteBadge = async () => {
    this.setState({ loading: true, error: null });
    try {
      await API.badges.remove(this.props.match.params.badgeId);
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
    if (this.state.error) {
      return <PageError error={this.state.error} />;
    }
    return (
      <BadgeDetails
        badge={this.state.data}
        modalIsOpen={this.state.modalIsOpen}
        onOpenModal={this.handleOpenModal}
        onCloseModal={this.handleCloseModal}
        onDeleteBadge={this.handleDeleteBadge}
      />
    );
  }
}
