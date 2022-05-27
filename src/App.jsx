import useMain from "contexts/Main";
import { Link } from "react-router-dom";

import "./App.css";

const App = ({ children }) => {
  const { test } = useMain();
  console.log(test);

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
            <li>
              <Link to="/fetch">Fetch</Link>
            </li>
            <li>
              <Link to="/todo">To Do</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className="App-main">{children}</main>
    </div>
  );
};

export default App;
