import React, {useState, useEffect} from 'react'
import api from './api';

function GameStreams({match, location}) {
    const [streamData, setStreamData] = useState([]);
    const [viewers, setViewers] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
          const result = await api.get(
            `https://api.twitch.tv/helix/streams?game_id=${location.state.gameID}`
          );
          let dataArray = result.data.data;
          let finalArray = dataArray.map(stream => {
            let newURL = stream.thumbnail_url
              .replace("{width}", "300")
              .replace("{height}", "300");
            stream.thumbnail_url = newURL;
            return stream;
          });
    
          let totalViewers = finalArray.reduce((acc, val) => {
            return acc + val.viewer_count;
          }, 0);
          setViewers(totalViewers);
          setStreamData(finalArray);
        };
        fetchData();
      });

        return (
            <div style={{background: '#09e6bc', height: '500px'}}>
                <h1 style={{fontSize: '200px'}}>Game stream components</h1>
                <li>{match.params.id}</li>
                <li>{location.state.gameID}</li>
                <li>{viewers}</li>

                {streamData.map(stream => (
                    <div>
                        <div>
                            <img src={stream.thumbnail_url} alt="Streamer Pic"/>
                        </div>
                        <div>
                        <h5>{stream.user_name}</h5>
                        <h6>{stream.viewer_count} live viewers</h6>
                        </div>
                        <button>
                            <a href={'https://www.twitch.tv/' + stream.user_name}>Watch {stream.user_name} channel</a>
                        </button>
                    </div>
                ))}
            </div>
        )
}

export default GameStreams;