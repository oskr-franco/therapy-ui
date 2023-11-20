import React from 'react';

import { Exercise as ExerciseType } from '@/types';

import styles from './Exercise.module.scss';

import ExerciseDetail, {
  ExerciseActions,
} from '@/components/Exercise/ExerciseDetail';

type ExerciseProps = {
  exercise: ExerciseType;
  isPreview?: boolean;
};

function Exercise({ exercise, isPreview = false }: ExerciseProps) {
  const { name, description, instructions, media } = exercise;
  return (
    <>
      {!isPreview && (
        <ExerciseActions className={styles.exerciseActions} id={exercise.id} />
      )}
      <ExerciseDetail
        name={name}
        description={description}
        instructions={instructions}
        media={media}
      />
    </>
  );
}

export default Exercise;
