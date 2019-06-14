import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledNav = styled(NavLink)`
  margin: 10px;
  color: black;
  &:focus, &:hover, &:visited, &:link, &:active {
      text-decoration: none;
`;

export const FlexNav = styled.div`
    display: flex;
    justify-content: center;  
`;