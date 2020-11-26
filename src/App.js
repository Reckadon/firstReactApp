import React, { Component } from "react";
import "./App.css";
import CountersHolder from "./components/countersHolder";
import NavBar from "./components/navbar";

class App extends Component {
  state = {
    numberOfNonZeroCounters: 0,
    target: 0,
    counters: [],
  };

  handleChangeCounter = (number) => {
    this.setState({ numberOfNonZeroCounters: number });
  };
  countCounters = (counters) => {
    let number = 0;
    counters.forEach((counter) => {
      if (counter.value > this.state.target) {
        number++;
      }
    });
    this.setState({ numberOfNonZeroCounters: number, counters });
    console.log(this.state);
  };
  countCountersS = (counters, id) => {
    this.setState({ counters });
    let number = 0;
    counters = counters.filter((c) => c.id !== id);
    counters.forEach((element) => {
      if (element.value > this.state.target) number++;
    });
    this.setState({ numberOfNonZeroCounters: number });
  };
  handleTargetChange = (newTarget) => {
    this.setState({ target: newTarget }, () => {
      this.countCounters(this.state.counters);
    });
  };

  render() {
    return (
      <div>
        <NavBar
          number={this.state.numberOfNonZeroCounters}
          target={this.state.target}
          onTargetChange={this.handleTargetChange}
        />
        <CountersHolder
          onNumberChange={this.handleChangeCounter}
          countCounters={this.countCounters}
          countCountersS={this.countCountersS}
          target={this.state.target}
        />
      </div>
    );
  }
}

export default App;
