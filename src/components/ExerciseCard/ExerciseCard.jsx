import React from 'react';
// import Image from 'next/image'
import ImageFallback from '../ImageFallback';

import styles from './ExerciseCard.module.scss';

function ExerciseCard({ name, description, media }) {
  // const [mediaItem] = media;
  // const { url } = mediaItem;
  return (
    <div className={styles.card}>
      <div className={styles.head}>
        <ImageFallback
          className={styles.image}
          width={50}
          height={50}
          fill
        />
      </div>
      <div className={styles.body}>
        <h2 className={styles.name}>{name}</h2>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
}

export default ExerciseCard;