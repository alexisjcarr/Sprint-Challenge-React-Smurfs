import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledNav = styled(NavLink)`
  margin: 10px;
  color: black;
  &:focus, &:hover, &:visited, &:link, &:active {
      text-decoration: none;
`;

const Smurf = props => {
  return (
    <StyledNav to={`/smurfs/${props.id}`}>
      <div className="Smurf">
        <h3>{props.name}</h3>
        <strong>{props.height} tall</strong>
        <p>{props.age} smurf years old</p>
      </div>
    </StyledNav>
  );
};

export default Smurf;
