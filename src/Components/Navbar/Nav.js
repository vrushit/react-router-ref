import React from 'react';

import './Navbar.css';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav className="nav">
      <Link className="navStyle" to="/">
        <h3>Logo</h3>
        </Link>
        <ul className="nav-links">
          <Link className="navStyle" to="/about">
          <li>About</li>
          </Link>
          <Link className="navStyle" to="/shop">
          <li>Shop</li>
          </Link>
        </ul>

    </nav>

  );
}

export default Nav;
