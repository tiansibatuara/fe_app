import React from "react";
import Home from "../pages/Home";
import Header from "./Header";
import { Link, Route, Routes } from "react-router-dom";
import NotFound from "./NotFound";
import NavDropdown from "./NavDropdown";
import Blog from "../pages/Blog";
import Teams from "../pages/Teams";
import Services from "../pages/Services";

const Sidebar = () => {
  return (
    <div className="drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/services" element={<Services />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
          {/* Sidebar content here */}
          <li>
            <a>Sidebar Item 1</a>
          </li>
          <li>
            <a>Sidebar Item 2</a>
          </li>
          <NavDropdown />
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
