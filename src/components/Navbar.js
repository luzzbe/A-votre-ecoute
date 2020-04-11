import React from "react";
import { Link, withRouter } from "react-router-dom";
import { FaHome, FaExpand } from "react-icons/fa";

import "./Navbar.scss";

const Navbar = props => {
  return (
    <div className="Navbar">
      {props.location.pathname !== "/" && props.location.pathname !== "/accueil" && (
        <div className="left">
          <Link to="/accueil">
            <FaHome />
          </Link>
        </div>
      )}
      {props.location.pathname !== "/" && (
        <div className="right">
          <button onClick={() => props.setIsFullscreen(!props.isFullscreen)}>
            <FaExpand />
          </button>
        </div>
      )}
    </div>
  );
};

export default withRouter(Navbar);
