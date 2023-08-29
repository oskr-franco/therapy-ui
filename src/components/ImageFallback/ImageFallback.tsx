import React from 'react';
import Image from 'next/image';

import emptyImg from '@/assets/img/empty-img.jpg';

function ImageFallback({ alt, className, src, width, height, layout }) {
  if (!src)
    return <Image alt="No image" className={className} src={emptyImg} />;

  return (
    <Image
      alt={alt}
      className={className}
      src={src}
      width={width}
      height={height}
      layout={layout}
    />
  );
}

export default React.memo(ImageFallback);
