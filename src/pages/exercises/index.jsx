import React from 'react';

import Exercises from '@/components/templates/Exercises'

import { getExercises } from './utils/getExercises';

function ExercisesPage({exercises}) {
  return (<Exercises exercises={exercises} />)
}

export async function getServerSideProps() {
  const data = await getExercises();
 
  // Pass data to the page via props
  return { props: { exercises: data } }
}

export default ExercisesPage;