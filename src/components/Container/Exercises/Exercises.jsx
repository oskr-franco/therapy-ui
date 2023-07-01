import React, { useCallback, useState, useEffect } from 'react';
import { FaPlusCircle } from "react-icons/fa";

import ExerciseCard from '@/components/ExerciseCard';
import ExerciseForm from '@/components/ExerciseForm';
import { IconButton } from '@/components/Button';
import { withOpenModal } from '@/hocs/withOpenModal';

import styles from './Exercises.module.scss';

function Exercises({ data, openModal }) {
  const [exercises, setExercises] = useState(data);

  const onCreateExerciseHandler = useCallback(() => {
    openModal({
      component: ExerciseForm,
    });
  }, [openModal]);

  if (!data) {
    return null;
  }

  const handleDelete = async (id) => {
    setExercises(exercises.filter((item) => item.id !== id));
  }

  return (
    <>
      <IconButton
        icon={FaPlusCircle}
        onClick={onCreateExerciseHandler}
        className={styles.addBtn}
        tooltip="Agregar Ejercicio"
        tooltipPosition="left"
      />
      <div className={styles.cards}>
        {exercises.map((exercise) => (
          <ExerciseCard key={exercise.id} {...exercise} onDelete={handleDelete} />
        ))}
      </div>
    </>
  );
}

export default withOpenModal(Exercises);