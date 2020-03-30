import PropTypes from "prop-types";
import React, { Component } from "react";
import classNames from "classnames";

const propTypes = {
  player: PropTypes.object,
  className: PropTypes.string
};

export default class SkipButton extends Component {
  constructor(props, context) {
    super(props, context);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { player } = this.props;
    console.log(player);
  }

  render() {
    const { player, className } = this.props;
    const { currentSrc } = player;

    return (
      <a
        ref={c => {
          this.button = c;
        }}
        className={classNames(className, {
          "video-react-control": true,
          "video-react-button": true
        })}
        href={currentSrc}
        tabIndex="0"
        onClick={this.handleClick}
      >
        Passer l'introduction
      </a>
    );
  }
}

DownloadButton.propTypes = propTypes;
