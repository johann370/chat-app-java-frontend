import React from 'react'
import TextChannel from './TextChannel'
import { useNavigate, useParams } from 'react-router-dom';
import MembersList from './MembersList';
import { FaArrowLeft } from "react-icons/fa";


const Server = ({ getMembers, getServer, messages, setMessages, getUserInfo }) => {
    const navigate = useNavigate();
    const serverId = parseInt(useParams().serverId);
    const userId = parseInt(useParams().userId);
    const server = getServer(serverId);
    const serverName = server.serverName;
    const members = getMembers(serverId);
    const username = getUserInfo(userId).username

    return (
        <div id='server'>
            <div className='flex-row' id='server-top'>
                <FaArrowLeft id='back-button' onClick={() => navigate(-1)} />
                <h1>{serverName}</h1>
            </div>
            <span className='flex-row' >
                <TextChannel username={username} messages={messages} setMessages={setMessages} />
                <MembersList members={members} />
            </span>
        </div>
    )
}

export default Server