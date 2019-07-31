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
    })

        return (
            <div style={{marginTop: '60px', height: '-webkit-fill-available', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <h1>Games Page</h1>
                <div style={{width:'100%', display: 'flex', justifyContent: 'space-between', flexDirection: 'column',}}>
                {games.map(game => (
                    <div key={game.id}>
                        <img src={game.box_art_url} alt={game.name} />
                        <div>
                            <h4>{game.name}</h4>
                            <button>
                                <Link className="link"
                                to={{
                                pathname: "game/" + game.name,
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
