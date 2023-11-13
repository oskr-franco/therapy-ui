import React from 'react';
import cx from 'classnames';
import { BsChevronRight } from 'react-icons/bs';

import { IconButton } from '@/components/Button';

import { Workout, WorkoutExercise } from '@/types';
import CardActionsWorkout from './components/CardActionsWorkout';

import styles from './WorkoutCard.module.scss';

type WorkoutProps = Pick<Workout, 'id' | 'name' | 'workoutExercises'>;

type WorkoutCardProps = WorkoutProps & {
  className?: string;
};

function ExerciseInfo({ name, sets, reps }: WorkoutExercise) {
  return (
    <div className={styles.exercise}>
      <span className={styles.exerciseName}>{name}: </span>
      <span className={styles.exerciseInfo}>
        {sets} X {reps}
      </span>
    </div>
  );
}

function WorkoutCard({
  className,
  id,
  name,
  workoutExercises,
}: WorkoutCardProps) {
  const seeMore = 'Ver más';
  const FirstThreeExercises = workoutExercises.slice(0, 3);
  return (
    <div className={cx(styles.card, className)}>
      <CardActionsWorkout id={id} />
      <h3>{name}</h3>
      <div className={styles.exercises}>
        {FirstThreeExercises.map((exercise) => (
          <ExerciseInfo key={exercise.exerciseId} {...exercise} />
        ))}
        {workoutExercises.length >= 3 && (
          <IconButton
            href={`/workouts/${id}`}
            className={styles.seeMore}
            icon={BsChevronRight}
            tooltip={seeMore}
          />
        )}
      </div>
    </div>
  );
}

export default WorkoutCard;
