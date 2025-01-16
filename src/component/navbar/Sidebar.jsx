import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import SidebarData from "../../data/SidebarData";
import "./Sidebar.css";

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container-fluid d-flex justify-content-between">
          <button className="btn menu-bars text-white" onClick={showSidebar}>
            <FaBars />
          </button>
          <Link to="/" className="navbar-brand mx-auto">
            <img
              src="https://picsum.photos/200"
              alt="Logo"
              className="navbar-logo"
            />
          </Link>
        </div>
      </nav>
      <div className={sidebar ? "sidebar active" : "sidebar"}>
        <div className="sidebar-header d-flex justify-content-between align-items-center p-3">
          <h4 className="text-white">Menu</h4>
          <button className="btn text-white close-btn" onClick={showSidebar}>
            <AiOutlineClose />
          </button>
        </div>
        <ul className="list-unstyled">
          {SidebarData.map((item, index) => (
            <li key={index} className="nav-item">
              <Link to={item.path} className="nav-link text-white">
                {item.icon}
                <span className="ms-2">{item.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
export default Sidebar;