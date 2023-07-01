import React from 'react';

import Exercises from '@/components/Container/Exercises'

import { exercisesService } from '../../services/exerciseService';

function ExercisesPage({ data }) {

  if (!data) {
    return null;
  }
  return (<Exercises data={data} />)
}

export async function getServerSideProps() {
  const data = await exercisesService.getAll();
 
  // Pass data to the page via props
  return { props: { data: data } }
}

export default ExercisesPage;