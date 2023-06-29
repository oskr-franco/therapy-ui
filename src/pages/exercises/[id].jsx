import React from 'react';

import Exercise from '@/components/Container/Exercise';

import { exercisesService } from '../../services/exerciseService';

function ExercisePage({exercise}) {
  return (
    <Exercise exercise={exercise} />
  );
}

export async function getServerSideProps({params}) {
  const data = await exercisesService.getById(params.id);
 
  return { props: { exercise: data } }
}


export default ExercisePage;
