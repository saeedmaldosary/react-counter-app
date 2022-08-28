import React, { Component } from "react";

class Counter extends Component {
  render() {
    let classes = "badge m-2 ";
    classes += this.props.counter.value === 0 ? "bg-warning" : "bg-primary";

    return (
      <div className="row">
        <div className="col-1">
          <span className={classes}>{this.formatCount()}</span>
        </div>
        <div className="col">
          <button
            onClick={() => this.props.onIncrement(this.props.counter)}
            className="btn btn-secondary btn-sm m-2"
          >
            +
          </button>
          <button
            disabled={this.props.counter.value === 0 ? true : false}
            onClick={() => this.props.onDecrement(this.props.counter)}
            className="btn btn-secondary btn-sm"
          >
            -
          </button>
          <button
            onClick={() => this.props.onDelete(this.props.counter.id)}
            className="btn btn-danger btn-sm m-2"
          >
            X
          </button>
        </div>
      </div>
    );
  }

  formatCount() {
    return this.props.counter.value === 0 ? "Zero" : this.props.counter.value;
  }
}

export default Counter;
