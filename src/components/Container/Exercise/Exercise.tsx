import React from 'react';

import ExerciseDetail, { ExerciseActions } from '@/components/ExerciseDetail';

type ExerciseProps = {
  exercise: any;
  isPreview?: boolean;
};

function Exercise({ exercise, isPreview = false }: ExerciseProps) {
  const { name, description, instructions, media } = exercise;
  return (
    <>
      {!isPreview && <ExerciseActions id={exercise.id} />}
      <ExerciseDetail
        name={name}
        description={description}
        instructions={instructions}
        media={media}
      />
    </>
  );
}

export default Exercise;
