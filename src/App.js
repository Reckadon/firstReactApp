import React, { Component } from "react";
import "./App.css";
import CountersHolder from "./components/countersHolder";
import NavBar from "./components/navbar";

class App extends Component {
  state = {
    numberOfNonZeroCounters: 0,
  };

  handleChangeCounter = (number) => {
    this.setState({ numberOfNonZeroCounters: number });
  };
  countCounters = (counters, id) => {
    let number = 0;
    counters = counters.filter((c) => c.id !== id);
    counters.forEach((element) => {
      if (element.value > 0) number++;
    });
    this.setState({ numberOfNonZeroCounters: number });
  };

  render() {
    return (
      <div>
        <NavBar number={this.state.numberOfNonZeroCounters} />
        <CountersHolder
          onNumberChange={this.handleChangeCounter}
          countCounters={this.countCounters}
        />
      </div>
    );
  }
}

export default App;
