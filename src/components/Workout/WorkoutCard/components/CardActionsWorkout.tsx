'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

import Paths from '@/constants/paths';
import withAlerts from '@/hocs/withAlerts';
import CardActions from '@/components/CardActions';
import AlertType from '@/hocs/withAlerts.types';
import { deleteWorkout } from '@/actions/workouts/actions';

import styles from './CardActionsWorkout.module.scss';

type CardActionsWorkoutProps = {
  id: number;
  alert: AlertType;
};

function CardActionsWorkout({ id, alert }: CardActionsWorkoutProps) {
  const router = useRouter();
  const exerciseDeleted = 'Workout eliminado';
  const workoutPath = Paths.Workout(id);
  const editWorkoutPath = Paths.EditWorkout(id);

  const handleEdit = () => {
    router.push(editWorkoutPath);
  };

  const handleDelete = async () => {
    await deleteWorkout(id);
    alert.success(exerciseDeleted);
  };
  return (
    <CardActions
      className={styles.actions}
      to={workoutPath}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  );
}

export default withAlerts(CardActionsWorkout);
