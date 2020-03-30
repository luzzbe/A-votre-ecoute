import React, { Component } from "react";

import "./DifferentsAssistants.scss";

import Unity, { UnityContent } from "react-unity-webgl";

const unityContent = new UnityContent("AVE/Build.json", "AVE/UnityLoader.js", { unityVersion: "2019.2.9", adjustOnWindowResize: true });

class DifferentsAssistants extends Component {
  render() {
    return (
      <div className="DifferentsAssistants">
        <h1>Différents assistants</h1>
        <div className="contenu" style={{ height: "80vh", marginTop: 20 }}>
          <Unity unityContent={unityContent} />
        </div>
      </div>
    );
  }
}

export default DifferentsAssistants;
