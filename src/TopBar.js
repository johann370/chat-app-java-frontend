import React from 'react'
import AccountButton from './AccountButton'

const TopBar = ({ username, logout }) => {

    return (
        <div id='top-bar' className='flex-row'>
            <h1 id='title'>Chat App</h1>
            <AccountButton username={username} logout={logout} />
        </div>
    )
}

export default TopBar