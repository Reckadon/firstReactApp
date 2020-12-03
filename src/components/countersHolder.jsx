import React, { Component } from "react";
import Counter from "./counter";

class CountersHolder extends Component {
  state = {
    counters: [
      //initial counters
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
    countersNumber: 4,
  };

  handleDeleteCounter = (counterId) => {
    const counters = this.state.counters.filter(
      (counter) => counter.id !== counterId
    );
    this.setState({ counters: counters });
    this.props.countCountersS(this.state.counters, counterId);
  };

  handleAdd = (counter) => {
    const counters = this.state.counters;
    counters.find((c) => c.id === counter.id).value =
      counters.find((c) => c.id === counter.id).value + 1;
    this.setState({ counters: counters });
    this.props.countCounters(this.state.counters);
  };
  handleMinus = (counter) => {
    const counters = this.state.counters;
    const value = counters.find((c) => c.id === counter.id).value;
    counters.find((c) => c.id === counter.id).value =
      value === 0 ? 0 : value - 1;
    this.setState({ counters: counters });
    this.props.countCounters(this.state.counters);
  };
  handleReset = () => {
    const counters = this.state.counters;
    counters.forEach((counter) => {
      counter.value = 0;
    });
    this.setState({ counters: counters });
    this.props.onNumberChange(0);
  };
  handleAddCounter = () => {
    const counters = this.state.counters;
    counters[counters.length] = { id: this.state.countersNumber + 1, value: 0 };
    this.setState({
      counters: counters,
      countersNumber: this.state.countersNumber + 1,
    });
  };

  render() {
    return (
      <div>
        {this.state.counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={this.handleDeleteCounter}
            counter={counter}
            onAdd={this.handleAdd}
            onMinus={this.handleMinus}
          />
        ))}
        <button className="btnReset" onClick={this.handleReset}>
          Reset
        </button>
        <button
          className="btnReset btnAddCounter"
          onClick={this.handleAddCounter}
        >
          Add Team
        </button>
      </div>
    );
  }
}

export default CountersHolder;
