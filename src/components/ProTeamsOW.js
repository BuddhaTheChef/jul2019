import React, { Component } from 'react'
import axios from 'axios';
import Triangles from '../assets/triangles.png';

class ProTeamsOW extends Component {
    state = {
        owteams: [],
        owplayers: []
      };
    
      componentDidMount() {
        const API_KEY = process.env.REACT_APP_GAME_SOURCE_API;
        axios.get(`https://api.pandascore.co/ow/teams?token=${API_KEY}`).then(res => {
          console.log(res);
          const owteams = res.data;
          this.setState({ owteams });
        });
        axios.get(`https://api.pandascore.co/ow/players?token=${API_KEY}`).then(res => {
            console.log(res);
            const owplayers = res.data;
            this.setState({ owplayers });
          });
      }

    render() {
        return (
            <div style={{marginTop: '140px'}}>
                <h1 style={{textAlign: 'center', marginTop: '200px'}}>OverWatch Pro Teams</h1>
                <div>
                {this.state.owteams.map(team => (
                    <div style={{   width: "400px",
                    height: "inherit",
                    background: "#09e6bc",
                    justifyContent: "space-around",
                    alignItems: 'center',
                    display: "inline-flex",
                    flexDirection: "column",
                    margin: "50px",
                    borderRadius: "10px",
                    padding: "12px"}}>
                        <div><img src={team.image_url} alt="League team logo" style={{height: '200px'}}/></div>
                        <div style={{fontSize: '30px', fontWeight: 'bold'}}>{team.name}</div>
                        {/* <div>{team.players}</div> */}
                    </div>
                ))}
                </div>
                <hr/>
                <div>
                <div>
                    <h1 style={{textAlign: 'center', marginTop: '100px'}}>OverWatch Pro Players</h1>
                </div>
                {this.state.owplayers.map(player  => (
                    <div style={{   
                    width: "400px",
                    height: "inherit",
                    background: "slategrey",
                    justifyContent: "space-around",
                    display: "contents",
                    flexDirection: "column",
                    margin: "50px",
                    borderRadius: "10px",
                    padding: "12px"}}>

                    {player.image_url ? 
                        <div style={{display: 'inline-flex',background: "slategrey",width: "400px",
                        height: "inherit",margin: "50px",
                        borderRadius: "10px",
                        padding: "12px"}}>
                        <div><img src={player.image_url} alt="League team logo" style={{height: '200px'}}/></div>
                        <div style={{    
                            width: '50%',
                            display: 'flex',
                            justifyContent: 'space-around',
                            alignItems: 'center',
                            flexDirection: 'column',
                            fontWeight: 'bold',
                            fontSize: '20px',
                            background: 'black',
                            color: 'white',
                            height: '199.18px'

                            }}>
                        <div>{player.name}<span style={{color: '#09e6bc'}}>{player.role ? ` (${player.role})` : '(n/a)'}</span></div>
                    <div>{player.current_team ? <div style={{color: '#09e6bc'}}>{player.current_team.name}</div> : <div>Team Unavailable</div>}</div>
                        </div>
                        </div>

:
<div style={{display: 'inline-flex',background: "slategrey",width: "400px",
height: "inherit",margin: "50px",
borderRadius: "10px",
padding: "12px"}}>
<div><img src={Triangles} alt="League team logo" style={{height: '200px'}}/></div>
<div style={{    
    width: '50%',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'column',
    fontWeight: 'bold',
    fontSize: '20px',
    background: 'black',
    color: 'white',
    height: '199.18px'

    }}>
<div>{player.name}<span style={{color: '#09e6bc'}}>{player.role ? ` (${player.role})` : '(n/a)'}</span></div>
<div>{player.current_team ? <div style={{color: '#09e6bc'}}>{player.current_team.name}</div> : <div>Team Unavailable</div>}</div>
</div>
</div>
}
                        
                    
                    </div>
                ))}
                </div>
            </div>
        )
    }
}

export default ProTeamsOW;