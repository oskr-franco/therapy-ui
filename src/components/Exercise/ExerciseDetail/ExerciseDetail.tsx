import React from 'react';
import cx from 'classnames';

import Media from '../../Media';
import Carousel from '@/components/Carousel';

import ExerciseDetailProps from './ExerciseDetail.types';
import styles from './ExerciseDetail.module.scss';

function ExerciseDetail({
  name,
  description,
  instructions,
  media,
  children,
}: ExerciseDetailProps) {
  const descriptionTitle = 'Descripción';
  const instructionsTitle = 'Instrucciones';

  function breaklines(sentence) {
    return sentence.split('\\n').map((str) => <p key={str}>{str}</p>);
  }

  return (
    <>
      <h2 className={styles.title}>{name}</h2>
      <div className={styles.exerciseWrapper}>
        <div className={cx(styles.column, styles.descriptionContainer)}>
          <h3>{descriptionTitle}</h3>
          <div>{breaklines(description)}</div>
          {instructions && (
            <>
              <h3>{instructionsTitle}</h3>
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
              />
            ))}
          </Carousel>
          {children}
        </div>
      </div>
    </>
  );
}

export default ExerciseDetail;
