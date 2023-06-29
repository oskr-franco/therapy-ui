import React from 'react'

import { Media } from './../../Media';

import styles from './Exercise.module.scss';

function Exercise({ exercise }) {
  const { name, description, instructions, media } = exercise;
  return (
    <div className={styles.exerciseWrapper}>
      <div className={styles.column}>
        Exercise {exercise.id}
        <h2>{name}</h2>
        <p>{description}</p>
        <div>{instructions}</div>
      </div>
      <div className={styles.divider} />
      <div className={styles.column}>
        {media.map((mediaItem) => (
          <Media
            key={mediaItem.id}
            className={styles.media}
            {...mediaItem} />
          )
        )}
      </div>
    </div>
  )
}

export default Exercise;
