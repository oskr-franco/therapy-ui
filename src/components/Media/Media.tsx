import React from 'react';

import { Media as MediaType } from '@/types';
import ImageFallback from '@/components/ImageFallback';
import VideoPlayer from '@/components/VideoPlayer';

type MediaProps = MediaType & {
  className?: string;
  layout?: 'fill' | 'fixed' | 'intrinsic' | 'responsive';
};

function Media({ id, url, type, className, layout }: MediaProps) {
  if (type === 'Image' || !url) {
    return (
      <ImageFallback
        alt={id}
        className={className}
        width={120}
        height={40}
        src={url}
        layout={layout}
      />
    );
  }

  return <VideoPlayer className={className} url={url} />;
}

export default Media;
