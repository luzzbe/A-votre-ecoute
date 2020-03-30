import React, { Component } from "react";

import "./Video.scss";

import { Player, ControlBar, PlayToggle, ForwardControl, BigPlayButton, CurrentTimeDisplay } from "video-react";

import video from "../intro.mp4";

class Video extends Component {
  state = {
    isPlaying: false
  };

  toggleVideo = () => {
    this.setState({
      isPlaying: !this.state.isPlaying
    });
  };

  componentDidMount() {
    this.player.subscribeToStateChange(this.handleStateChange.bind(this));
  }

  handleStateChange(state, prevState) {
    if (state.ended) {
      this.props.history.push("/accueil");
    }
  }

  render() {
    return (
      <div className="Video">
        <Player
          ref={player => {
            this.player = player;
          }}
          playsInline
          src={video}
          fluid={false}
          width="100%"
          height="100%"
        >
          <BigPlayButton position="center" />
          <ControlBar autoHide={false} disableDefaultControls={true} className="controls">
            <PlayToggle />
            <ForwardControl seconds={5} order={2} />
            <CurrentTimeDisplay order={3.1} />
          </ControlBar>
        </Player>
      </div>
    );
  }
}

export default Video;
