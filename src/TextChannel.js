import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Messages from './Messages'
import TextInput from './TextInput'

const TextChannel = ({ messages, setMessages, username }) => {
    const serverId = parseInt(useParams().serverId);
    const userId = parseInt(useParams().userId);
    const [serverMessages, setServerMessages] = useState(messages.filter((message) => message.serverId === serverId));

    useEffect(() => {
        setServerMessages(messages.filter((message) => message.serverId === serverId));
    }, [messages])

    const addMessage = (username, message) => {
        setMessages([...messages, { 'id': messages.length + 1, username: username, userId: userId, message: message, serverId: serverId }]);
    }

    const deleteMessage = (idToDelete) => {
        let temp = messages.filter(message => message.id !== idToDelete);
        setMessages(temp);
    }

    return (
        <div className='text-channel' >
            <Messages messages={serverMessages} deleteMessage={deleteMessage} />
            <TextInput username={username} addMessage={addMessage} />
        </div >
    )
}

export default TextChannel