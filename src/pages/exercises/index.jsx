import React, { useEffect } from 'react';

import Exercises from '@/components/templates/Exercises'
import { withExerciseActions } from '@/hocs/withExercises';

import { getExercises } from './utils/getExercises';

function ExercisesPage({ data, loadExercises }) {
  useEffect(() => {
    loadExercises(data);
  }, [loadExercises, data]);

  if (!data) {
    return null;
  }
  return (<Exercises/>)
}

export async function getServerSideProps() {
  const data = await getExercises();
 
  // Pass data to the page via props
  return { props: { data: data } }
}

export default withExerciseActions(ExercisesPage);