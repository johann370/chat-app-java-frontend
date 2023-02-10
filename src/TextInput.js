import React, { useState } from 'react'

const TextInput = ({ addMessage, username }) => {
    const [input, setInput] = useState('');

    const handleKeyDown = (e) => {
        if (input === '') {
            return;
        }

        if (e.key === 'Enter') {
            addMessage(username, input);
            setInput('');
        }
    };

    return (
        <div className='text-input-div'>
            <input className='text-input' type='text' value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => handleKeyDown(e)}></input>
        </div>
    )
}

export default TextInput