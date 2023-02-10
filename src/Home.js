import React from 'react'
import { Navigate, Outlet, useParams } from 'react-router-dom'
import AccountButton from './AccountButton';
import TopBar from './TopBar';

const Home = ({ getUserInfo, authenticated, setAuthenticated }) => {
    const userId = parseInt(useParams().userId);
    const userInfo = getUserInfo(userId)

    const logout = () => {
        localStorage.removeItem("authenticated");
        setAuthenticated(false);
    }

    return (
        <div>
            {!authenticated && <Navigate to='/login' />}
            <TopBar username={userInfo.username} logout={logout} />
            <Outlet />
        </div>
    )
}

export default Home