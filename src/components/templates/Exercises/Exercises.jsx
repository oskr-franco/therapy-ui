
import React from 'react';

import ExerciseCard from '@/components/ExerciseCard'
import {withOpenModal} from '@/hocs/withOpenModal';

function Exercises({ exercises, openModal}) {
  return (
    <>
      <button onClick={openModal}>Click me</button>
      <div>
        {exercises.map((exercise) => (
          <ExerciseCard key={exercise.id} {...exercise} />
        ))}
      </div>
    </>
  );
}

export default withOpenModal(Exercises);