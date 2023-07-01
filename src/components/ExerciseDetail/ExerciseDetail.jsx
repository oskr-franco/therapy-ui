import React from 'react';
import { Media } from '../Media';

import styles from './ExerciseDetail.module.scss';

function ExerciseDetail({ name, description, instructions, media }) {
  const descriptionTitle = 'Descripción';
  const instructionsTitle = 'Instrucciones';

  function breaklines(sentence) {
    return sentence.split('\\n').map((str, key) => (<p key={key}>{str}</p>));
  }

  return (
    <div className={styles.exerciseWrapper}>
      <div className={styles.column}>
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
            {...mediaItem}
            layout="responsive"
          />
          )
        )}
      </div>
    </div>
  )
}

export default ExerciseDetail;
