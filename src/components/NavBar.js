import React, { Component } from 'react'
import {Link, withRouter} from 'react-router-dom';

class NavBar extends Component {
    render() {
        return (
            <div>
 <div className="nav">
  <ul className="nav-list">
    <li className="nav-list__item nav-list__item--active"><Link to="/" className="nav-list__link">Home Base</Link></li>
    <li className="nav-list__item"><Link to="/GamesPage" className="nav-list__link">Games</Link></li>
    <li className="nav-list__item"><Link to="/Upcoming" className="nav-list__link">Upcoming Titles &amp; Pros</Link></li>
    <li className="nav-list__item"><Link to="/FriendsList" className="nav-list__link">Friends Tech Specs</Link></li>
    <li className="nav-list__item"><Link to="/ProfilePage" className="nav-list__link">Profile</Link></li>
    <li className="nav-list__item"><Link to="/Upcoming" className="nav-list__link">Give Aways!</Link></li>
  </ul>
</div>
            </div>
        )
    }
}

export default withRouter(NavBar);