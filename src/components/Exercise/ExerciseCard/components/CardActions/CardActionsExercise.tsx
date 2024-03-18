'use client';
import React from 'react';

import { deleteExercise } from '@/actions/exercises/actions';
import Paths from '@/constants/paths';
import ExerciseForm from '@/components/Exercise/ExerciseForm';
import withAlerts from '@/hocs/withAlerts';
import CardActions from '@/components/CardActions';

import styles from './CardActionsExercise.module.scss';
import withOpenModal from '@/hocs/withOpenModal';
import CardActionsExerciseProps from './CardActionsExercise.types';

function CardActionsExercise({
  id,
  name,
  description,
  media,
  instructions,
  openModal,
  alert,
}: CardActionsExerciseProps) {
  const exerciseDeleted = 'Ejercicio eliminado';
  const exercisePath = Paths.Exercise(id);

  const handleEdit = () => {
    openModal({
      component: ExerciseForm,
      componentProps: {
        initialData: { id, name, description, media, instructions },
      },
    });
  };

  const handleDelete = async () => {
    deleteExercise(id);
    alert.success(exerciseDeleted);
  };
  return (
    <div className={styles.actions}>
      <CardActions
        to={exercisePath}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    </div>
  );
}

export default withAlerts(withOpenModal(CardActionsExercise));
