'use client';
import React, { useEffect, useState } from 'react';

import { fetchExercises } from '@/actions/fetchExercises';
import { Skeleton } from '@/components/Loading';
import styles from './ExercisePicker.module.scss';

import ExercisePickerProps, {
  ExercisePicker as Exercise,
  Pagination,
} from './ExercisePicker.types';

function ExercisePicker({
  className,
  onSelect,
  selectedExercises,
}: ExercisePickerProps) {
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [, setPagination] = useState<Pagination>();

  async function fetchMoreData() {
    const { data, ...paginationData } = await fetchExercises();
    setExercises(data);
    setPagination(paginationData);
  }

  useEffect(() => {
    void fetchMoreData();
  }, []);

  function checkIfExerciseSelected(id: string): boolean {
    return !!selectedExercises.find((e) => e.id === id);
  }

  if (!exercises.length) return <Skeleton className={className} />;

  return (
    <div className={className}>
      {exercises.map((exercise) => (
        <label key={exercise.id} className={styles.label}>
          <input
            type="checkbox"
            value={exercise.id}
            checked={checkIfExerciseSelected(exercise.id)}
            onChange={(e) => onSelect(exercise, e.target.checked)}
          />
          {exercise.name}
        </label>
      ))}
    </div>
  );
}

export default ExercisePicker;
