'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

import fetchWrapper from '@/helpers/fetchWrapper';

import ExerciseForm from '@/components/Exercise/ExerciseForm';
import withAlerts from '@/hocs/withAlerts';
import CardActions from '@/components/CardActions';

import styles from './CardActionsExercise.module.scss';
import withOpenModal from '@/hocs/withOpenModal';

function CardActionsExercise({
  id,
  name,
  description,
  media,
  instructions,
  openModal,
  alert,
}) {
  const router = useRouter();
  const exerciseDeleted = 'Ejercicio eliminado';

  const handleEdit = () => {
    openModal({
      component: ExerciseForm,
      componentProps: {
        initialData: { id, name, description, media, instructions },
      },
    });
  };

  const handleDelete = async () => {
    await fetchWrapper.delete(`/api/exercise/${id}`);
    router.refresh();
    alert.success(exerciseDeleted);
  };
  return (
    <div className={styles.actions}>
      <CardActions
        to={`/exercises/${id}`}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    </div>
  );
}

export default withAlerts(withOpenModal(CardActionsExercise));
