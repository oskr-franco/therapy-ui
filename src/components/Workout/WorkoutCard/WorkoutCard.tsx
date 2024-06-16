import React from 'react';
import cx from 'classnames';
import { BsChevronRight } from 'react-icons/bs';

import { IconButton } from '@/components/Button';
import PATHS from '@/constants/paths';

import { Workout, WorkoutExercise } from '@/types';
import CardActionsWorkout from './components/CardActionsWorkout';

import styles from './WorkoutCard.module.scss';

type WorkoutCardProps = Workout & {
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
  slug,
  workoutExercises,
}: WorkoutCardProps) {
  const seeMore = 'Ver más';
  const firstThreeExercises = workoutExercises.slice(0, 3);
  const workoutPath = PATHS.Workout(slug);
  return (
    <div className={cx(styles.card, className)}>
      <CardActionsWorkout id={id} slug={slug} />
      <h3>{name}</h3>
      <div className={styles.exercises}>
        {firstThreeExercises.map((exercise) => (
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
