import React from 'react';

import { getExercises } from './utils/getExercises';

import ExerciseCard from '../../components/ExerciseCard'

function Exercises({exercises}) {
  return (
    <div>
      {exercises.map((exercise) => (
        <ExerciseCard key={exercise.id} {...exercise} />
      ))}
    </div>
  )
}

export async function getServerSideProps() {
  const data = await getExercises();
 
  // Pass data to the page via props
  return { props: { exercises: data } }
}

export default Exercises;