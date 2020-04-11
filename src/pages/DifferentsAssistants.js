import React, { Component } from "react";
import Iframe from "react-iframe";

import "./DifferentsAssistants.scss";

class DifferentsAssistants extends Component {
  render() {
    return (
      <div className="DifferentsAssistants">
        <h1>Différents assistants</h1>
        <div className="contenu" style={{ height: "80vh", marginTop: 20 }}>
          <Iframe url="/AVE/index.html" width="100%" height="100%" id="myId" className="unityFrame" display="initial" position="relative" />
        </div>
      </div>
    );
  }
}

export default DifferentsAssistants;
