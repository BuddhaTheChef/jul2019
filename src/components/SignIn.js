import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

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
  }
  render() {
    return (
      <div
        style={{
          marginTop: "60px",
          height: "-webkit-fill-available",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
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
            <div className="FormField">
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
        </div>
      </div>
    );
  }
}

export default SignIn;
