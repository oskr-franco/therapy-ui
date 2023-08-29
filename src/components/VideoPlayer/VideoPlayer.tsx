'use client';

import React from 'react';
import cx from 'classnames';
import dynamic from 'next/dynamic';

import styles from './VideoPlayer.module.scss';

const ReactPlayerLazy = dynamic(() => import('react-player'), { ssr: false });

type VideoPlayerProps = {
  className?: string;
  url: string;
};

function VideoPlayer({ className, url }: VideoPlayerProps) {
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

export default VideoPlayer;
