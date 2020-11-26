import React, { Component } from "react";
class NavBar extends Component {
  render() {
    return (
      <nav className="NavBar">
        Number of Teams above
        <input
          id="target"
          type="number"
          defaultValue={this.props.target}
          onChange={() => {
            this.props.onTargetChange(event.target.value);
          }}
          min="0"
        ></input>
        points
        <span className="other badge">{this.props.number}</span>
      </nav>
    );
  }
}

export default NavBar;
