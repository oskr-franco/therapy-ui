import React from 'react';

import ImageFallback from '@/components/ImageFallback';
import VideoPlayer from '@/components/VideoPlayer';

type MediaProps = {
  id: string;
  url: string;
  type: string;
  className?: string;
  layout?: 'fill' | 'fixed' | 'intrinsic' | 'responsive';
};

function Media({ id, url, type, className, layout }: MediaProps) {
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
