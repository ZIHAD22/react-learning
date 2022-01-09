import { Component } from "react";

class State extends Component {
  state = {
    count: 0,
  };

  render() {
    return (
      <div>
        <h1>Why do you need state</h1>
        <h1>Count:{this.state.count}</h1>
        <button
          onClick={() => {
            this.setState(
              {
                count: this.state.count + 1,
              },
              () => {
                console.log("click", this.state.count);
              }
            );
          }}
        >
          Click
        </button>
      </div>
    );
  }
}

export default State;
