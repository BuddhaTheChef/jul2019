import React, { Component } from 'react'
import {Link, withRouter} from 'react-router-dom';

class NavBar extends Component {
    constructor() {
        super();
        this.state = {
            scrolled: false,
        }
    }

    componentDidMount(){ 
        window.addEventListener('scroll', () => {
            const isTop = window.scrollY< 100;
            if(isTop !== true) {this.setState({scrolled: true})}
            else {this.setState({scrolled: false})}
        })
    };

    componentWillUnmount() {
        window.removeEventListener('scroll')
    }

    render() {
        return (
            <div>
 <div className={this.state.scrolled ? 'nav scrolled' : 'nav'}>
  <ul className="nav-list">
    <li className="nav-list__item nav-list__item--active"><Link to="/" className="nav-list__link">Home Base</Link></li>
    <li className="nav-list__item"><Link to="/GamesPage" className="nav-list__link">Games</Link></li>
    <li className="nav-list__item"><Link to="/Upcoming" className="nav-list__link">Upcoming Titles &amp; Pros</Link></li>
    <li className="nav-list__item"><Link to="/FriendsList" className="nav-list__link">Friends Tech Specs</Link></li>
    <li className="nav-list__item"><Link to="/ProfilePage" className="nav-list__link">Profile</Link></li>
    <li className="nav-list__item"><Link to="/Upcoming" className="nav-list__link">Give Aways!</Link></li>
  </ul>
  <div className="search-div">
  <i className="material-icons search-icon">search</i>
    <input className="search-bar" />
  </div>
</div>
            </div>
        )
    }
}

export default withRouter(NavBar);