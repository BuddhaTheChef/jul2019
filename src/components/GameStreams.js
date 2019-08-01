import React from 'react'

function GameStreams({match, location}) {
        return (
            <div style={{background: '#09e6bc', height: '500px'}}>
                <h1 style={{fontSize: '200px'}}>Game stream components</h1>
                <li>{match.params.id}</li>
                <li>{location.state.gameID}</li>
            </div>
        )
}

export default GameStreams;