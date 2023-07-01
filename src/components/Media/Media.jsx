'use-client';
import React from "react";
import dynamic from 'next/dynamic';

import ImageFallback from '@/components/ImageFallback';

const VideoPlayerLazy = dynamic(
  () => import('@/components/VideoPlayer'),
  { ssr: false }
);

function Media({ id, url, type, className, ...props }) {
  const { layout } = props;
  if (type === "Image" || !url) {
    return (
      <ImageFallback
        alt={id}
        className={className}
        width={100}
        height={100}
        src={url}
        layout={layout}
      />
    )
  }

  return (
    <VideoPlayerLazy className={className} url={url} />
  )
}

export default Media;