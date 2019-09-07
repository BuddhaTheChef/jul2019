import React, { Component } from 'react'
import axios from 'axios';

class ProTeams extends Component {
    state = {
        lolteams: [],
        lolplayers: []
      };
    
      componentDidMount() {
        const API_KEY = process.env.REACT_APP_GAME_SOURCE_API;
        axios.get(`https://api.pandascore.co/lol/teams?token=${API_KEY}`).then(res => {
          console.log(res);
          const lolteams = res.data;
          this.setState({ lolteams });
        });
        axios.get(`https://api.pandascore.co/lol/players?token=${API_KEY}`).then(res => {
            console.log(res);
            const lolplayers = res.data;
            this.setState({ lolplayers });
          });
      }

    render() {
        return (
            <div style={{marginTop: '140px'}}>
                <h1>Pro Teams</h1>
                <div>
                {this.state.lolteams.map(team => (
                    <div style={{   width: "400px",
                    height: "inherit",
                    background: "slategrey",
                    justifyContent: "space-around",
                    display: "inline-flex",
                    flexDirection: "column",
                    margin: "50px",
                    borderRadius: "10px",
                    padding: "12px"}}>
                        <div><img src={team.image_url} alt="League team logo" style={{height: '200px'}}/></div>
                        <div>{team.name}</div>
                        {/* <div>{team.players}</div> */}
                    </div>
                ))}
                </div>
                <hr/>
                <div>
                <div>
                    <h1>Pro Players</h1>
                </div>
                {this.state.lolplayers.map(player => (
                    <div style={{   width: "400px",
                    height: "inherit",
                    background: "slategrey",
                    justifyContent: "space-around",
                    display: "inline-flex",
                    flexDirection: "column",
                    margin: "50px",
                    borderRadius: "10px",
                    padding: "12px"}}>

                    {player.image_url ? 
                        <div>
                        <div><img src={player.image_url} alt="League team logo" style={{height: '200px'}}/></div>
                        <div>{player.name}</div>
                    <div>{player.current_team ? <div>{player.current_team.name}</div> : <div>loading</div>}</div>
                        <div>{player.role}</div>
                        </div>

:
<div style={{display: 'none'}}></div>
}
                        
                    
                    </div>
                ))}
                </div>
            </div>
        )
    }
}

export default ProTeams;