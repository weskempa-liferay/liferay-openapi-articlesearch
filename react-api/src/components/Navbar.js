import React, { Component } from "react";

export default class Navbar extends Component {
  state = {
    //isOpen: false,
  };

  handleToggle = () => {
    //this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (

        <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
          <h5 className="my-0 mr-md-auto font-weight-normal"><b>Liferay OpenAPI</b> > Custom React Article Dashboard</h5>
          <nav className="my-2 my-md-0 mr-md-3">
          </nav>
        </div>
    );
  }
}
