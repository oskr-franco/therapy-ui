'use server';

import exercisesService from '@/services/exerciseService';
import { Exercise, PaginationFilter, PaginationResponse } from '@/types';

const PAGE_SIZE = 10;

export async function getExercises(
  filter?: PaginationFilter,
): Promise<PaginationResponse<Exercise>> {
  const newFilter: PaginationFilter = { pageSize: PAGE_SIZE, ...filter };
  const exercisesResponse = await exercisesService.getAll(newFilter);
  return exercisesResponse;
}
