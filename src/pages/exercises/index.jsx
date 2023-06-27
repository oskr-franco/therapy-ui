import React from 'react';

import Exercises from '@/components/templates/Exercises'

import { exercisesService } from '../../services/exerciseService';

function ExercisesPage({ exercises }) {

  if (!exercises) {
    return null;
  }
  return (<Exercises exercises={exercises} />)
}

export async function getServerSideProps() {
  const data = await exercisesService.getExercises();
 
  // Pass data to the page via props
  return { props: { exercises: data } }
}

export default ExercisesPage;