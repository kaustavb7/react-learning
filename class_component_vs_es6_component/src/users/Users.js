import React, { Component } from "react";
import User from "./User";

class Users extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <User></User>
        <User age="40">Jill</User>
        <User age="50">Peter</User>
      </div>
    );
  }
}

export default Users;
