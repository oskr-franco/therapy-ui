'use client';

import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import dynamic from 'next/dynamic';

import styles from './VideoPlayer.module.scss';

const ReactPlayerLazy = dynamic(() => import('react-player'), { ssr: false });

function VideoPlayer(props) {
  const { className, url } = props;
  return (
    <div className={cx(styles.playerWrapper, className)}>
      <ReactPlayerLazy
        className={styles.reactPlayer}
        url={url}
        width="100%"
        height="100%"
        controls
        light
      />
    </div>
  );
}

VideoPlayer.propTypes = {
  url: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default VideoPlayer;
