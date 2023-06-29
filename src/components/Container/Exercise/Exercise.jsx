import React from 'react'

import { Media } from './../../Media';

import styles from './Exercise.module.scss';

function Exercise({ exercise }) {
  const { name, description, instructions, media } = exercise;
  return (
    <div>
      Exercise {exercise.id}
      <h2>{name}</h2>
      {media.map((mediaItem) => (
        <Media
          key={mediaItem.id}
          className={styles.media}
          {...mediaItem} />
        )
      )}
      <p>{description}</p>
      <div>{instructions}</div>
    </div>
  )
}

export default Exercise;
