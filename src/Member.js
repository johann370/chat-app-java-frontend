import React from 'react'

const Member = ({ username }) => {
    return (
        <div className='member'>
            <div className='flex-row align-center icon-name-div' >
                <div className='profile-icon'></div>
                <p className='username'>{username}</p>
            </div>
        </div>
    )
}

export default Member