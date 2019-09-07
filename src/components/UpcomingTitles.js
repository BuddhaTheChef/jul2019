import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class UpcomingTitles extends Component {
  state = {
    teams: []
  };

  componentDidMount() {
    const API_KEY = process.env.REACT_APP_GAME_SOURCE_API;
    axios.get(`https://api.pandascore.co/teams?token=${API_KEY}`).then(res => {
      console.log(res);
      const teams = res.data;
      this.setState({ teams });
    });
  }
  render() {
    return (
      <div>
        <div
          style={{
            marginTop: "140px",
            height: "-webkit-fill-available"
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              boxShadow:
                "0 4px 8px 7px rgba(0, 0, 0, 0.3), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
            }}
          >
            <Link
              style={{ display: "contents", textDecoration: "none" }}
              to={{
                pathname: "ProTeams/" + 1,
              }}
            >
              <div className="link2">
                <h1>OVERWATCH</h1>
              </div>
            </Link>

            <Link
              style={{ display: "contents", textDecoration: "none" }}
              to={{
                pathname: "ProTeams/" + 2,
              }}
            >
              <div className="link2">
              <h1>PUBG</h1>
              </div>
            </Link>

            <Link
              style={{ display: "contents", textDecoration: "none" }}
              to={{
                pathname: "ProTeams/" + 3,
              }}
            >
              <div className="link2">
                <h1>LEAGUE OF LEGENDS</h1>
              </div>
            </Link>

             <Link
              style={{ display: "contents", textDecoration: "none" }}
              to={{
                pathname: "ProTeams/" + 4,
              }}
            >
              <div className="link2">
                <h1>CSGO</h1>
              </div>
            </Link>

            <Link
              style={{ display: "contents", textDecoration: "none" }}
              to={{
                pathname: "ProTeams/" + 5
              }}
            >
              <div className="link2">
                <h1>DOTA 2</h1>
              </div>
            </Link>
          </div>

          <div
            style={{
              display: "inline-flex",
              flexWrap: "wrap",
              justifyContent: "center"
            }}
          >
            <div
              style={{
                display: "block",
                textAlign: "center",
                width: "100%",
                marginTop: "50px"
              }}
            >
              <h1>TOP TEAMS</h1>
            </div>
            {this.state.teams.map(team => (
              <div
                style={{
                  width: "400px",
                  height: "inherit",
                  background: "slategrey",
                  justifyContent: "space-around",
                  display: "inline-flex",
                  flexDirection: "column",
                  margin: "50px",
                  borderRadius: "10px",
                  padding: "12px"
                }}
              >
                <img
                  src={team.image_url}
                  alt="No Team Logo"
                  style={{ height: "300px" }}
                />
                <div
                  style={{
                    background: "#09e6bc",
                    color: "whitesmoke",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column"
                  }}
                >
                  <h1 style={{ color: "black", marginBottom: 0 }}>
                    {team.name}
                  </h1>
                  <br />
                  <h3 style={{ margin: 0 }}>
                    Team for{" "}
                    <span style={{ color: "blue" }}>
                      {team.current_videogame.name}
                    </span>
                  </h3>
                  <br />
                  <div
                    style={{
                      display: "inline-flex",
                      color: "black",
                      fontWeight: "bold",
                      flexWrap: "wrap",
                      justifyContent: "center"
                    }}
                  >
                    {team.players.map(player => (
                      <div
                        style={{
                          display: "inline-flex",
                          width: "inherit",
                          margin: "9px 14px"
                        }}
                      >
                        {player.name}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default UpcomingTitles;
