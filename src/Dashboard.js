import React, { useRef, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import ServerPreview from './ServerPreview';
import { VscClose } from "react-icons/vsc";

const Dashboard = ({ getUserServers, createServer }) => {
    const [serverNameInput, setServerNameInput] = useState('');
    const createServerRef = useRef(null);
    const inputRef = useRef(null);

    const userId = parseInt(useParams().userId);
    const [displayCreateServer, setDisplayCreateServer] = useState(false);

    const userServers = getUserServers(userId);

    useEffect(() => {
        if (!displayCreateServer) {
            return;
        }
        inputRef.current.focus()
    }, [displayCreateServer])

    const handleCreateServer = () => {
        if (serverNameInput === '') {
            return;
        }

        createServer(userId, serverNameInput);
        closeDiv();
    }

    const closeDiv = () => {
        setServerNameInput('');
        setDisplayCreateServer(false);
    }

    const handleClickOutside = (e) => {
        if (createServerRef.current && !createServerRef.current.contains(e.target)) {
            closeDiv();
        }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return (
        <div id='dashboard'>
            <div id='dashboard-top' className='flex-row'>
                <h1>My Servers:</h1>
                <button id='create-server-button' onClick={() => { setDisplayCreateServer(true) }}>Create Server</button>
            </div>
            <div id='servers' className='grid'>
                {userServers.map((server) => <ServerPreview key={server.serverId} serverName={server.serverName} serverId={server.serverId} />)}
            </div>
            {displayCreateServer &&
                <div id='overlay'>
                    <div id='create-server-div' className='flex-column' ref={createServerRef}>
                        <VscClose id='x-button' onClick={() => closeDiv()} />
                        <div>
                            <p>Server name:</p>
                            <input ref={inputRef} id='server-name-input' type='text' value={serverNameInput} onChange={(e) => setServerNameInput(e.target.value)}></input>
                            <button onClick={() => handleCreateServer()}>Create Server</button>
                        </div>
                    </div>
                </div>
            }

        </div>
    )
}

export default Dashboard