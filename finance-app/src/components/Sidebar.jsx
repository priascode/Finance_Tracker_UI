import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { FaComments, FaWallet, FaUserFriends } from 'react-icons/fa';

function Sidebar({ onLinkClick }) {
  const location = useLocation();

  return (
    <Nav className="flex-column sidebar p-3" variant="pills">
      <Nav.Link as={Link} to="/" active={location.pathname === '/'} onClick={onLinkClick}>
        <FaComments className="sidebar-icon" /> Chat
      </Nav.Link>
      <Nav.Link as={Link} to="/personal-expense" active={location.pathname === '/personal-expense'} onClick={onLinkClick}>
        <FaWallet className="sidebar-icon" /> Personal Expense
      </Nav.Link>
      <Nav.Link as={Link} to="/friend-transactions" active={location.pathname === '/friend-transactions'} onClick={onLinkClick}>
        <FaUserFriends className="sidebar-icon" /> Friend Transactions
      </Nav.Link>
    </Nav>
  );
}

export default Sidebar;
