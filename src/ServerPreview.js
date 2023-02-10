import React from 'react'
import { useNavigate } from 'react-router-dom'

const ServerPreview = ({ serverName, serverId }) => {
    const navigate = useNavigate();

    return (
        <div className='server-preview flex-column' onClick={() => navigate(`../server/${serverId}`)}>
            <h2 className='server-preview-name'>{serverName}</h2>
            <div className='server-preview-image'></div>
        </div>
    )
}

export default ServerPreview