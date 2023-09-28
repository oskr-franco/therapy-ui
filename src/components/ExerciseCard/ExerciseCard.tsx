import React from 'react';
import Link from 'next/link';

import CardActions from './components/CardActions/CardActions';
import { Exercise } from '@/types';

import Media from '../Media';
import styles from './ExerciseCard.module.scss';

function ExerciseCard({
  id,
  name,
  description,
  media,
  instructions,
}: Exercise) {
  const [mediaItem] = media;

  return (
    <div className={styles.card}>
      <div className={styles.head}>
        <Link href={`/exercises/${id}`} className={styles.link} />
        <Media
          className={styles.media}
          id={mediaItem.id}
          url={mediaItem.url}
          type={mediaItem.type}
        />
      </div>
      <div className={styles.body}>
        <CardActions
          id={id}
          name={name}
          description={description}
          media={media}
          instructions={instructions}
        />
        <h3>{name}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
}

export default ExerciseCard;
