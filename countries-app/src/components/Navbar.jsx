import React from "react";
import { Link, withRouter } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        Countries
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              Anasayfa
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">
              Hakkinda
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">
              Iletisim
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default withRouter(Navbar);
