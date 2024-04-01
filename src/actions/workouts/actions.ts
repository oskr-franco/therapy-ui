'use server';
import { revalidatePath } from 'next/cache';

import Paths from '@/constants/paths';
import workoutService from '@/services/workoutService';
import { Workout } from '@/types';

export async function getWorkout(id: number): Promise<Workout> {
  return workoutService.getById(id);
}

export async function createWorkout(workout: Workout): Promise<Workout> {
  const result = workoutService.create(workout);
  revalidatePath(Paths.Workouts);
  return result;
}

export async function updateWorkout(workout: Workout): Promise<void> {
  await workoutService.update(workout.id, workout);
  revalidatePath(Paths.Workouts);
  revalidatePath(Paths.Workout(workout.slug));
  return;
}

export async function deleteWorkout(id: number, slug: string): Promise<void> {
  await workoutService.delete(id);
  revalidatePath(Paths.Workouts);
  revalidatePath(Paths.Workout(slug));
  return;
}
