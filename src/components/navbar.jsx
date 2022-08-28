import React from "react";

const Navbar = ({ counters }) => {
  return (
    <div className="m-2">
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand">
          Navbar <span className="btn btn-secondary">{counters.length}</span>
        </a>
      </nav>
    </div>
  );
};

export default Navbar;
