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
  const exercisesResponse = await exercisesService.getByUser(newFilter);
  return exercisesResponse;
}

export async function createExercise(exercise: Exercise): Promise<Exercise> {
  const createdExercise = await exercisesService.create(exercise);
  revalidatePath(Paths.Exercises);
  // revalidatePath(Paths.Workouts, 'page');
  revalidatePath('/admin/workouts/[slug]', 'page');
  return createdExercise;
}

export async function updateExercise(exercise: Exercise): Promise<void> {
  await exercisesService.update(exercise.id, exercise);
  revalidatePath(Paths.Exercises);
  revalidatePath(Paths.Exercise(exercise.slug));
  return;
}

export async function deleteExercise(id: number, slug: string): Promise<void> {
  await exercisesService.delete(id);
  revalidatePath(Paths.Exercises);
  revalidatePath(Paths.Exercise(slug));
  return;
}
