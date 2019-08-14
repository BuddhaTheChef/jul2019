import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import { connect } from 'react-redux';
import { signIn } from '../store/actions/authActions';
import {signOut} from '../store/actions/authActions';

class SignIn extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let target = e.target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    let name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    console.log("The form was submitted with the following data:");
    console.log(this.state);
    this.props.signIn(this.state);
  }
  render() {
    const { authError } = this.props;
    return (
      <div
        style={{
          marginTop: "60px",
          display: "flex",
          alignItems: "center"
        }}
      >
      <div style={{backgroundColor: '#5ED0C0', height: '-webkit-fill-available', width: '60%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>SVG HERE</div>
        <div className="FormCenter">
          <div className="FormTitle">
            <NavLink
              to="/sign-in"
              activeClassName="FormTitle__Link--Active"
              className="FormTitle__Link"
            >
              Sign In
            </NavLink>{" "}
            or{" "}
            <NavLink
              exact
              to="/sign-up"
              activeClassName="FormTitle__Link--Active"
              className="FormTitle__Link"
            >
              Sign Up
            </NavLink>
          </div>
          <form onSubmit={this.handleSubmit} className="FormFields">
            <div className="FormField" style={{marginTop: '-30px'}}>
              <label className="FormField__Label" htmlFor="email">
                E-Mail Address
              </label>
              <input
                type="email"
                id="email"
                className="FormField__Input"
                placeholder="Enter your email"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </div>

            <div className="FormField">
              <label className="FormField__Label" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="FormField__Input"
                placeholder="Enter your password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
              />
            </div>

            <div className="FormField">
              <button className="FormField__Button mr-20">Sign In</button>{" "}
              <Link to="/" className="FormField__Link">
                Create an account
              </Link>
            </div>
          </form>
          <a href="/" onClick={this.props.signOut}> Log Out</a>
        </div>
          {authError ? <p>{authError}</p> : null}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(signIn(creds)),
    signOut: () => dispatch(signOut())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
