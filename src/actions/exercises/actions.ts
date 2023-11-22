'use server';

import { revalidatePath } from 'next/cache';

import Paths from '@/constants/paths';
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

export async function deleteExercise(id: string): Promise<void> {
  await exercisesService.delete(id);
  revalidatePath(Paths.Exercises);
  return;
}

export async function createExercise(exercise: Exercise): Promise<Exercise> {
  const createdExercise = await exercisesService.create(exercise);
  revalidatePath(Paths.Exercises);
  // revalidatePath(Paths.Workouts, 'page');
  revalidatePath('/admin/workouts/[id]', 'page');
  return createdExercise;
}

export async function updateExercise(
  id: number,
  exercise: Exercise,
): Promise<void> {
  await exercisesService.update(id, exercise);
  revalidatePath(Paths.Exercises);
  revalidatePath(Paths.Exercise(id));
  return;
}
