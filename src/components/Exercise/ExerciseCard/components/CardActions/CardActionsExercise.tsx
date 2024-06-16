'use client';
import React from 'react';

import { deleteExercise } from '@/actions/exercises/actions';
import PATHS from '@/constants/paths';
import ExerciseForm from '@/components/Exercise/ExerciseForm';
import withAlerts from '@/hocs/withAlerts';
import CardActions from '@/components/CardActions';

import styles from './CardActionsExercise.module.scss';
import withModal from '@/hocs/withModal';
import CardActionsExerciseProps from './CardActionsExercise.types';

function CardActionsExercise({
  id,
  name,
  slug,
  description,
  media,
  instructions,
  modal,
  alert,
}: CardActionsExerciseProps) {
  const exerciseDeleted = 'Ejercicio eliminado';
  const exercisePath = PATHS.Exercise(slug);

  const handleEdit = () => {
    modal.open({
      component: ExerciseForm,
      componentProps: {
        initialData: { id, name, description, media, instructions },
      },
    });
  };

  const handleDelete = async () => {
    deleteExercise(id, slug);
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

export default withAlerts(withModal(CardActionsExercise));
