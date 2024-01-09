// components/Dashboard.js
import React, { useState } from 'react';
import LinkShortener from './LinkShortener';

const Dashboard = ({ onLogout }) => {
  const [isLinkShortened, setIsLinkShortened] = useState(false);

  const handleLogout = () => {
    
    onLogout();
  };

  const handleLinkShortened = () => {
    setIsLinkShortened(true);
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <button type="button" onClick={handleLogout}>
        Logout
      </button>
      <LinkShortener onLinkShortened={handleLinkShortened} />
      {isLinkShortened && <p>Short link successfully created!</p>}
    </div>
  );
};

export default Dashboard;
