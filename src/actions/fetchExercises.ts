'use server';

import exercisesService from '@/services/exerciseService';
import { Exercise, PaginationFilter, PaginationResponse } from '@/types';

export async function fetchExercises(
  filter?: PaginationFilter,
): Promise<PaginationResponse<Exercise>> {
  const exercisesResponse = await exercisesService.getAll(filter);
  return exercisesResponse;
}
