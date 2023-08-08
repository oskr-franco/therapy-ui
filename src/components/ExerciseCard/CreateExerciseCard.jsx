/* eslint-disable react/button-has-type */
import React from 'react';
import { FaPlusCircle } from 'react-icons/fa';
import cx from 'classnames';

import cardStyles from './ExerciseCard.module.scss';
import styles from './CreateExerciseCard.module.scss';

function CreateExerciseCard({ onClick }) {
  const text = 'Agregar Ejercicio';
  return (
    <button className={cx(cardStyles.card, styles.container)} onClick={onClick}>
      <div className={styles.text}>{text}</div>
      <FaPlusCircle size={40} className={styles.icon} />
    </button>
  );
}

export default CreateExerciseCard;
