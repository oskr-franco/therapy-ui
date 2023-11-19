import React from 'react';
import cx from 'classnames';

import Media from '../../Media';
import Carousel from '@/components/Carousel';

import styles from './ExerciseDetail.module.scss';

function ExerciseDetail({ name, description, instructions, media }) {
  const descriptionTitle = 'Descripción';
  const instructionsTitle = 'Instrucciones';

  function breaklines(sentence) {
    return sentence.split('\\n').map((str) => <p key={str}>{str}</p>);
  }

  return (
    <>
      <h1 className={styles.title}>{name}</h1>
      <div className={styles.exerciseWrapper}>
        <div className={cx(styles.column, styles.descriptionContainer)}>
          <h2>{descriptionTitle}</h2>
          <div>{breaklines(description)}</div>
          {instructions && (
            <>
              <h2>{instructionsTitle}</h2>
              <div>{breaklines(instructions)}</div>
            </>
          )}
        </div>
        <div className={styles.divider} />
        <div className={cx(styles.column, styles.carouselContainer)}>
          <Carousel>
            {media.map((mediaItem) => (
              <Media
                key={mediaItem.id}
                className={styles.media}
                {...mediaItem}
                layout="responsive"
              />
            ))}
          </Carousel>
        </div>
      </div>
    </>
  );
}

export default ExerciseDetail;
