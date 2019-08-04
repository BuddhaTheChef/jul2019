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
                <h1 style={{fontSize: '200px'}}>Top Game streams</h1>
                <h1 style={{textAlign: 'center',color: '#09e6bc'}}>{match.params.id}</h1>
                {/* <li>{location.state.gameID}</li> */}
                <h3 style={{textAlign: 'center', color:'whitesmoke'}}><span style={{color: '#09e6bc'}}>{viewers}</span> nerds watching {match.params.id}</h3>
                <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
                {streamData.map(stream => (
                    <div style={{display:'inline-flex', width: 'fit-content', background: '#09e6bc', margin: '40px 20px',borderRadius: '9px', alignItems: 'center',flexDirection: 'column',boxShadow: '0 4px 8px 7px rgba(0, 0, 0, 0.3), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
                        <div>
                            <img src={stream.thumbnail_url} alt="Streamer Pic" style={{height:'284px', width:'444px', padding: '18px 18px 0px 18px'}}/>
                        </div>
                        <button style={{height: '150px', backgroundColor: '#282c34', border: 'none', minWidth:'444px', fontSize: 'large', width:'fit-content', marginTop:'-3px'}}>
                        <div>
                        <h5 style={{color: '#09e6bc'}}>{stream.user_name}</h5>
                        <h5 style={{color: 'whitesmoke'}}>{stream.viewer_count} live viewers</h5>
                        </div>
                        
                            <a className={'link'} href={'https://www.twitch.tv/' + stream.user_name}>Watch {stream.user_name} channel</a>
                        </button>
                    </div>
                ))}
                </div>
            </div>
        )
}

export default GameStreams;