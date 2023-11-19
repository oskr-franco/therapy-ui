import React from 'react';
import cx from 'classnames';
import { BsChevronRight } from 'react-icons/bs';

import { IconButton } from '@/components/Button';
import Paths from '@/constants/paths';

import { Workout, WorkoutExercise } from '@/types';
import CardActionsWorkout from './components/CardActionsWorkout';

import styles from './WorkoutCard.module.scss';

type WorkoutProps = Pick<Workout, 'id' | 'name' | 'workoutExercises'>;

type WorkoutCardProps = WorkoutProps & {
  className?: string;
};

function ExerciseInfo({ name, sets, reps }: WorkoutExercise) {
  const setsText = 'Series';
  const repsText = 'Repeticiones';
  const exerciseText = `${name}: ${sets} ${setsText} - ${reps} ${repsText}`;
  return (
    <div className={styles.exercise}>
      <span>{exerciseText}</span>
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
  const workoutPath = Paths.Workout(id);
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
            href={workoutPath}
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
