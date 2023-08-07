import React from 'react';

import Exercise from '@/components/Container/Exercise';
import { exercisesService } from '@/services/exerciseService';

async function PreviewPage({ params }) {
  const { id } = params;
  const data = await exercisesService.getById(id);
  return (
    <Exercise exercise={data} isPreview />
  );
}

export default PreviewPage;