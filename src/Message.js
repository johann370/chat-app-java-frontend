import React, { useState } from 'react'
import { useParams } from 'react-router-dom';

const Message = ({ id, username, messageUserId, message, deleteMessage }) => {
    const [displayDelete, setDisplayDelete] = useState(false);
    const userId = parseInt(useParams().userId);

    return (
        <div className='message-div' onMouseOver={() => userId === messageUserId && setDisplayDelete(true)} onMouseOut={() => setDisplayDelete(false)}>
            <div className='flex-row align-center icon-name-div' >
                <div className='profile-icon'></div>
                <p className='username'>{username}</p>
            </div>
            <p className='message'>{message}</p>
            {displayDelete && <button className='delete-message-button' onClick={() => deleteMessage(id)}>Delete</button>}
        </div>
    )
}

export default Message