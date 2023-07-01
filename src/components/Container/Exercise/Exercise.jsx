import React from 'react'

import ExerciseDetail, { ExerciseActions } from '@/components/ExerciseDetail';

function Exercise({ exercise, isPreview }) {

  return (
    <>
      {!isPreview && (<ExerciseActions id={exercise.id} />)}
      <ExerciseDetail {...exercise} />
    </>
  )
}

export default Exercise;
