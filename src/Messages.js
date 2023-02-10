import React, { useState, useEffect } from 'react'
import Message from './Message'

const Messages = ({ messages, deleteMessage }) => {
    const [displayMessages, setDisplayMessages] = useState([]);

    useEffect(() => {
        setDisplayMessages(messages);
    }, [messages])

    return (
        <div id='messages-box'>
            {displayMessages && displayMessages.map((message) => <Message key={message.id} id={message.id} username={message.username} messageUserId={message.userId} message={message.message} deleteMessage={deleteMessage} />)}
        </div>
    )
}

export default Messages