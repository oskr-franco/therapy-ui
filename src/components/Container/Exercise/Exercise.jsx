import React from 'react'

import { Media } from './../../Media';

import styles from './Exercise.module.scss';

function Exercise({ exercise }) {
  const { name, description, instructions, media } = exercise;
  const descriptionTitle = 'Descripción';
  const instructionsTitle = 'Instrucciones';

  function breaklines(sentence) {
    return sentence.split('\\n').map((str, key) => (<p key={key}>{str}</p>));
  }

  return (
    <div className={styles.exerciseWrapper}>
      <div className={styles.column}>
        Exercise {exercise.id}
        <h1>{name}</h1>
        <h2>{descriptionTitle}</h2>
        <div>{breaklines(description)}</div>
        <h2>{instructionsTitle}</h2>
        <div>{breaklines(instructions)}</div>
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
