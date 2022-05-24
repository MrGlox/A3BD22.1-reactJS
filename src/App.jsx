import { Component } from "react";
import { Link } from "react-router-dom";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/apparts">Apparts</Link>
              </li>
              <li>
                <Link to="/clock">Clock</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main className="App-main">{this.props.children}</main>
      </div>
    );
  }
}

export default App;
