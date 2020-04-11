import React, { Component } from "react";

import "./PrincipauxUsages.scss";
import imageUsages from "../images/principaux-usages.png";

class DifferentsAssistants extends Component {
  render() {
    return (
      <div className="DifferentsAssistants">
        <h1>
          Top 3 <br />
          <span>des usages</span>
        </h1>
        <div className="contenu">
          <img src={imageUsages} alt="principaux-usages" />
        </div>
      </div>
    );
  }
}

export default DifferentsAssistants;
