import React from 'react';

import { Media as MediaType } from '@/types';
import ImageFallback from '@/components/ImageFallback';
import VideoPlayer from '@/components/VideoPlayer';

type MediaProps = MediaType & {
  className?: string;
};

function Media({ id, url, type, className }: MediaProps) {
  if (type === 'Image' || !url) {
    return (
      <ImageFallback
        alt={`${id}`}
        className={className}
        width={450}
        height={150}
        src={url}
      />
    );
  }

  return <VideoPlayer className={className} url={url} />;
}

export default Media;
