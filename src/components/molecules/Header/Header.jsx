import styled from "styled-components";

import { Link } from "components/atoms";

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  width: 100vw;
  background-color: grey;

  display: flex;
  justify-content: center;

  ul {
    display: flex;
    list-style: none;
  }
`;

const Header = () => {
  return (
    <StyledHeader className="App-header">
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
    </StyledHeader>
  );
};

export default Header;
