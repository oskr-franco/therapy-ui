import React from 'react';
import ImageFallback from '../ImageFallback';

import styles from './ExerciseCard.module.scss';

function ExerciseCard({ name, description, media }) {
  const mediaItem = media.find((media) => media.type==="Image")
  const { url } = mediaItem || {};
  return (
    <div className={styles.card}>
      <div className={styles.head}>
        <ImageFallback
          className={styles.media}
          width={50}
          height={50}
          src={url}
          layout="responsive"
        />
      </div>
      <div className={styles.body}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
}

export default ExerciseCard;