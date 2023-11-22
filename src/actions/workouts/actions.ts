'use server';
import { revalidatePath } from 'next/cache';

import Paths from '@/constants/paths';
import workoutService from '@/services/workoutService';
import { Workout } from '@/types';

export async function getWorkout(id: number): Promise<Workout> {
  return workoutService.getById(id);
}

export async function createWorkout(workout: Workout): Promise<Workout> {
  workoutService.create(workout);
  revalidatePath(Paths.Workouts);
  return;
}

export async function updateWorkout(
  id: number,
  workout: Workout,
): Promise<void> {
  await workoutService.update(id, workout);
  revalidatePath(Paths.Workouts);
  revalidatePath(Paths.Workout(id));
  return;
}

export async function deleteWorkout(id: number): Promise<void> {
  await workoutService.delete(id);
  revalidatePath(Paths.Workouts);
  return;
}
