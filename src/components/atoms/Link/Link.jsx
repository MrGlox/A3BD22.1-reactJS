import { Link as RouterLink, useLocation } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(RouterLink)`
  color: ${({ active }) => (active ? "red" : "white")};
  text-decoration: none;
  padding: 8px 24px;

  &:hover {
    text-decoration: underline;
  }
`;

const Link = ({ children, ...props }) => {
  const { pathname } = useLocation();

  return (
    <StyledLink {...props} active={pathname === props.to}>
      {children}
    </StyledLink>
  );
};

export { StyledLink };
export default Link;
