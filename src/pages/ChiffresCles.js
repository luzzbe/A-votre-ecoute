import React, { Component } from "react";

import "./ChiffresCles.scss";
import YouTube from "react-youtube";

class ChiffresCles extends Component {
  state = {
    videoId: "aHJDZAIozo8"
  };

  changeVideo = videoId => {
    this.setState({
      videoId
    });
  };

  render() {
    return (
      <div className="ChiffresCles">
        <h1>Chiffres clés</h1>
        <div className="contenu">
          <div className="ecran">
            <YouTube videoId={this.state.videoId} className="video" />
          </div>
          <div className="liste">
            <ul>
              <li>
                <button onClick={() => this.changeVideo("aHJDZAIozo8")}>
                  Répartition du marché des assistants vocaux
                </button>
              </li>
              <li>
                <button onClick={() => this.changeVideo("eyIPusKxeuI")}>
                  Assistants vocaux dans le monde du commerce
                </button>
              </li>
              <li>
                <button onClick={() => this.changeVideo("8HbaZj7yUIQ")}>
                  La présence des assistants vocaux en France
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default ChiffresCles;
