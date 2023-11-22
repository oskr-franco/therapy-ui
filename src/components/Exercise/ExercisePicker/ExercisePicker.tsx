'use client';
import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

import { getExercises } from '@/actions/exercises/actions';
import { Skeleton } from '@/components/Loading';
import styles from './ExercisePicker.module.scss';

import ExercisePickerProps, {
  ExercisePicker as Exercise,
  Pagination,
} from './ExercisePicker.types';

function ExercisePicker({
  className,
  initialExercises,
  onSelect,
  selectedExercises,
}: ExercisePickerProps) {
  const { data: initialData, ...initialPagination } = initialExercises;
  const [exercises, setExercises] = useState<Exercise[]>(initialData);
  const [pagination, setPagination] = useState<Pagination>(initialPagination);

  async function fetchMoreData() {
    const { data, ...paginationData } = await getExercises({
      after: pagination?.lastCursor,
    });
    setExercises((prevData) => [...prevData, ...data]);
    setPagination(paginationData);
  }

  function checkIfExerciseSelected(id: number): boolean {
    return !!selectedExercises.find((e) => e.id === id);
  }

  useEffect(() => {
    if (initialData.length) {
      setExercises(initialData);
    }
  }, [initialData]);

  return (
    <div id="scrollableDiv" className={className}>
      <InfiniteScroll
        dataLength={exercises.length}
        next={fetchMoreData}
        hasMore={pagination?.hasNextPage}
        loader={<Skeleton className={styles.skeleton} />}
        scrollableTarget="scrollableDiv"
      >
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
      </InfiniteScroll>
    </div>
  );
}

export default ExercisePicker;
