import React from 'react';

import { Exercise as ExerciseType } from '@/types';
import ExerciseDetail, {
  ExerciseActions,
} from '@/components/Exercise/ExerciseDetail';

import styles from './Exercise.module.scss';

type ExerciseProps = {
  className?: string;
  exercise: ExerciseType;
  isPreview?: boolean;
};

function Exercise({ className, exercise, isPreview = false }: ExerciseProps) {
  const { name, description, instructions, media } = exercise;
  return (
    <div className={className}>
      {!isPreview && (
        <ExerciseActions className={styles.exerciseActions} id={exercise.id} />
      )}
      <ExerciseDetail
        name={name}
        description={description}
        instructions={instructions}
        media={media}
      />
    </div>
  );
}

export default Exercise;
