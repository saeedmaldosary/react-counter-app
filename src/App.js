import React, { Component } from "react";
import "./App.css";
import Counters from "./components/counters";
import Navbar from "./components/navbar";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 3 },
      { id: 3, value: 8 },
      { id: 4, value: 1 },
    ],
  };

  handleDelete = (id) => {
    var counters = this.state.counters.filter((c) => c.id !== id);
    this.setState({ counters });
  };

  handleIncrement = (counter) => {
    var counters = this.state.counters.map((c) => {
      if (c === counter) c.value += 1;
    });
    this.setState(counters);
  };

  handleDecrement = (counter) => {
    var counters = this.state.counters.map((c) => {
      if (c === counter && c.value > 0) c.value -= 1;
    });
    this.setState(counters);
  };

  handleReset = () => {
    var counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  render() {
    return (
      <React.Fragment>
        <Navbar counters={this.state.counters} />
        <main className="p-2">
          <Counters
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onReset={this.handleReset}
            counters={this.state.counters}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
