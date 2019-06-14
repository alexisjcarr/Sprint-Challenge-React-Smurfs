import React, { Component } from "react";
import axios from "axios";
import { Route, NavLink } from "react-router-dom";
import styled from "styled-components";

import "./App.css";
import SmurfForm from "./components/SmurfForm";
import Smurfs from "./components/Smurfs";

const StyledNav = styled(NavLink)`
  margin: 10px;
  color: black;
  &:focus, &:hover, &:visited, &:link, &:active {
      text-decoration: none;
`;

const FlexNav = styled.div`
    display: flex;
    justify-content: center;  
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:3333/smurfs")
      .then(res => {
        console.log(res);
        this.setState({
          smurfs: res.data
        });
      })
      .catch(err => console.log(err));
  }

  addNewSmurf = newSmurf => {
    axios
      .post("http://localhost:3333/smurfs", newSmurf)
      .then(res => {
        console.log(res);
        this.setState({
          smurfs: res.data
        });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="App">
        <FlexNav>
          <StyledNav to="/">Home</StyledNav>
          <br />
          <StyledNav to="/smurf-form">Smurf Form</StyledNav>
        </FlexNav>
        <Route
          exact
          path="/smurf-form"
          render={props => (
            <SmurfForm {...props} addNewSmurf={this.addNewSmurf} />
          )}
        />
        <Route
          exact
          path="/"
          render={props => <Smurfs {...props} smurfs={this.state.smurfs} />}
        />
      </div>
    );
  }
}

export default App;
