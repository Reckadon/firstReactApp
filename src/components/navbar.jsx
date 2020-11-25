import React, { Component } from "react";
class NavBar extends Component {
  render() {
    return (
      <nav className="NavBar">
        Number of Non-Zero Counters{" "}
        <span className="other badge">{this.props.number}</span>
      </nav>
    );
  }
}

export default NavBar;
