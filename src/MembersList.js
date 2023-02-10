import React from 'react'
import Member from './Member'

const MembersList = ({ members }) => {
    return (
        <div id='members-list'>
            <h1>Server Members:</h1>
            {members.map((member) => <Member key={member.username} username={member.username} />)}
        </div>
    )
}

export default MembersList