import React from "react";
import { Link } from "react-router-dom";

const Layout = () => {
  return (
    <div className="bg-dark dash">
      <ul className="nav  justify-content-around">
        <li className="nav-item">
          <Link
            className="nav-link active text-white"
            aria-current="page"
            to="/dashboard"
          >
            Dashboard
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/services">
            Services
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/reports">
            Reports
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Layout;
