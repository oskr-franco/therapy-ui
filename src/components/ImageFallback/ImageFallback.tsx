import React from 'react';
import Image, { ImageProps } from 'next/image';

import emptyImg from '@/assets/img/empty-img.jpg';

type ImageFallbackProps = ImageProps & {
  className?: string;
};

function ImageFallback({
  alt,
  className,
  src,
  width,
  height,
  fill,
}: ImageFallbackProps) {
  if (!src)
    return <Image alt="No image" className={className} src={emptyImg} />;

  return (
    <Image
      alt={alt}
      className={className}
      fill={fill}
      src={src}
      width={width}
      height={height}
    />
  );
}

export default React.memo(ImageFallback);
