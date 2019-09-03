import React, { Component } from "react";
import axios from 'axios';

class UpcomingTitles extends Component {
  state = {
    teams: []
  }

  componentDidMount() {
    const API_KEY = process.env.REACT_APP_GAME_SOURCE_API;
    axios.get(`https://api.pandascore.co/teams?token=${API_KEY}`)
      .then(res => {
        console.log(res)
        const teams = res.data;
        this.setState({ teams });
      })
  }
  render() {
    return (
      <div>
        <div
          style={{
            marginTop: "140px",
            height: "-webkit-fill-available",
          }}
        >
        <div style={{display: 'inline-flex', flexWrap: 'wrap', justifyContent: 'center'}}>
        { this.state.teams.map(team => 
        <div style={{width: '400px', height: 'inherit', background: 'slategrey', justifyContent:'space-around', display: 'inline-flex', flexDirection: 'column', margin: '50px', borderRadius: '10px'}}>
        <img src={team.image_url} alt='No Team Logo'  style={{height: '300px'}}/>
        <div style={{background: '#09e6bc', color: 'whitesmoke'}}>
        Team Name: {team.name}
        <br/>
        Video Game: {team.current_videogame.name}
        <br/>
        Players: {team.players.map(player => <div>{player.name}</div> )}
        </div>
        </div>)}
        </div>
        </div>
      </div>
    );
  }
}

export default UpcomingTitles;
