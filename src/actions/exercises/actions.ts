'use server';

import exercisesService from '@/services/exerciseService';
import { Exercise, PaginationFilter, PaginationResponse } from '@/types';
import { revalidatePath } from 'next/cache';

const PAGE_SIZE = 10;

export async function getExercises(
  filter?: PaginationFilter,
): Promise<PaginationResponse<Exercise>> {
  const newFilter: PaginationFilter = { pageSize: PAGE_SIZE, ...filter };
  const exercisesResponse = await exercisesService.getAll(newFilter);
  return exercisesResponse;
}

export async function deleteExercise(id: string): Promise<void> {
  await exercisesService.delete(id);
  revalidatePath('/exercises');
  return;
}

export async function createExercise(exercise: Exercise): Promise<Exercise> {
  const createdExercise = await exercisesService.create(exercise);
  revalidatePath('/exercises');
  return createdExercise;
}

export async function updateExercise(
  id: number,
  exercise: Exercise,
): Promise<void> {
  await exercisesService.update(id, exercise);
  revalidatePath('/exercises');
  revalidatePath(`/exercises/${id}`);
  return;
}
