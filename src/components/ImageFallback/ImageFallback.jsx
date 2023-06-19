import React from 'react';

import emptyImg from '/src/assets/img/empty-img.jpg'

import Image from 'next/image'

function ImageFallback(props) {
  const { 
    alt,
    className,
    src 
  } = props;

  if (!src)
    return <Image alt="No image" className={className} src={emptyImg} />

  return (
    <Image alt={alt} {...props} />
  )

}

export default React.memo(ImageFallback);