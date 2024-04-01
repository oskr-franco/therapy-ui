import React from 'react';

import workoutService from '@/services/workoutService';
import Workout from '@/components/Container/Workout';

import styles from './PreviewWorkoutPage.module.scss';
import { PageProps } from '@/types';

async function PreviewWorkoutPage({ params }: PageProps) {
  const { slug } = params;
  const data = await workoutService.getBySlug(slug);
  return <Workout className={styles.workout} workout={data} isPreview />;
}

export default PreviewWorkoutPage;
