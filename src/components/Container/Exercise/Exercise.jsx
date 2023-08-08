import React from 'react';

import ExerciseDetail, { ExerciseActions } from '@/components/ExerciseDetail';

function Exercise({ exercise, isPreview }) {
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
