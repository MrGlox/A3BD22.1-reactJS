import { Component } from "react";

class Form extends Component {
  state = { value: "" };

  render() {
    return (
      <>
        <input
          type="text"
          onChange={({ target: { value } }) => this.setState({ value })}
          defaultValue={this.state.value}
        />
        <p>{this.state.value}</p>
      </>
    );
  }
}

export default Form;
