import React, { Component } from 'react';

// Define the type for the component's state
interface CounterState {
  count: number;
}

// Class component with state type
class Counter extends Component<{}, CounterState> {
  state: CounterState = {
    count: 0
  };

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;
