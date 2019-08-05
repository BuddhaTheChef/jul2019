import React, { useState, useEffect } from 'react'
import api from '../components/api'
import {Link} from 'react-router-dom';

function GamesPage() {
    const [games, setGames] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await api.get('https://api.twitch.tv/helix/games/top')
            console.log(result.data)



            let dataArray = result.data.data
            let finalArray = dataArray.map(game => {
                let newURL = game.box_art_url.replace('{width}', '300').replace('{height}', '300')
                game.box_art_url = newURL;
                return game;
            })
             setGames(finalArray);
        }
        fetchData();
    },[])

        return (
            <div style={{marginTop: '137px', height: '-webkit-fill-available'}}>
                <div style={{padding: '60px 40px', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap'}}>
                {games.map(game => (
                    <div key={game.id} style={{display: 'flex', width: '340px', backgroundColor: 'aquamarine', margin: '30px 10px', alignItems: 'center', flexDirection: 'column', borderRadius:'7px',boxShadow: '0 4px 8px 7px rgba(0, 0, 0, 0.3), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
                        <img src={game.box_art_url} alt={game.name}  style={{paddingTop: '20px'}}/>
                        <div>
                            {/* <h4 style={{textAlign: "center"}}>{game.name}</h4> */}
                            <button style={{height: '150px', backgroundColor: '#282c34', border: 'none', minWidth:'300px', fontSize: 'large', width:'fit-content'}}>
                                <Link className="link"
                                to={{
                                pathname: "Games/" + game.name,
                                state: {
                                gameID: game.id
                                }
                                }}>
                                {game.name} streams{" "}
                                </Link>
                            </button>
                        </div>

                    </div>
                ))}
                </div>
            </div>
        )
}

export default GamesPage;
