import React from "react";
import { Link } from "react-router-dom";

const NavDropdown = () => {
  return (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/blog">Blogs</Link>
      </li>
      <li>
        <Link to="/teams">Teams</Link>
      </li>
      <li>
        <Link to="/services">Services</Link>
      </li>
      <li>
        <a>Parent</a>
        <ul className="p-2">
          <li>
            <a>Submenu 1</a>
          </li>
          <li>
            <a>Submenu 2</a>
          </li>
        </ul>
      </li>
      <li>
        <a>Item 3</a>
      </li>
    </>
  );
};

export default NavDropdown;
