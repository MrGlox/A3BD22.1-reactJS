import { Header } from "components/molecules";

import "./App.css";

const App = ({ children }) => (
  <div className="App">
    <Header />
    <main className="App-main">{children}</main>
  </div>
);

export default App;
