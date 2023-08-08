import React from 'react';

import ImageFallback from '@/components/ImageFallback';
import VideoPlayer from '@/components/VideoPlayer';

function Media({ id, url, type, className, ...props }) {
  const { layout } = props;
  if (type === 'Image' || !url) {
    return (
      <ImageFallback
        alt={id}
        className={className}
        width={100}
        height={100}
        src={url}
        layout={layout}
      />
    );
  }

  return <VideoPlayer className={className} url={url} />;
}

export default Media;
