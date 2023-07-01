import React from 'react';

import Exercise from '@/components/Container/Exercise';

import { exercisesService } from '../../services/exerciseService';

function PreviewPage({data}) {
  return (
    <Exercise exercise={data} isPreview />
  );
}

export async function getServerSideProps({params}) {
  const data = await exercisesService.getById(params.id);
 
  return { props: { data } }
}
export default PreviewPage;