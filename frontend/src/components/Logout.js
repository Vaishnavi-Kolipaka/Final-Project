import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'; // Icon for Logout
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Optional: Clear localStorage or perform any other cleanup tasks.
    localStorage.clear();
    navigate('/signup'); // Navigate to the signup page.
  };

  return (
    <li onClick={handleLogout} className="sidebar-item">
      <FontAwesomeIcon icon={faSignOutAlt} className="menu-icon" />
      Logout
    </li>
  );
};

export default Logout;
