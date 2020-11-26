import React, { Component } from "react";

class Counter extends Component {
  render() {
    const { counter, onAdd, onMinus, onDelete } = this.props;
    return (
      <div className="counter">
        <span className="number">Team #{counter.id}</span>
        <button className="btnAdd" onClick={() => onAdd(counter)}>
          +
        </button>
        <span className={this.getClass()}>Points: {this.formatCount()} </span>
        <button className="btnAdd minus" onClick={() => onMinus(counter)}>
          -
        </button>
        <button className="btnDelete" onClick={() => onDelete(counter.id)}>
          Delete
        </button>
      </div>
    );
  }
  getClass() {
    return this.props.counter.value === 0 ? "zero" : "other";
  }

  formatCount() {
    const count = this.props.counter.value;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
