import React from 'react';
import ReactPlayer from 'react-player'
import cx from 'classnames';
import PropTypes from "prop-types";

import styles from './VideoPlayer.module.scss';

function VideoPlayer({ className, url, ...props}) {
  return (
    <div className={cx(styles.playerWrapper, className)}>
      <ReactPlayer
        className={styles.reactPlayer}
        url={url}
        width='100%'
        height='100%'
        controls={true}
        light
        {...props}
      />
    </div>
  )
}

VideoPlayer.propTypes = {
  url: PropTypes.string.isRequired,
};

export default VideoPlayer;