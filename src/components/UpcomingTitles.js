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
        <div style={{width: '400px', height: 'inherit', background: 'slategrey', justifyContent:'space-around', display: 'inline-flex', flexDirection: 'column', margin: '50px', borderRadius: '10px', padding: '12px'}}>
        <img src={team.image_url} alt='No Team Logo'  style={{height: '300px'}}/>
        <div style={{background: '#09e6bc', color: 'whitesmoke', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
        <h1 style={{color: 'black', marginBottom: 0}}>{team.name}</h1>
        <br/>
         <h3 style={{margin: 0}}>Team for <span style={{color: 'blue'}}>{team.current_videogame.name}</span></h3>
        <br/>
        <div style={{display:'inline-flex',color: 'black', fontWeight: 'bold', flexWrap: 'wrap', justifyContent: 'center'}}>
        {team.players.map(player => <div style={{display: 'inline-flex', width: 'inherit', margin: '9px 14px'}}>{player.name}</div> )}
        </div>
        </div>
        </div>)}
        </div>
        </div>
      </div>
    );
  }
}

export default UpcomingTitles;
