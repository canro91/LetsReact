import React from 'react';
import { Link } from 'react-router-dom';
import './Join.css'

const Join = () => {
    const [name, setName] = React.useState('');
    const [room, setRoom] = React.useState('');

    return (
        <div className="joinOuterContainer">
            <div className="joinInnerContainer">
                <h1 className="heading">Join</h1>
                <div><input placeholder="Name" className="joinInput mt-20" type="text" onChange={e => setName(e.target.value)} /></div>
                <div><input placeholder="Room" className="joinInput mt-20" type="text" onChange={e => setRoom(e.target.value)} /></div>
                <Link
                    onClick={e => !(name && room) ? e.preventDefault() : null }
                    to={{
                        pathname: `/chat/${room}`,
                        state: { name: name }
                    }}
                >
                    <button className="button mt-20" type="submit">Sign In</button>
                </Link>
            </div>
        </div>
    );
}

export default Join;