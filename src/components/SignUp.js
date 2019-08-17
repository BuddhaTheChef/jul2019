import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import { Redirect } from 'react-router-dom';
import {connect} from 'react-redux';
import { signUp } from '../store/actions/authActions';
 
class SignUp extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      hasAgreed: false
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
    this.props.signUp(this.state);
  }

  render() {
    const { auth } = this.props;
    if(auth.uid) return <Redirect to='/' />
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
            <div className="FormField">
              <label className="FormField__Label" htmlFor="firstName">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                className="FormField__Input"
                placeholder="Enter your first name"
                name="firstName"
                value={this.state.firstName}
                onChange={this.handleChange}
              />
            </div>
            <div className="FormField">
              <label className="FormField__Label" htmlFor="lastNname">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                className="FormField__Input"
                placeholder="Enter your last name"
                name="lastName"
                value={this.state.lastName}
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
              <label className="FormField__CheckboxLabel">
                <input
                  className="FormField__Checkbox"
                  type="checkbox"
                  name="hasAgreed"
                  value={this.state.hasAgreed}
                  onChange={this.handleChange}
                />{" "}
                I agree all statements in{" "}
                <a href="/" className="FormField__TermsLink">
                  terms of service
                </a>
              </label>
            </div>

            <div className="FormField">
              <button className="FormField__Button mr-20">Sign Up</button>{" "}
              <Link to="/sign-in" className="FormField__Link">
                I'm already member
              </Link>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (newUser) => dispatch(signUp(newUser))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
