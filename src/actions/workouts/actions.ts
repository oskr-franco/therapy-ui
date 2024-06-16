'use server';
import { revalidatePath } from 'next/cache';

import PATHS from '@/constants/paths';
import workoutService from '@/services/workoutService';
import { Workout } from '@/types';

export async function getWorkout(id: number): Promise<Workout> {
  return workoutService.getById(id);
}

export async function createWorkout(workout: Workout): Promise<Workout> {
  const result = workoutService.create(workout);
  revalidatePath(PATHS.Workouts);
  return result;
}

export async function updateWorkout(workout: Workout): Promise<void> {
  await workoutService.update(workout.id, workout);
  revalidatePath(PATHS.Workouts);
  revalidatePath(PATHS.Workout(workout.slug));
  return;
}

export async function deleteWorkout(id: number, slug: string): Promise<void> {
  await workoutService.delete(id);
  revalidatePath(PATHS.Workouts);
  revalidatePath(PATHS.Workout(slug));
  return;
}
