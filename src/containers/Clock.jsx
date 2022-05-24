import { Component } from "react";

class Clock extends Component {
  state = {
    date: new Date().toLocaleTimeString(),
  };

  updateClock() {
    this.setState({ date: new Date().toLocaleTimeString() });
  }

  componentDidMount() {
    setInterval(this.updateClock.bind(this), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.updateClock.bind(this));
  }

  render() {
    const { date } = this.state;

    return <h1>{date}</h1>;
  }
}

export default Clock;
