/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Image from 'next/image';

import emptyImg from '@/assets/img/empty-img.jpg';

function ImageFallback(props) {
  const { alt, className, src } = props;

  if (!src)
    return <Image alt="No image" className={className} src={emptyImg} />;

  return <Image alt={alt} {...props} />;
}

export default React.memo(ImageFallback);
