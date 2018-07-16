import React from 'react';
import './NavBar.css';

const NavBar = (props) => (
  <div className="nav-bar">
  <nav>
    <ul>
      <li><a href="/" className="nav-link">Home</a></li>
      <li><a href="/saved" className="nav-link">Saved</a></li>
    </ul>
  </nav>
  </div>
);

export default NavBar;