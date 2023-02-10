import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Dashboard from './Dashboard';
import Home from './Home';
import LandingPage from './LandingPage';
import LoginPage from './LoginPage';
import SignupPage from './SignupPage';
import Server from './Server';

function App() {
  let accounts = [{ userId: 1, username: 'user123', email: 'user123@gmail.com', password: '123' },
  { userId: 2, username: 'randomperson', email: 'random@gmail.com', password: '123' },
  { userId: 3, username: 'jake', email: 'jake@gmail.com', password: '123' }];

  let serversData = [{ serverId: 1, owner: 1, serverName: 'my server', members: [1, 2, 3] },
  { serverId: 2, owner: 1, serverName: 'a totally new server', members: [1] },]

  const [messages, setMessages] = useState([{ messageId: 1, username: 'jimmybob2000', message: 'hi guys', serverId: 1, userId: -1 },
  { messageId: 2, username: 'somerandomguy', message: 'hey jim', serverId: 1, userId: -1 },
  { messageId: 3, username: 'user2', message: 'shut up', serverId: 1, userId: -1 },
  { messageId: 4, username: 'jimmybob2000', message: 'random message', serverId: 1, userId: -1 },
  { messageId: 5, username: 'lostsoul', message: 'idk what im doing here', serverId: 1, userId: -1 },
  { messageId: 6, username: 'jimmybob2000', message: 'oop', serverId: 1, userId: -1 },
  { messageId: 7, username: 'user123', message: 'first', serverId: 2, userId: 1 },])

  const [servers, setServers] = useState(serversData);

  const [authenticated, setAuthenticated] = useState(
    localStorage.getItem(localStorage.getItem("authenticated") || false)
  );

  const authenticateCredentials = (email, password) => {
    const matchingUser = accounts.find((account) => email === account.email && password === account.password);
    if (!matchingUser) {
      return;
    }

    return matchingUser;
  }

  const checkExistingCredentials = (username, email) => {
    return accounts.filter((account) => email === account.email || username === account.username).length === 1;
  }

  const loginUser = () => {
    localStorage.setItem("authenticated", true);
    setAuthenticated(true);
  }

  const createUser = (username, email, password) => {
    accounts.push({ username: username, email: email, password: password });
  }

  const getServer = (serverId) => {
    return servers.find((server) => server.serverId === serverId);
  }

  const getMembers = (serverId) => {
    let members = [];
    const server = servers.find((server) => server.serverId === serverId);
    server.members.forEach((memberId) => members.push({ username: accounts.find(account => account.userId === memberId).username, userId: memberId }))
    return members;
  }

  const getUserServers = (userId) => {
    return servers.filter((server) => server.members.includes(userId));
  }

  const getUserInfo = (userId) => {
    const account = accounts.find((account) => account.userId === userId);
    return { username: account.username };
  }

  const createServer = (userId, serverName) => {
    setServers(servers => [...servers, { serverId: servers.length + 1, owner: userId, serverName: serverName, members: [userId] }]);
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='signup' element={<SignupPage createUser={createUser} checkExistingCredentials={checkExistingCredentials} />} />
        <Route path='login' element={<LoginPage loginUser={loginUser} authenticateCredentials={authenticateCredentials} />} />
        <Route path='user/:userId' element={<Home getUserInfo={getUserInfo} authenticated={authenticated} setAuthenticated={setAuthenticated} />}>
          <Route path='dashboard' element={<Dashboard getUserServers={getUserServers} createServer={createServer} />} />
          <Route path='server/:serverId' element={<Server getUserInfo={getUserInfo} getMembers={getMembers} getServer={getServer} messages={messages} setMessages={setMessages} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
