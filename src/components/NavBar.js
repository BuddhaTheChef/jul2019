import React, { Component } from "react";
import { Link, NavLink, withRouter } from "react-router-dom";
import { connect } from 'react-redux';

class NavBar extends Component {
  constructor() {
    super();
    this.state = {
      scrolled: false,
      streamName: ""
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", () => {
      const isTop = window.scrollY < 100;
      if (isTop !== true) {
        this.setState({ scrolled: true });
      } else {
        this.setState({ scrolled: false });
      }
    });
  }

  componentWillUnmount() {
    window.removeEventListener("scroll");
  }

  handleChange = event => {
    this.setState({ streamName: event.target.value });
  };

  render() {
    const { auth } = this.props;
    console.log(auth)
    return (
      <div>
        <div className={this.state.scrolled ? "nav scrolled" : "nav"}>
          <ul className="nav-list">
            <li className="nav-list__item nav-list__item--active">
              <Link to="/" className="nav-list__link">
                Home Base
              </Link>
            </li>
            <li className="nav-list__item">
              <Link to="/GamesPage" className="nav-list__link">
                Games
              </Link>
            </li>
            <li className="nav-list__item">
              <Link to="/Upcoming" className="nav-list__link">
                Upcoming Titles &amp; Pros
              </Link>
            </li>
            {auth.uid ?
            <li className="nav-list__item">
              <Link to="/FriendsList" className="nav-list__link">
                Friends Tech Specs
              </Link>
            </li>
            :
            <h1 style={{display: 'none', overflow: 'hidden'}}>nope</h1>
            }
            {auth.uid ?
            <li className="nav-list__item">
              <Link to="/ProfilePage" className="nav-list__link">
                Profile
              </Link>
            </li>
             :
             <h1 style={{display: 'none', overflow: 'hidden'}}>nope</h1>
             }
            <li className="nav-list__item">
              <Link to="/GiveAways" className="nav-list__link">
                Give Aways!
              </Link>
            </li>
          </ul>
          <div className="search-div">
            <button
              className={this.state.scrolled ? "scrolled-icon" : "fixed-icon"}
            >
              <a
                className={"link"}
                href={"https://www.twitch.tv/" + this.state.streamName}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="material-icons search-icon">search</i>
              </a>
            </button>
            <input
              className="search-bar"
              type="text"
              name="streamName"
              value={this.state.streamName}
              onChange={this.handleChange}
            />
          </div>
          {auth.uid ? <h1 style={{display: 'none', overflow: 'hidden'}}>hidden</h1>
          :
          <div className="PageSwitcher">
            <NavLink
              to="/sign-in"
              activeClassName="PageSwitcher__Item--Active"
              className="PageSwitcher__Item"
            >
              Sign In
            </NavLink>
            <NavLink
              exact
              to="/sign-up"
              activeClassName="PageSwitcher__Item--Active"
              className="PageSwitcher__Item"
            >
              Sign Up
            </NavLink>
          </div>
          }
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
 
export default withRouter(connect(mapStateToProps)(NavBar));
