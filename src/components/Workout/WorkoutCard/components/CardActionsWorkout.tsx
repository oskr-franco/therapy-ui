'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

import withAlerts from '@/hocs/withAlerts';
import CardActions from '@/components/CardActions';
import AlertType from '@/hocs/withAlerts.types';
import { deleteWorkout } from '@/actions/workouts/actions';

import styles from './CardActionsWorkout.module.scss';

type CardActionsWorkoutProps = {
  id: string;
  alert: AlertType;
};

function CardActionsWorkout({ id, alert }: CardActionsWorkoutProps) {
  const router = useRouter();
  const exerciseDeleted = 'Workout eliminado';

  const handleEdit = () => {
    router.push(`/workouts/build/${id}`);
  };

  const handleDelete = async () => {
    await deleteWorkout(id);
    alert.success(exerciseDeleted);
  };
  return (
    <CardActions
      className={styles.actions}
      to={`/workouts/${id}`}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  );
}

export default withAlerts(CardActionsWorkout);
