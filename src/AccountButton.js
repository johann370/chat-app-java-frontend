import React, { useRef, useState } from 'react'
import { FaUserAlt } from "react-icons/fa";



const AccountButton = ({ username, logout }) => {
    const [displayOptions, setDisplayOptions] = useState(false);
    const dropdownRef = useRef(null);
    const accountRef = useRef(null);

    const handleClickOutside = (e) => {
        if (accountRef.current && accountRef.current.contains(e.target)) {
            return;
        }
        if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
            setDisplayOptions(false);
        }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return (
        <div ref={accountRef} id='account-div' className='flex-column'>
            <FaUserAlt id='account-button' onClick={() => setDisplayOptions(!displayOptions)} />
            {displayOptions && <div id='account-dropdown' ref={dropdownRef}>
                <ul id='dropdown-options'>
                    <li id='dropdown-username'>{username}</li>
                    <li className='dropdown-option'>Settings</li>
                    <li className='dropdown-option' onClick={() => logout()}>Log Out</li>
                </ul>
            </div>}
        </div>
    )
}

export default AccountButton