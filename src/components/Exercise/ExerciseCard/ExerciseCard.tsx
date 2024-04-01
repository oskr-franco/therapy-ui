import React from 'react';
import Link from 'next/link';
import cx from 'classnames';

import Paths from '@/constants/paths';

import CardActions from './components/CardActions/CardActionsExercise';
import Media from '../../Media';

import ExerciseCardType from './ExerciseCard.types';
import styles from './ExerciseCard.module.scss';

function ExerciseCard({
  className,
  id,
  name,
  description,
  media,
  instructions,
  slug,
}: ExerciseCardType) {
  const [mediaItem] = media;
  const exercisePath = Paths.Exercise(slug);

  return (
    <div className={cx(className, styles.card)}>
      <div className={styles.head}>
        <Link href={exercisePath} className={styles.link} />
        <Media className={styles.media} {...mediaItem} />
      </div>
      <div className={styles.body}>
        <CardActions
          id={id}
          name={name}
          description={description}
          media={media}
          instructions={instructions}
          slug={slug}
        />
        <h3>{name}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
}

export default ExerciseCard;
