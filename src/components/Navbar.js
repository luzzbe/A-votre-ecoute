import React from "react";
import { Link, withRouter } from "react-router-dom";
import { FaHome, FaVolumeUp, FaExpand, FaVolumeMute } from "react-icons/fa";

import "./Navbar.scss";

const Navbar = props => {
  return (
    <div className="Navbar">
      {console.log(props)}
      {props.location.pathname !== "/" &&
        props.location.pathname !== "/accueil" && (
          <div className="left">
            <Link to="/accueil">
              <FaHome />
            </Link>
          </div>
        )}
      {props.location.pathname !== "/" && (
        <div className="right">
          <button onClick={() => props.setIsMuted(!props.isMuted)}>
            {props.isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
          </button>
          <button onClick={() => props.setIsFullscreen(!props.isFullscreen)}>
            <FaExpand />
          </button>
        </div>
      )}
    </div>
  );
};

export default withRouter(Navbar);
